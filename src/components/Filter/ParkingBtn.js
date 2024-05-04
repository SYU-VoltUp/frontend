import { useState } from 'react';

function ParkingBtn({style}) {
    const [showParkingOptions, setShowParkingOptions] = useState(false);
    const [price, setPrice] = useState(0);

    const handleChange = (event) => {
        setPrice(parseInt(event.target.value));
    };

    const handleParkingOptionButtonClick = () => {
        setShowParkingOptions(!showParkingOptions);
    };

    return (
        <div>
            <button onClick={handleParkingOptionButtonClick}className="Button" style={style}>주차요금</button>

            {showParkingOptions && (
                <div className='option-container'>
                    <p style={{position:'fixed', left:'17px', top:'600px', fontSize:'22px'}}>주차요금 범위를 선택하세요</p>
                    <div className="option-row">
                        <h3>가격: {price === 600 ? '전체' : ` ${price}원`}</h3>
                        <input
                            type="range"
                            min={0}
                            max={10000}
                            step={1000}
                            value={price}
                            onChange={handleChange}
                        />
                    </div>
                    <button className='apply-button'><h2>적용하기</h2></button>
                </div>
            )}
        </div>
    )
}

export default ParkingBtn;