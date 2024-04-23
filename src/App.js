import react from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Enquiry from './Components/Enquiry/Enquiry';
import Main from './Components/Main/Main';


function App() {
  return (
    <>
    

    <BrowserRouter>
    <Main/>
    <Routes>
      <Route path='/' element={<Home/> }>  </Route>
      <Route path='/abo' element={<About/> }>  </Route>
      <Route path='/ser' element={<Services/> }>  </Route>
      <Route path='/enq' element={ <Enquiry/>}>  </Route>

    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
