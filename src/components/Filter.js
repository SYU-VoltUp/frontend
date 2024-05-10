import SpeedBtn from './Filter/SpeedBtn';
import buttonImg from '../images/buttonImg.png'
import ConnectorType from './Filter/ConnectorType';

function Filter() {
    return (
        <div style={{position:'fixed', zIndex:'2', top:'89px'}}>
            <SpeedBtn style={{position:'fixed', left:'20px', backgroundImage: `url(${buttonImg})`, backgroundPosition: '66px 12px'}} />
            <ConnectorType style={{position:'fixed', left:'120px', width:'100px', backgroundImage: `url(${buttonImg})`, backgroundPosition: '83px 12px'}}/>
        </div>
    )
}

export default Filter