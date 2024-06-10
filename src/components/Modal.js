import DetailModal from './DetailModal';

function Modal({ isOpen, closeModal, stationId }) {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <DetailModal stationId={stationId} closeModal={closeModal}/>
    </div>
  );
}

export default Modal;