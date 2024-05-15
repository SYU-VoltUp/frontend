import charge_7 from '../../images/charge_7.png'
import charge_50 from '../../images/charge_50.png'
import charge_100 from '../../images/charge_100.png'
import charge_200 from '../../images/charge_200.png'
import charge_300 from '../../images/charge_300+.png'
import { useState } from 'react';

function SpeedBtn({style}) {
    const [showSpeedOptions, setShowSpeedOptions] = useState(false);
    const [selectedSpeed, setSelectedSpeed] = useState(null);
    
    const handleSpeedButtonClick = () => {
        setShowSpeedOptions(!showSpeedOptions);
    };
    const handleSpeedOptionClick = (speed) => {
        setSelectedSpeed(speed);
        // 여기서 선택된 충전속도를 활용하여 다른 작업 수행 가능
        // 예: 지도 업데이트
        setShowSpeedOptions(false);
      };
    return(
        <div>
            <button onClick={handleSpeedButtonClick} className="Button" style={style}>충전속도</button>

            {showSpeedOptions && (
                <div className='option-container'>
                    <p style={{position:'fixed', left:'17px', top:'600px', fontSize:'22px'}}>충전속도를 선택하세요</p>
                    <div className="option-row">
                        <button className='speed-button' onClick={() => handleSpeedOptionClick(7)} style={{backgroundImage: `url(${charge_7})`, marginLeft:'13px'}}/>
                        <button className='speed-button' onClick={() => handleSpeedOptionClick(50)} style={{backgroundImage: `url(${charge_50})`}}/>
                        <button className='speed-button' onClick={() => handleSpeedOptionClick(100)} style={{backgroundImage: `url(${charge_100})`}}/>
                        <button className='speed-button' onClick={() => handleSpeedOptionClick(200)} style={{backgroundImage: `url(${charge_200})`}}/>
                        <button className='speed-button' onClick={() => handleSpeedOptionClick("300+")} style={{backgroundImage: `url(${charge_300})`}}/>
                    </div>
                    <button className='apply-button'><h2>적용하기</h2></button>
                </div>
            )}
        </div>
    );
}

export default SpeedBtn;