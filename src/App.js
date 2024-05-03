import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import List from './components/List';
import ChargingList  from './components/ChargingList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Main/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path='/charginglist' element={<ChargingList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
