import { useNavigate } from "react-router";
function ChargingList() {
    const navigate = useNavigate();
    const back = () => {
        navigate('/');
    }
    return (
        <div>
            <button onClick={back}>뒤로가기</button><br/>
            <h1>현위치 주변 충전소 목록</h1>
            <div className="Charging">
                <h2>??충전소</h2>
                충전소 위치<br/>
                예상 충전 소요 시간<br/>
                충전기 종류
            </div>
        </div>
    )
}

export default ChargingList;