import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './pages/screen1/Home';
import MainMenu from './pages/screen2/MainMenu';
import AdditionalMenu from './pages/screen3/AdditionalMenu' ;
import Payment from './pages/screen4/Payment';
import Settlement from './pages/screen5/Settlement';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
