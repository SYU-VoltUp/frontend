import './App.css';
import Filter from './components/Filter';
import SearchBox from './components/SearchBox';
import Kakaomap from './components/Kakaomap';

function App() {
  return (
    <div style={{height: '100%', width: '100%', position:'relative'}}>
      <Filter />
      <SearchBox />
      <Kakaomap />
    </div>
  );
}

export default App;