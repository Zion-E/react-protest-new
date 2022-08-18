import React from 'react';

import Rect4 from './../../images/rect4.png';
import Rect5 from './../../images/rect5.png';
import Rect6 from './../../images/rect6.png';
import Rect7 from './../../images/rect7.png';

import { Wrapper, Content, Rectangle } from './Gallery.styles';

const Gallery = () => (
    <Wrapper>
        <Content>
        <div class="container-fluid">
        <div class="row">
            <div class="col">
                <Rectangle src={ Rect4 } class="img-fluid" alt="protest" />
            </div>
            <div class="col">
                <Rectangle src={ Rect5 } class="img-fluid" alt="banner" />
            </div>
            <div class="col">
                <Rectangle src={ Rect6 } class="img-fluid" alt="wave-flag" />
            </div>
            <div class="col">
                <Rectangle src={ Rect7 } class="img-fluid" alt="crowd" />
            </div>
        </div>
    </div>
        </Content>
    </Wrapper>
);

export default Gallery;