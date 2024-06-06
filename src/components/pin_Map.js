import React, { useEffect, useRef } from 'react';

function PinMap({ lat, lng }) {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const loadMapScript = () => {
      const existingScript = document.getElementById('kakao-map-script');
      if (existingScript) {
        initMap();
        return;
      }

      const script = document.createElement('script');
      script.id = 'kakao-map-script';
      script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=f4d8a0f60cdebb3a27a6148e5ec42fc8&libraries=services,clusterer,drawing';
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

    const initMap = () => {
      if (mapContainerRef.current) {
        const options = {
          center: new window.kakao.maps.LatLng(lat, lng),
          level: 3,
          mapTypeId: window.kakao.maps.MapTypeId.HYBRID,
        };
        const map = new window.kakao.maps.Map(mapContainerRef.current, options);

        const markerPosition = new window.kakao.maps.LatLng(lat, lng);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      }
    };

    loadMapScript();
  }, [lat, lng]);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }}></div>;
}

export default PinMap;
