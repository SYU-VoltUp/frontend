import React, { useEffect } from 'react';

function PinMap({ lat, lng }) {
  useEffect(() => {
    const loadMapScript = () => {
        const container = document.getElementById('station-map');
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

    loadMapScript();
  }, [lat, lng]);

  return <div id="station-map" style={{ width: '100%', height: '400px' }}></div>;
}

export default PinMap;
