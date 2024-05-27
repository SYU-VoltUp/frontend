import React, { useEffect, useState } from 'react';
import Header from './comp/Header.js';
import './App.css';
import './styles.css';
import goButtonIcon from './images/go_button.svg';

// 받아온 데이터를 직접 사용합니다.
const initialData = {
  "message": "Success",
  "data": {
    "stationId": "BNAB0513",
    "name": "길음역 환승주차장",
    "kindDetail": {
      "code": "B001",
      "type": "공영주차장"
    },
    "address": "서울특별시 성북구 동소문로 260",
    "lat": 37.6041,
    "lng": 127.026,
    "operator": {
      "code": "BN",
      "name": "블루네트웍스"
    },
    "connectorTypes": [
      "이동형"
    ],
    "chargers": [
      {
        "chargerId": "BNAB0513-01",
        "chargerType": {
          "code": "02",
          "type": "AC완속",
          "connectorTypes": [
            "이동형"
          ]
        },
        "output": "7kW",
        "updatedAt": "2024-02-13T06:54:05"
      },
      // 나머지 충전기 데이터를 추가합니다.
    ]
  }
};

function App() {
  const [chargingStation, setChargingStation] = useState(initialData);
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    // 여기에 데이터를 fetch하는 코드를 넣어도 됩니다.
    // async 함수를 사용하여 데이터를 가져오는 것이 좋습니다.
    initMap();
  }, []);

  // 같은 output과 type을 가진 충전기를 카테고리로 묶습니다.
  const chargersByCategory = chargingStation.data.chargers.reduce((accumulator, charger) => {
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

  // Kakao 지도 API를 초기화합니다.
  const initMap = () => {
    if (window.kakao) {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(chargingStation.data.lat, chargingStation.data.lng),
        level: 3,
        mapTypeId: window.kakao.maps.MapTypeId.SKYVIEW // 위성지도로 설정
      };
      const map = new window.kakao.maps.Map(container, options);

      // 마커를 생성하고 지도에 표시합니다.
      const markerPosition = new window.kakao.maps.LatLng(chargingStation.data.lat, chargingStation.data.lng);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition
      });
      marker.setMap(map);
    } else {
      console.error('Kakao 지도 API를 로드할 수 없습니다.');
      setMapError(true);
    }
  };

  return (
    <div className="app">
      {chargingStation && (
        <>
          <Header chargingStation={chargingStation.data} />
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
<h2>위성지도</h2>
{mapError ? (
  <div id="map" style={{ width: '100%', height: '400px', backgroundColor: '#CCCCCC' }}></div>
) : (
  <div id="map" style={{ width: '100%', height: '400px' }}></div>
)}
<img src={goButtonIcon} alt="Go Button" className="go-button" />

<div id="map" style={{ width: '100%', height: '400px', backgroundColor: '#CCCCCC' }}></div>
) : (
<div id="map" style={{ width: '100%', height: '400px' }}></div>
)}
<img src={goButtonIcon} alt="Go Button" className="go-button" />
</section>
</div>
</main>
</>
)}
</div>
);
}

export default App;
