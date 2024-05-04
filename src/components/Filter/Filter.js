import { useNavigate } from "react-router";

function Filter() {
    const navigate = useNavigate();
    const handleBackBtnClick = () => {
        navigate('/');
    }
    return(
        <div>
            <button onClick={handleBackBtnClick}>뒤로가기</button>
            <h2>필터</h2>
            충전속도
            충전요금
            주차요금
        </div>
    )
}

export default Filter;