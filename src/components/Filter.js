import FilterBtn from './Filter/FilterBtn';
import SpeedBtn from './Filter/SpeedBtn';
import ChargeBtn from './Filter/ChargeBtn';
import ParkingBtn from './Filter/ParkingBtn';
import buttonImg from '../images/buttonImg.png'
import filterImg from '../images/filterImg.png'

function Filter() {
    return (
        <div style={{position:'fixed', top:'89px'}}>
            <FilterBtn style={{position:'fixed', left:'20px', backgroundImage: `url(${filterImg})`, backgroundPosition: '10px 5.5px', width:'75px'}}/>
            <SpeedBtn style={{position:'fixed', left:'111px', backgroundImage: `url(${buttonImg})`}} />
            <ChargeBtn style={{position:'fixed', left:'200px', backgroundImage: `url(${buttonImg})`}}/>
            <ParkingBtn style={{position:'fixed', left:'289px', backgroundImage: `url(${buttonImg})`}}/>
        </div>
    )
}

export default Filter