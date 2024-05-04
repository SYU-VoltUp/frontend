import { useState } from 'react';

function ChargeBtn({style}) {
    const [showChargeOptions, setShowChargeOptions] = useState(false);
    const [price, setPrice] = useState(0);

    const handleChange = (event) => {
        setPrice(parseInt(event.target.value));
    };

    const handleChargeOptionClick = () => {
        setShowChargeOptions(!showChargeOptions);
    };

    return(
        <div>
            <button onClick={handleChargeOptionClick} className="Button" style={style}>충전요금</button>
    
            {showChargeOptions && (
                <div className="option-container">
                    <p style={{position:'fixed', left:'17px', top:'600px', fontSize:'22px'}}>충전속도를 선택하세요</p>
                    <div className='option-row'>
                    <h3>가격: {price === 600 ? '전체' : ` ${price}원`}</h3>
                    <input
                        type="range"
                        min={0}
                        max={600}
                        step={100}
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

export default ChargeBtn;