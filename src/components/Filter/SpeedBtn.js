import charge_7 from '../../images/charge_7.png'
import charge_50 from '../../images/charge_50.png'
import charge_100 from '../../images/charge_100.png'
import charge_200 from '../../images/charge_200.png'
import charge_300 from '../../images/charge_300+.png'
import React, { useState } from 'react';

function SpeedBtn({ style, onSpeedChange }) {
    const [showSpeedOptions, setShowSpeedOptions] = useState(false);
    const [selectedSpeeds, setSelectedSpeeds] = useState([]);

    const handleSpeedButtonClick = () => {
        setShowSpeedOptions(!showSpeedOptions);
    };

    // 특정 속도 버튼 클릭시, 그 속도를 선택하거나 해제
    const handleSpeedOptionClick = (speed) => {
        const index = selectedSpeeds.indexOf(speed);
        if (index === -1) { // speed 값이 배열에 없으면 배열에 speed 값 추가
            setSelectedSpeeds(prevSpeeds => [...prevSpeeds, speed]);
        } else { // speed 값이 배열에 이미 있으면 그 값을 배열에서 제외시킴
            setSelectedSpeeds(prevSpeeds => prevSpeeds.filter(s => s !== speed));
        }
    };

    const handleSubmit = () => {
        if (typeof onSpeedChange === 'function') {
            onSpeedChange(selectedSpeeds); // 선택된 속도들을 상위 컴포넌트로 전달
        } else {
            console.error('onSpeedChange is not a function');
        }
    };

    return (
        <div>
            <button onClick={handleSpeedButtonClick} className="Button" style={style}>충전속도</button>

            {showSpeedOptions && (
                <div className='option-container'>
                    <p style={{ position: 'fixed', left: '17px', top: '600px', fontSize: '22px' }}>충전속도를 선택하세요</p>
                    <div className="option-row">
                        <button className={`speed-button${selectedSpeeds.includes(7) ? ' selected' : ''}`} onClick={() => handleSpeedOptionClick(7)} style={{ backgroundImage: `url(${charge_7})`, marginLeft: '13px' }} />
                        <button className={`speed-button${selectedSpeeds.includes(50) ? ' selected' : ''}`} onClick={() => handleSpeedOptionClick(50)} style={{ backgroundImage: `url(${charge_50})` }} />
                        <button className={`speed-button${selectedSpeeds.includes(100) ? ' selected' : ''}`} onClick={() => handleSpeedOptionClick(100)} style={{ backgroundImage: `url(${charge_100})` }} />
                        <button className={`speed-button${selectedSpeeds.includes(200) ? ' selected' : ''}`} onClick={() => handleSpeedOptionClick(200)} style={{ backgroundImage: `url(${charge_200})` }} />
                        <button className={`speed-button${selectedSpeeds.includes("300+") ? ' selected' : ''}`} onClick={() => handleSpeedOptionClick("300+")} style={{ backgroundImage: `url(${charge_300})` }} />
                    </div>
                    <button className='apply-button' onClick={handleSubmit}><h2>적용하기</h2></button>
                </div>
            )}
        </div>
    );
}

export default SpeedBtn;