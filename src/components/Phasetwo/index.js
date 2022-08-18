import React from 'react';

import VectorImg from '../../images/vector-Img.png';

import { Wrapper, Content, VectorIMG } from './Phasetwo.styles.js';

const Phasetwo = () => (
    <Wrapper>
        <Content>
        <div class="container-fluid">
        <div class="row">
            <div class="col">
                <h3 class="WWA">Who We Are</h3>
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
                <VectorIMG src={VectorImg} alt='vectored-image' />
            </div>
        </div>
        
    </div>
        </Content>
    </Wrapper>
);

export default Phasetwo;