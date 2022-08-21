import React from 'react';

import CrowdLOGO from '../../images/crowd-image.jpg';
import LOGOImg from '../../images/LogoImg.png';

import { Wrapper, Content, ImageLOGO } from './Background.styles';

const Background = () => (
    <Wrapper>
        <div className = "Behind" style={{ backgroundImage: `url(${CrowdLOGO})` }}>
        
        <Content>
          <div className='Cover'>  
            <div className='Logo'>
                <ImageLOGO src={LOGOImg} alt='logo-image' />
            </div>
            <div className='Nav'>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link"
                    href='../Pages/Home'>Home</a>
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

        <div className='SSK'>
            <div class="text-center">
                <h1 class="SOR1"><b>#SOROSOKE</b></h1>
                <h1 class="SOR2"><b>#SOROSOKE</b></h1>
                <h1 class="SOR3"><b>#SOROSOKE</b></h1>
            </div>
        </div>

                    
    <div id="ipsum" class="text-center">
            <p>Partnering to build a world where all children are lorem</p>
            <p class="ipsum">ipsum dolor sit amet, consectetur.</p>
    </div>

            <div className='Donate'>
            
                        <div className='Move'>
                        <button type="button" class="btn btn-success">
                            <h3 class="reach">
                                <a href="./Donate"> Donate </a></h3></button>
                            </div>
            
            </div>


          </div>  
        </Content>
        </div>
    </Wrapper>
);

export default Background;