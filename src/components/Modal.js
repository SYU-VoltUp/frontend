import DetailModal from './DetailModal';

function Modal({ isOpen, closeModal, stationId }) {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      {/* <DetailModal stationId={stationId} closeModal={closeModal}/> 지도 잘림 현상 해결 */}
      {isOpen && <DetailModal stationId={stationId} closeModal={closeModal} />}
    </div>
  );
}

export default Modal;

