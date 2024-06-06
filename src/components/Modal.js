import React from 'react';
import buttonImg from '../images/buttonImg.png';
import PinApp from '../PinApp';

function Modal({ isOpen, closeModal, stationId }) {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <div
        style={{
          position: 'fixed',
          top: '0px',
          left: '0px',
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.35)",
          zIndex: "3", // 새로운 스타일 추가: 배경의 zIndex 설정
          overflow: "auto" // 새로운 스타일 추가: 배경에 스크롤 설정
        }}
      />
      <div
        style={{
          position: "fixed",
          top: '20px',
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
        <PinApp stationId={stationId} /> {/* stationId 전달 */}
      </div>
    </div>
  );
}

export default Modal;
