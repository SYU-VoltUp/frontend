import buttonImg from '../images/buttonImg.png';
import PinApp from '../PinApp';

function Modal({isOpen, closeModal}) {
    return (<div style={{display: isOpen ? "block" : "none"}}>

        <div style={{
            position: "fixed",
            top: '0px',
            left: '0',
            height: '840px',
            width: '393px',
            zIndex: '4',
            backgroundColor: "white",
            overflow: 'auto'
        }}>
            <PinApp closeModal={closeModal}/>
        </div>
    </div>);
}

export default Modal;