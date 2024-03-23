import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/screen1/Home';
import Layout from './layouts/Layout';
import MainMenu from './pages/screen2/MainMenu';
import AdditionalMenu from './pages/screen3/AdditionalMenu' ;
import Payment from './pages/screen4/Payment';
import Settlement from './pages/screen5/Settlement';
import Finish from './pages/screen6/Finish';
import { useState } from 'react';

function App() {
  // Home
  const [isTrue,setIsTrue] = useState(false);
  // MainMenu
  const [selected,setSelected] = useState([]);
  const [totalPrice,setTotalPrice] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home setIsTrue={setIsTrue}/>}/>

          <Route path='/' element={<Layout isTrue={isTrue} setIsTrue={setIsTrue} setSelected={setSelected} setTotalPrice={setTotalPrice}/>}>
            <Route path='menu'>
              <Route index element={<MainMenu selected={selected} setSelected={setSelected} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>}/>
              <Route path=':menuCode' element={<AdditionalMenu selected={selected} setSelected={setSelected} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>}/>
            </Route>
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
