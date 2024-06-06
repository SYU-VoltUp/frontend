import Filter from './Filter';
import SearchBox from './SearchBox';
import Kakaomap from './Kakaomap';

function Main() {
  return (
    <div style={{height: '100%', width: '100%', position:'relative'}}>
      <Filter />
      <SearchBox />
      <Kakaomap />
    </div>
  );
}

export default Main;
