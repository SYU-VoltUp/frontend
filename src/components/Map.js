import React, { useState, useEffect } from 'react';
import LocationBtn from './LocationBtn';
import Filter from './Filter'; // Filter 컴포넌트 임포트
import SearchBox from './SearchBox'; // SearchBox 컴포넌트 임포트
import axios from 'axios';
import Modal from './Modal';
import upButtonImg from '../images/upButtonImg.png';
import { fetchStationData } from './DetailApi';

const { kakao } = window;

function Map() {
  const [location, setLocation] = useState({ lat: 37.5031571, lng: 126.882408 });
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [error, setError] = useState(null);
  const [selectedStation, setSelectedStation] = useState(null);
  const [showStationDetail, setShowStationDetail] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSpeeds, setSelectedSpeeds] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
          console.log('위치 받기 성공');
        },
        () => console.log('위치 받기 실패'),
        options
      );
    }
  }, []);

  useEffect(() => {
    if (location.lat && location.lng) {
      const container = document.getElementById('map');
      const options = { center: new kakao.maps.LatLng(location.lat, location.lng), level: 3 };
      const newMap = new kakao.maps.Map(container, options);
      setMap(newMap);
      fetchStations(newMap);

      kakao.maps.event.addListener(newMap, 'bounds_changed', () => {
        fetchStations(newMap);
      });
    }
  }, [location]);

  useEffect(() => {
    if (map) fetchStations(map);
  }, [map, selectedSpeeds, selectedTypes, searchKeyword]);

  const handleSearchInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (map) fetchStations(map);
  };

  const fetchStations = (mapInstance) => {
    const bounds = mapInstance.getBounds();
    const swLatLng = bounds.getSouthWest();
    const neLatLng = bounds.getNorthEast();

    const params = {
      bounds: `${swLatLng.getLat()},${swLatLng.getLng()},${neLatLng.getLat()},${neLatLng.getLng()}`,
      types: selectedTypes.length ? selectedTypes.join(',') : null,
      outputs: selectedSpeeds.length ? selectedSpeeds.join(',') : null,
      keyword: searchKeyword || null,
    };
    console.log('API 요청 파라미터:', params);

    axios
      .get('https://www.syu-voltup.com/v1/stations', { params })
      .then((response) => {
        console.log('API 응답: ', response.data.data);

        const newMarkers = response.data.data.map((station) => {
          const marker = new kakao.maps.Marker({
            map: mapInstance,
            position: new kakao.maps.LatLng(station.lat, station.lng),
          });

          kakao.maps.event.addListener(marker, 'click', async () => {
            const stationId = station.stationId;
            try {
              const stationDetails = await fetchStationData(stationId);
              setSelectedStation(stationDetails);
              setShowStationDetail(true);
            } catch (error) {
              console.error('Error fetching station data:', error);
            }
          });

          return marker;
        });
        setMarkers((prevMarkers) => {
          prevMarkers.forEach((marker) => marker.setMap(null));
          return newMarkers;
        });
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showStationDetail && !document.querySelector('.detail-container').contains(event.target)) {
        setShowStationDetail(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showStationDetail]);

  const btnOnClick = () => map.setCenter(new kakao.maps.LatLng(location.lat, location.lng));

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSpeedChange = (speeds) => {
    setSelectedSpeeds(speeds);
    console.log('선택된 속도:', speeds);
  };
  const handleConnectorChange = (types) => {
    setSelectedTypes(types);
    console.log('선택된 커넥터 타입:', types);
  };

  return (
    <div id="map">
      <LocationBtn onClick={btnOnClick} />
      <Filter onSpeedChange={handleSpeedChange} onConnectorChange={handleConnectorChange} />
      <SearchBox value={searchKeyword} onChange={handleSearchInputChange} onSubmit={handleSearchSubmit} />
      {showStationDetail && (
        <div className="detail-container">
          <button
            className="modal"
            onClick={openModal}
            style={{ backgroundImage: `url(${upButtonImg})`, left: '350px', top: '660px' }}
          />
          <Modal isOpen={isModalOpen} closeModal={closeModal} stationId={selectedStation.stationId} />
          {selectedStation && (
            <>
              <h3 style={{ fontSize: '20px' }}>{selectedStation.name}</h3>
              <div style={{ fontSize: '15px' }}>{selectedStation.address}</div>
              <div className="connector-container">
                {selectedStation.connectorTypes.map((connector, index) => (
                  <div key={index} className="connector-box">
                    {connector}
                  </div>
                ))}
              </div>
              <div className="detail">
                {selectedStation.chargers &&
                  selectedStation.chargers.map((charger, index) => (
                    <div key={index}>
                      <div>{charger.chargerType.type}</div>
                      <div>{charger.output}</div>
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Map;
