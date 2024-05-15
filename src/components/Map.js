/*global kakao*/ 
import { useState, useEffect } from 'react';
import LocationBtn from './LocationBtn';
import axios from 'axios';
import Modal from './Modal';
import upButtonImg from '../images/upButtonImg.png'
const { kakao } = window;

function Map() {
  const [location, setLocation] = useState({
    lat: 37.5031571,
    lng: 126.882408,
  });
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [error, setError] = useState(null);
  const [stations, setStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  const [chargers, setChargers] = useState([]);
  const [showStationDatail, setShowStationDetail] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  var options = {
    enableHighAccuracy: true, // 정확한 위치 요구
    timeout: 5000,            // 최대 대기 시간
    maximumAge: 0             // 캐시 유효시간
  };

  // 현재 위치 가져오기
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, options);
    }

    function success(position) {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      console.log("위치 받기 성공");
    }

    function error() {
      console.log("위치 받기 실패");
    }
  }, []);
    
  // 카카오맵 API 연동 및 렌더링
  useEffect(() => {
    if (location.lat && location.lng) { // 현재 위치가 요휴한 경우에만 맵과 마커 생성
      let container = document.getElementById('map');
      let options = {
        center: new kakao.maps.LatLng(location.lat, location.lng),
        level: 3,
      };
      const newMap = new kakao.maps.Map(container, options);
      setMap(newMap);

      const bounds = newMap.getBounds();
      const swLatLng = bounds.getSouthWest(); 
      const neLatLng = bounds.getNorthEast();
      
      axios.get('v1/stations', {
        params: {
          bounds: `${swLatLng.getLat()},${swLatLng.getLng()},${neLatLng.getLat()},${neLatLng.getLng()}`
        }
      }).then(response => {
        const newMarkers = response.data.data.map(station => {
          const marker = new kakao.maps.Marker({
            map: newMap,
            position: new kakao.maps.LatLng(station.lat, station.lng)
          });

          kakao.maps.event.addListener(marker, 'click', () => {
            setShowStationDetail(true);
            setSelectedStation(station);
          });

          return marker;
        });
        setMarkers(newMarkers);
      }).catch(error => { setError(error); console.log(error); });

    }
  }, [location]);

  // detail 화면 밖 클릭 시 화면 숨기기
  useEffect(() => {
    function handleClickOutside(event) {
      if (showStationDatail && !document.querySelector('.detail-container').contains(event.target)) {
        setShowStationDetail(false);
      }
    }
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showStationDatail]);

  const btnOnClick = () => {
    map.setCenter(new kakao.maps.LatLng(location.lat, location.lng));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <div id="map" style={{ width: "393px", height: "852px" }}>
      <LocationBtn onClick={btnOnClick}/>
      { showStationDatail && (
        <div className='detail-container'>
          <button className='modal' onClick={openModal} style={{backgroundImage: `url(${upButtonImg})`, left: '350px', top: '660px'}}/>
          <Modal isOpen={isModalOpen} closeModal={closeModal} />
          {selectedStation.stationId}
          <h3 style={{fontSize:'20px'}}>{selectedStation.name}</h3>
          <div style={{fontSize:'15px'}}>{selectedStation.address}</div>
          <div className='connector-container'>
            {selectedStation.connectorTypes.map((connector, index) => (
              <div key={index} className='connector-box'>{connector}</div>
            ))}
          </div>
          <div className='detail'>
            {selectedStation.chargers && selectedStation.chargers.map((charger, index) => (
              <div key={index}>
                <div>{charger.chargerType.type}</div>
                <div>{charger.output}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Map;