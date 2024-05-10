/*global kakao*/ 
import { useState, useEffect, useMemo } from 'react';
const { kakao } = window;

function Map() {
  // 현재 위치 담는 곳
  const [location, setLocation] = useState({
    lat: 37.5031571,
    lng: 126.882408,
  });
  const [map, setMap] = useState();
  const [marker, setMarker] = useState();

  // 현재 위치 세부 조정
  var options = {
    enableHighAccuracy: true, // 정확한 위치 요구
    timeout: 5000,            // 최대 대기 시간
    maximumAge: 0             // 캐시 유효시간
  };

  // 현재 위치 가져오기
  useMemo(() => {
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

  // 카카오맵 API 가져오기
  // 화면에 렌더링
  useEffect(() => {
    if (location.lat && location.lng) { // 현재 위치가 요휴한 경우에만 맵과 마커 생성
      let container = document.getElementById('map');
      let options = {
        center: new kakao.maps.LatLng(location.lat, location.lng),
        level: 4,
      };
      const newMap = new kakao.maps.Map(container, options);

      // 생성된 맵과 마커를 업데이트
      setMap(newMap); 
      setMarker(new kakao.maps.Marker({
        map: newMap,
        position: new kakao.maps.LatLng(location.lat, location.lng)
      }));
    }
    console.log(location);
  }, [location]);
  
  return (
  <div id="map" style={{ width: "393px", height: "852px" }}>
  </div>
  )
}

export default Map;