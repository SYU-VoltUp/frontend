import { useNavigate } from "react-router-dom";
import Filter from './Filter';
import Kakaomap from './Kakaomap';
import SearchBox from './SearchBox';

function Main() {
    const navigate = useNavigate();
    const chargingListBtn = () => {
        navigate('/charginglist');
    }
    return (
        <div>
            <Kakaomap />
            <SearchBox/>
            <Filter/>
            <div style={{height: '450px', textAlign: 'center'}}></div>
                <button className="OpenList" onClick={chargingListBtn}>
                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[26px] h-[25px] relative" preserveAspectRatio="none"
                    >
                        <rect width="26" height="25" fill="white" fill-opacity="0.67"></rect>
                        <path d="M8.66667 6.25H22.75M8.66667 12.5H22.75M8.66667 18.75H22.75M3.25 6.25H3.26083M3.25 12.5H3.26083M3.25 18.75H3.26083" stroke="#073DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
            <button className="Location">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[22px] h-[22px]" preserveAspectRatio="none"
                >
                    <line x1="11.5" x2="11.5" y2="6.6" stroke="#073DFF"></line>
                    <line x1="15.3999" y1="11.6" x2="21.9999" y2="11.6" stroke="#073DFF"></line>
                    <line y1="11.6" x2="6.6" y2="11.6" stroke="#073DFF"></line>
                    <line x1="11.5" y1="15.4" x2="11.5" y2="22" stroke="#073DFF"></line>
                    <circle cx="11.55" cy="11.55" r="7.75" stroke="#073DFF"></circle>
                </svg>
            </button>
        </div>
    )
}

export default Main