import React from 'react';

import KidsImg from './../../images/KidsImg.png';

import { Wrapper, Content } from './Lower.styles';

const Lower = () => (
    <Wrapper>
        <div className = "Happykids" style={{ backgroundImage: `url(${KidsImg})` }}>
        <Content>  
            <div class="container-fluid">
            <div class="text-center">
                <div class="row">
                    <div class="col" >
                        <h2 className='Move'>
                            <b class="reach">Help Us Reach Out To The Youths</b>
                        </h2>
                    </div>
                    
                    <div class="col">
                        <div className='Move'>
                        <button type="button" class="btn btn-success">
                            <h3 class="reach">Donate </h3></button>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        </Content>
        </div>
    </Wrapper>
);

export default Lower;