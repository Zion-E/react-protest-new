import React from 'react';

import CrowdLOGO from '../images/crowd-image.jpg';
import LOGOImg from '../images/LogoImg.png';
import Footer from '../components/Footer';


import { Wrapper, Content, ImageLOGO, VectorIMG } from './Donate.styles';

const Donate = () => (
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
                    <a class="nav-link"
                    href="../Pages/Home">Home</a>
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
                <div class= "donate">
                <h1 class="text-center"><b>Donate</b></h1>
                </div>
            </div>

            <div class="text-center">
                <div class= "ipsum">
            <p>Partnering to build a world where all children are lorem</p>
            <p>ipsum dolor sit amet, consectetur.</p>
                </div>
            </div>
        
        </div>
        </> 

        </div>

        <div id="formline" class="container" >
        <div class="row">
            <div class="col">
                <h3>Outreach Donations</h3>
                <div class="rectangle">
                    <p class="row"></p>
                </div>
                <div class="content">
                    <p>
                        Our mission is to educate Nigerians from the grassroots to spark a revolution, to be
                        the change we want to see in Nigeria. Our projects will not be possible without the 
                        generous donations of benefactors around the globe and in Nigeria
                    </p>
                </div>
            </div>
            <div class="col">
                <div class= "formfill">
                
                <form>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label"><b>Full Name</b></label>
                        <input type="Name" class="form-control" id="exampleInputName" />
                    </div>

                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label"><b>Email Address</b></label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputAmount" class="form-label"><b>Amount</b></label>
                    </div>
                    <div class="row">
                        <div class= "amtline">
                        <div class="col">
                            <div class="donor">
                                <input type="Number" class="form-control" id="exampleInputNumber"/>
                            </div>
                        </div>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-success" href="../Pages/Donate"><b>Donate</b></button>
                        </div>
                    </div>
                    
                  </form>
            </div>
            </div>
        </div>   
    </div>
        <Footer />
        </Content>
</Wrapper>
);

export default Donate;