import React from 'react';
//Routing
//import { BrowserRouter as Router } from 'react-router-dom';

//Components
import Background from '../components/Background';
import Phasetwo from '../components/Phasetwo';
import Gallery from '../components/Gallery';
import Whatwedo from '../components/Whatwedo';
import Lower from '../components/Lower';
import Footer from '../components/Footer';

import GlobalStyle  from '../GlobalStyle';

//Styles
// import { Wrapper, Content } from './Home.styles'

const Home = () =>{
  return (
    <>
    <Background />
      <Phasetwo />
        <Gallery />
            <Whatwedo />
        <Lower />
      <Footer />
    <GlobalStyle/>
    </>
  )
}; 
  

export default Home;