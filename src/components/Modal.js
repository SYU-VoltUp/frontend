import buttonImg from '../images/buttonImg.png'

function Modal({isOpen, closeModal}) {
    return(
        <div style={{display: isOpen ? "block" : "none"}}>
            <div style={{
                position:'fixed',
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.35)"
            }}/>
            <div style={{
                position: "fixed",
                top: 15,
                left: 0,
                height: '840px',
                width: '393px',
                zIndex: '4',
                backgroundColor: "white"
            }}>
                <button className='modal' onClick={closeModal} style={{backgroundImage: `url(${buttonImg})`}}/>
                <div>충전소의 세부화면입니다.</div>
            </div>
        </div>
    );
}

export default Modal;