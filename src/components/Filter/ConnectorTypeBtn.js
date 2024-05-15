import { useState } from 'react';

function ConnectorTypeBtn({style}) {
    const [showConnectorTypeOptions, setShowConnectorTypeOptions] = useState(false);
    const [selectedConnectorType, setSelectedConnectorType] = useState(null);

    const handleConnectorTypeBtnClick = () => {
        setShowConnectorTypeOptions(!showConnectorTypeOptions);
    };
    const handleConnectorTypeOptionClick = (type) => {
        setSelectedConnectorType(type);
        // 여기서 선택된 충전속도를 활용하여 다른 작업 수행 가능
        // 예: 지도 업데이트
        setShowConnectorTypeOptions(false);
      };

    return(  
        <div>
            <button onClick={handleConnectorTypeBtnClick} className="Button" style={style}>커넥터 타입</button>

            {showConnectorTypeOptions && (
                <div className='option-container'>
                <p style={{position:'fixed', left:'17px', top:'600px', fontSize:'22px'}}>커넥터 타입을 선택하세요</p>
                <div className="option-row">
                </div>
                <button className='apply-button'><h2>적용하기</h2></button>
            </div>
            )}
        </div>
    )
}
export default ConnectorTypeBtn;