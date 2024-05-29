import React, { useEffect } from 'react';

function PinMap({ lat, lng }) {
  useEffect(() => {
    const loadMapScript = () => {
      const script = document.createElement('script');
      script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=f4d8a0f60cdebb3a27a6148e5ec42fc8&libraries=services,clusterer,drawing';
      script.async = true;
      script.onload = () => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(lat, lng),
          level: 3,
          mapTypeId: window.kakao.maps.MapTypeId.HYBRID
        };
        const map = new window.kakao.maps.Map(container, options);

        const markerPosition = new window.kakao.maps.LatLng(lat, lng);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        });
        marker.setMap(map);
      };
      document.head.appendChild(script);
    };

    loadMapScript();
  }, [lat, lng]);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
}

export default PinMap;
