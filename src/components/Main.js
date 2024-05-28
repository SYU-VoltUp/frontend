import Filter from './Filter';
import SearchBox from './SearchBox';
import Kakaomap from './Kakaomap';
import OpenListBtn from './OpenListBtn';

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