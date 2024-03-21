import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/screen1/Home';
import Layout from './layouts/Layout';
import MainMenu from './pages/screen2/MainMenu';
import SelectedMenu from './pages/screen2/SelectedMenu';
import AdditionalMenu from './pages/screen3/AdditionalMenu' ;
import Payment from './pages/screen4/Payment';
import Settlement from './pages/screen5/Settlement';
import Finish from './pages/screen6/Finish';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>

          <Route path='/' element={<Layout/>}>
            <Route path='menu' element={<MainMenu/>}>
              <Route path=':menuCode' element={<SelectedMenu/>}/>
            </Route>

            <Route path='additional' element={<AdditionalMenu/>}/>
            <Route path='payment' element={<Payment/>}/>
            <Route path='settlement' element={<Settlement/>}/>
            <Route path='goodbye' element={<Finish/>}/>

          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
