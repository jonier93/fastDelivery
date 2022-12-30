import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {Login} from './components/login'
import {Register} from './components/register';
import Home from './components/home'
import {Barra} from './components/barra';
import {CreateOrder} from './components/createOrder';
import {ListOrder} from './components/listOrder';
import { Contact } from './components/contac';

function App() { 
  return (    
    <div className="App">    
      <Barra />     
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/home" element={<Home />} />
            <Route path='' element={<Home />} />
            <Route path='/createOrder' element={<CreateOrder/>}></Route>
            <Route path='/listOrder' element={<ListOrder />}></Route>
            <Route path='/contact' element={<Contact />}> </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}



export default App;
