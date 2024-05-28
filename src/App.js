import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import ChargingList from './components/ChargingList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/charginglist' element={<ChargingList />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;