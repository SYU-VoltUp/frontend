import SpeedBtn from './Filter/SpeedBtn';
import ConnectorTypeBtn from './Filter/ConnectorTypeBtn';
import buttonImg from '../images/buttonImg.png'

function Filter({onSpeedChange, onConnectorChange}) {
    return (<div style={{position: 'fixed', zIndex: '3', top: '89px'}}>
        <SpeedBtn style={{
            position: 'fixed', left: '20px', backgroundImage: `url(${buttonImg})`, backgroundPosition: '66px 12px',
            // padding: '5px'
        }} onSpeedChange={onSpeedChange}/>
        <ConnectorTypeBtn style={{
            position: 'fixed',
            left: '120px',
            width: '100px',
            backgroundImage: `url(${buttonImg})`,
            backgroundPosition: '83px 12px'
        }} onConnectorChange={onConnectorChange}/>
    </div>)
}

export default Filter