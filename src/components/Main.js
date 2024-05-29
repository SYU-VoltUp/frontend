import Filter from './Filter';
import SearchBox from './SearchBox';
import Kakaomap from './Kakaomap';
import OpenListBtn from './OpenListBtn';
import PinApp from '../PinApp';

function Main() {
    return (
        <div style={{position:'fixed'}}>
            <Filter/>
            <SearchBox style={{position:'fixed', zIndex:'2'}}/>
            <OpenListBtn/>
            <Kakaomap/>
        </div>
    )
}

export default Main