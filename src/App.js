import './App.css';
import Main from './components/Main';
import List from './components/List';
import ChargingList from './components/ChargingList';
import Filter from './components/Filter/Filter'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/list' element={<List />}/>
          <Route path='/charginglist' element={<ChargingList />}/>
          <Route path='/filter' element={<Filter />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
