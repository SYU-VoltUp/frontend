import buttonImg from '../images/buttonImg.png'
import filterImg from '../images/filterImg.png'

function Layout() {
    return (
        <div className="Filter">
            <button className="Button" style={{backgroundImage: `url(${filterImg})`, backgroundPosition: '10px 5.5px', width:'75px'}}><div style={{marginLeft:'20px'}}>필터</div></button>
            <button className="Button" style={{backgroundImage: `url(${buttonImg})`, marginLeft:'14px'}}>충전속도</button>
            <button className="Button" style={{backgroundImage: `url(${buttonImg})`, marginLeft:'3px'}}>충전요금</button>
            <button className="Button" style={{backgroundImage: `url(${buttonImg})`, marginLeft:'3px'}}>주차요금</button>
        </div>
    )
}

export default Layout