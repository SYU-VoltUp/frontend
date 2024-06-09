import './App.css';
import Filter from './components/Filter';
import SearchBox from './components/SearchBox';
import Map from './components/Map'

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <Filter/>
      <SearchBox/>
      <Map/>
    </div>
  );
}

export default App;