import React from 'react';
import buttonImg from '../images/buttonImg.png';
import Detail from '../Detail';

function Modal({ isOpen, closeModal, stationId }) {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <div
        style={{
          position: "fixed",
          top: '0',
          bottom: '0',
          left: '0',
          height: '840px',
          width: '393px',
          zIndex: '4',
          backgroundColor: "white",
          overflowY: "auto",
          borderRadius: "8px",
          padding: "20px"
        }}
      >
        <button className='modal' onClick={closeModal} style={{backgroundImage: `url(${buttonImg})`}} />
        <Detail stationId={stationId} />
      </div>
    </div>
  );
}

export default Modal;
