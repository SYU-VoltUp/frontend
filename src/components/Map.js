/*global kakao*/ 
import React from 'react';

function Map() {
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
	    center: new kakao.maps.LatLng(37.5031571, 126.882408), //지도의 중심좌표.
	    level: 3 //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    
    return(
        <div id="map" style={{"width":"393px","height":"852px"}}></div>
    )
}

/*class Map extends React.Component{

    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src =
          "https://dapi.kakao.com/v2/maps/sdk.js?appkey=본인 API키값&libraries=LIBRARY";
        document.head.appendChild(script);

      script.onload = () => {
        kakao.maps.load(() => {
          let container = document.getElementById("map");
          let options = {
            center: new kakao.maps.LatLng(37.506502, 127.053617),
            level: 7
          };
  
          const map = new window.kakao.maps.Map(container, options);
       
        });
      };
    }
    render(){
        return(
            <>
            <div id="map" style={{"width":"500px", "height":"400px"}}>
            </div>
            </>
        )
    }
}

// const Head = styled.h1`
// text-align: center;
// `
*/
export default Map;