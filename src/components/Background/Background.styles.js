import styled from 'styled-components';



export const Wrapper = styled.div`
    padding: 0;
    height: 600px;
    
    display: flexbox;
    align-items: center;

    .Behind {
        height: 600px;
        width: 100%;
    }
    
`;

export const Content = styled.div`


    .Cover {
        
        background-color: black;
        opacity: 0.5;
        min-height: 600px;

    }

    ImageLOGO {
        margin-top: 5px;
    }

    h1 {
        min-height: 0;
    }

    width: 100%;

    .Nav {
        display: flex;
        justify-content: center;
        margin-top: 2%;
        text-color: white;
    }

    li {
        display: inline-block;
        padding-right: 10px;
    }

    .SOR1 {
        color: transparent;
        -webkit-text-stroke-color: white;
        -webkit-text-stroke-width: 2px;
        font-family: Roboto; font-style:normal;
        font-weight:900; font-size: 70px;
        margin-top: 30px;

        @media screen and (max-width: 800px) {
            font-weight:700; font-size: 50px;
        }
        
        @media screen and (max-width: 600px) {
            font-weight:500; font-size: 30px;
        }
    
        @media screen and (max-width: 400px) {
            font-weight:300; font-size: 15px;
        }
    }
    .SOR2 {
        color: white;
        font-family: Roboto; margin-top: -48px;
        font-weight:900; 
        font-style:normal; 
        font-size: 70px;

        @media screen and (max-width: 800px) {
            font-weight:700; font-size: 50px; margin-top: -40px;
        }
        
        @media screen and (max-width: 600px) {
            font-weight:500; font-size: 30px; margin-top: -23px;
        }
    
        @media screen and (max-width: 400px) {
            font-weight:300; font-size: 15px; margin-top: -15px;
        }
    }
    .SOR3 {
        color: transparent;
        -webkit-text-stroke-color: white;
        -webkit-text-stroke-width: 2px;
        font-family: Roboto; font-style:normal;
        font-weight:900; font-size: 70px;
        margin-top: -47px;

        @media screen and (max-width: 800px) {
            font-weight:700; font-size: 50px; margin-top: -40px;
        }
        
        @media screen and (max-width: 600px) {
            font-weight:500; font-size: 30px; margin-top: -23px;
        }
    
        @media screen and (max-width: 400px) {
            font-weight:300; font-size: 15px; margin-top: -15px;
        }
    }

    


    .Donate {
        width: 120px; border-radius: 40px; height: 40px; margin-top: 50px;
        background-color: green; margin-left: 45%; color: white;
            }

    .Donate {
        margin-top: 50px; margin-left: 45%;
    }
    

`;

export const Text = styled.div`

    align-text: flex-center;

    color: transparent;
    -webkit-text-stroke-color: white;
    -webkit-text-stroke-width: 2px;
    font-family: Roboto; font-style:normal;
    font-weight:900; font-size: 70px;

    @media screen and (max-width: 800px) {
        font-weight:700; font-size: 60px;
    }
    
    @media screen and (max-width: 500px) {
        font-weight:500; font-size: 40px;
    }

    @media screen and (max-width: 300px) {
        font-weight:300; font-size: 20px;
    }
    position: center;
    width: 250px;
    height: 35px;
    background: green;
    // margin-top: -30%;
    margin-left: 25%

`;

export const CrowdImg = styled.img`
display: flex;
width: 100%;
height: 500px;

@media screen and (max-width: 400px) {
    width: 100%;
}
`;

export const ImageLOGO = styled.img`

    display: flex;
    justify-content: center;
    margin-left: 45%;

    


@media screen and (max-width => 800px) {
    width: 50%;
    height: 50px;
}
@media screen and (max-width => 400px) {
    width: 20%;
}
`;

