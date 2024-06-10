import { useEffect, useState } from 'react';
import { fetchStationData } from './DetailApi.js';
import DetailMap from './DetailMap.js';
import DetailHeader from './DetailHeader.js';  // 'Header'로 수정

function DetailModal({ stationId, closeModal }) {
  const [station, setStation] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchStationData(stationId);
        setStation(data);
      } catch (error) {
        console.error('API 호출 중 오류 발생:', error.message);
      }
    }

    if (stationId) {
      fetchData();
    }
  }, [stationId]);

  if (!station) {
    return <div>Loading...</div>;
  }

  const chargersByCategory = station.chargers.reduce((accumulator, charger) => {
    const existingCategory = accumulator.find(item => item.output === charger.output && item.type === charger.chargerType.type);
    if (existingCategory) {
      existingCategory.chargers.push(charger);
    } else {
      accumulator.push({
        output: charger.output,
        type: charger.chargerType.type,
        chargers: [charger]
      });
    }
    return accumulator;
  }, []);

  return (
    <div className='detail-modal'>
      <div className='header-container'>
        <DetailHeader station={station} />
        <button className='close-modal' onClick={closeModal} />
      </div>
      <hr />
      <h3>충전기 정보</h3>
      {chargersByCategory.map((category, index) => (
        <div key={index} className="charging-box-category">
          <li className="charger-output">속도: {category.output}</li>
          <li className="charger-type">커넥터 타입: {category.type}</li><br />
          <div className="charging-boxes" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {category.chargers.map((charger, chargerIndex) => (
              <div key={chargerIndex} className="charging-box" style={{ width: '175px', height: '94px', margin: '5px', backgroundColor: '#EBEBEB', borderRadius: '8px' }}>
                <p className="charger-id" style={{ fontSize: '50px', fontWeight: '700', color: '#777', lineHeight: '94px', textAlign: 'center' }}>{charger.chargerId.split('-')[1]}</p>
              </div>
            ))}
          </div><br /><hr />
        </div>
      ))}

      <h2>지도</h2>
      <div id="map-container" style={{ width: '100%', height: '300px', position: 'relative' }}>
        <DetailMap lat={station.lat} lng={station.lng} />
      </div>
    </div>
  );
}

export default DetailModal;