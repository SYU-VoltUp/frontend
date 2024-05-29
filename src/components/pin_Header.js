import React from 'react';
import bookmarkIcon from '../images/bookmark.svg';
import closeIcon from '../images/close.svg';

function PinHeader({ chargingStation }) {
  return (
    <header className="header">
      <div className="header-content station-layout">
        <div className="info">
          <h1 className="station-name">{chargingStation.name}</h1>
          <p className="address" onClick={() => {
            navigator.clipboard.writeText(chargingStation.address)
              .then(() => {
                alert('충전소 주소가 클립보드에 복사되었습니다.');
              })
              .catch((error) => {
                console.error('충전소 주소를 복사하는 데 실패했습니다:', error);
                alert('충전소 주소를 복사하는 데 실패했습니다.');
              });
          }}>{chargingStation.address}</p>
        </div>
        <div className="buttons">
          <button className="bookmark-button">
            <img src={bookmarkIcon} alt="Bookmark" className="bookmark-icon" />
          </button>
          <button className="close-button">
            <img src={closeIcon} alt="Close" className="close-icon" />
          </button>
        </div>
      </div>
      <div className="header-bottom-line"></div>
    </header>
  );
}

export default PinHeader;
