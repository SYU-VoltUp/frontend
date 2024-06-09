import React from 'react';
import buttonImg from '../images/buttonImg.png';
import Detail from './Detail';

function Modal({ isOpen, closeModal, stationId }) {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <div
        style={{
          position: "fixed",
          top: '0',
          left: '0',
          height: '840px',
          width: '393px',
          zIndex: '4',
          backgroundColor: "white",
          overflowY: "auto", // 새로운 스타일 추가: 모달 내부에 스크롤 설정
          borderRadius: "8px",
          padding: "20px"
        }}
      >
        <Detail stationId={stationId} /> {/* stationId 전달 */}
        <button
          className='modal'
          onClick={closeModal}
          style={{
            backgroundImage: `url(${buttonImg})`,
            marginTop: '10px',
            position: "absolute", // 새로운 스타일 추가: 위치를 절대 위치로 설정
            top: "10px",
            right: "10px",
            width: "20px",
            height: "20px",
            border: "none",
            cursor: "pointer"
          }}
        />
      </div>
    </div>
  );
}

export default Modal;