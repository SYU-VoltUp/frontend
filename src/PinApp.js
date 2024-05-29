import React, { useEffect, useState } from 'react';
import PinHeader from './components/pin_Header.js';
import { fetchChargingStationData } from './components/pin_Api.js';
import PinMap from './components/pin_Map.js';
import './pin_App.css';
import './pin_styles.css';
import goButtonIcon from './images/go_button.svg';

function PinApp() {
  const [chargingStation, setChargingStation] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchChargingStationData();
        setChargingStation(data);
      } catch (error) {
        console.error('API 호출 중 오류 발생:', error.message);
      }
    }
    fetchData();
  }, []);

  if (!chargingStation) {
    return <div>Loading...</div>;
  }

  const chargersByCategory = chargingStation.chargers.reduce((accumulator, charger) => {
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
    <div className="app">
      <PinHeader chargingStation={chargingStation} />
      <main>
        <div className="main-content">
          <section id="charging-machines" className="content">
            <h2>충전기 정보</h2>
            {chargersByCategory.map((category, index) => (
              <div key={index} className="charging-box-category">
                <p className="charger-output">{category.output}</p>
                <p className="charger-type">{category.type}</p>
                <div className="charging-boxes" style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {category.chargers.map((charger, chargerIndex) => (
                    <div key={chargerIndex} className="charging-box" style={{ width: '175px', height: '94px', margin: '5px', backgroundColor: '#EBEBEB', borderRadius: '8px' }}>
                      <p className="charger-id" style={{ fontSize: '50px', fontWeight: '700', color: '#777', lineHeight: '94px', textAlign: 'center' }}>{charger.chargerId.split('-')[1]}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <img src={goButtonIcon} alt="Go Button" className="go-button" />
          </section>
          <section id="map-section" className="content">
            <h2>지도</h2>
            <PinMap lat={chargingStation.lat} lng={chargingStation.lng} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default PinApp;