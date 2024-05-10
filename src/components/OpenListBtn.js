import { useNavigate } from "react-router";

function OpenListBtn() {
    const navigate = useNavigate();
    const charginglistBtn = () => {
        navigate('/charginglist');
    }

    return(
        <div>
            <button className="OpenList" onClick={charginglistBtn}>
                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[26px] h-[25px] relative" preserveAspectRatio="none"
                >
                    <rect width="26" height="25" fill="white" fill-opacity="0.67"></rect>
                    <path d="M8.66667 6.25H22.75M8.66667 12.5H22.75M8.66667 18.75H22.75M3.25 6.25H3.26083M3.25 12.5H3.26083M3.25 18.75H3.26083" stroke="#073DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
    )
}

export default OpenListBtn;