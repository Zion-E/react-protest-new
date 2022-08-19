import React from 'react';

import CrowdLOGO from '../images/crowd-image.jpg';
import LOGOImg from '../images/LogoImg.png';
import VectorImg from '../images/vector-Img.png';


import Lower from '../components/Lower';
import Footer from '../components/Footer';

import { Wrapper, Content, ImageLOGO, VectorIMG } from './About.styles';

const About = () => (
    <Wrapper>        
        <Content>
        <div className = "Behind" style={{ backgroundImage: `url(${CrowdLOGO})` }}>
          <>  
          <div className='Cover'>  
            <div className='Logo'>
                <ImageLOGO src={LOGOImg} alt='logo-image' />
            </div>
            <div className='Nav'>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active"
                    aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href='../Pages/About'>About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../Pages/Donate">Donations</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../Pages/Contact">Contact</a>
                </li>
            </ul>
            </div>

                                
            <div class="text-center">
                <div class= "aboutus">
                <h1 class="text-center" href="/"><b>About Us</b></h1>
                </div>
            </div>
            
            <div class="text-center">
                <div class= "ipsum">
            <p>Partnering to build a world where all children are lorem</p>
            <p class="ipsum">ipsum dolor sit amet, consectetur.</p>
                </div>
            </div>
        </div>
        </> 

        </div>

        <div class="container-fluid">
        <div class="row">
            <div class="col">
                <h3 class="history">History</h3>
                <div class="rectangle"></div>
                <p id="lp">
                    Partnering to build a world where all children are lorem ipsum dolor sit amet, consectetur.
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p> 
                    
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
            </div>
            <div class="col">
            <div>
                <VectorIMG src={VectorImg} alt='vectored-image' />
            </div>
            </div>
        </div>
        
    </div>

<>
  
    <div class="container-fluid">
        <div class="text-center">
            <div class="row">
                        <div class="col" >
                        <h3>Goal</h3>
                
                <p>
                    Partnering to build a world where all children are lorem ipsum dolor sit amet, 
                            consectetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            sed do eiusmod tempor incididunt ut labore
                </p>
                        </div>

                        <div class="col" >
                        <h3>Mission</h3>
                
                <p>
                    Partnering to build a world where all children are lorem ipsum dolor sit amet, 
                            consectetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            sed do eiusmod tempor incididunt ut labore
                </p>
                        </div>
                        
                <div class="col">
                    <h3>Vision</h3>
                        <p>
                            Partnering to build a world where all children are lorem ipsum dolor sit amet, 
                                    consectetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                    sed do eiusmod tempor incididunt ut labore
                        </p>
                </div>
            </div>
                </div>
            </div>
        </>
        <Lower />
        <Footer />
        </Content>
</Wrapper>
);

export default About;