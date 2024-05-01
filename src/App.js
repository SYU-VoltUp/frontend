import './App.css';
import Kakaomap from './components/Kakaomap';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Kakaomap/>
      <Main/>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/main' element={<>
            <Kakaomap/>
            <Main/>
          </>}>
          </Route>
        </Routes>
          </BrowserRouter> */}
    </div>
  );
}

export default App;
