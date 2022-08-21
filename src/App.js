import React from 'react';
//Routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import About from './Pages/About';
import Contact from './Pages/Contact';
import Donate from './Pages/Donate';
import Home from './Pages/Home';

//Styles
// import "./App.css";


const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/Pages/Home" element={<Home/>} />
        <Route path="/Pages/About" element={<About/>} />
        <Route path="/Pages/Contact" element={<Contact/>} />
        <Route path="/Pages/Donate" element={<Donate/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
