import React, { useEffect } from 'react';

function Map({ lat, lng }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false&libraries=services,drawing`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(lat, lng),
          level: 3
        };
        const map = new window.kakao.maps.Map(container, options);

        // 마커 추가
        const markerPosition = new window.kakao.maps.LatLng(lat, lng);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        });
        marker.setMap(map);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [lat, lng]);

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}></div>
  );
}

export default Map;
