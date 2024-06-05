import bookmarkIcon from '../images/bookmark.svg';
import buttonImg from "../images/buttonImg.png";

function Header({ station, closeModal }) {
  const addressClick = () => {
    navigator.clipboard.writeText(station.address).then(() => alert('충전소 주소가 클립보드에 복사되었습니다.')
    ).catch((error) => {
      console.error('충전소 주소를 복사하는 데 실패했습니다:', error);
      alert('충전소 주소를 복사하는 데 실패했습니다.');
    });
  }

  return (
      <div>
        <h2 style={{marginTop: '10px', marginBottom: '0px'}}>{station.name}</h2>
        <p style={{marginTop: '5px', fontSize: '15px'}} onClick={addressClick}>{station.address}</p>
        <button className='modal' onClick={closeModal} style={{
          backgroundImage: `url(${buttonImg})`,
          marginTop: "10px",
            position: 'absolute'
        }}/>
        {/* <div>
          <button className="bookmark-button">
            <img src={bookmarkIcon} alt="Bookmark" className="bookmark-icon" />
          </button>
        </div> */}
      </div>
  );
}

export default Header;
