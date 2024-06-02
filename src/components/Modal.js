import buttonImg from '../images/buttonImg.png';
import PinApp from '../PinApp';

function Modal({isOpen, closeModal}) {
    return(
        <div style={{display: isOpen ? "block" : "none"}}>
            <div style={{
                position:'fixed',
                top: '0px',
                left: '0px',
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.35)"
            }}/>
            <div style={{
                position: "fixed",
                top: '20px',
                left: '0',
                height: '840px',
                width: '393px',
                zIndex: '4',
                backgroundColor: "white"
            }}>
                <button className='modal' onClick={closeModal} style={{backgroundImage: `url(${buttonImg})`, marginTop: '10px'}}/>
                <PinApp />
            </div>
        </div>
    );
}

export default Modal;