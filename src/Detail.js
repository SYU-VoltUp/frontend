import { useEffect, useState } from 'react';
import { fetchStationData } from './components/DetailApi.js';
import DetailMap from './components/DetailMap.js';
import Header from './components/Header.js';

function Detail({ stationId }) {
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
    <div className="app" style={{ margin: '5px' }}>
      <Header station={station} /> <hr />
      <h3>충전기 정보</h3>
      {chargersByCategory.map((category, index) => (
        <div key={index} className="charging-box-category">
          충전 속도: {category.output}<br/>
          커넥터 타입: {category.type}
          <div className="charging-boxes">
            {category.chargers.map((charger, chargerIndex) => (
              <div key={chargerIndex} className="charging-box" style={{ width: '175px', height: '94px', margin: '5px', backgroundColor: '#EBEBEB', borderRadius: '8px' }}>
                <p className="charger-id" style={{ fontSize: '50px', fontWeight: '700', color: '#777', lineHeight: '94px', textAlign: 'center' }}>{charger.chargerId.split('-')[1]}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <br/>
      <h3>지도</h3>
      <div id="map-container" style={{ width: '100%', height: '300px', position: 'relative' }}>
        <DetailMap lat={station.lat} lng={station.lng} />
      </div>
    </div>
  );
}

export default Detail;