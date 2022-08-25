import styled from 'styled-components';

export const Wrapper = styled.div`
padding: 0;


display: flexbox;
align-items: center;
width: 100%;

.Behind {
    height: 400px;
    width: 100%;
}
`;

export const Content = styled.div`

.Cover {
        
    background-color: black;
    opacity: 0.5;
    min-height: 400px;
    max-height: 400px;

}

a {
    color: white;
}

.Nav {
    display: flex;
    justify-content: center;
    margin-top: 2%;
    text-color: white;
}

width: 100%;

.contact {
    color: white; font-family: Roboto; font-style:normal;
    font-weight:900; line-height:50px; margin-top: 80px;
}


.donate {
        width: 120px; border-radius: 40px; height: 40px; margin-top: 50px;
        background-color: green; margin-left: 45%; color: white;
}

.row {
    padding-left: 50px; padding-right: 30px;
}
.condet {
    color: green;
}



#formfloor {
    background-color: rgba(128, 128, 128, 0.219); margin-right: 5%; border-radius: 15px;
    margin-top: 50px;
}
#mbox {
    height: 150px;
}
#submit {
    width: 120px; margin-top: 80px; margin-left: 30%; margin-bottom: 40px;
    border-radius: 40px; height: 40px; background-color: green; color: white;
}

.col {
    padding-top: 40px; 
}

.row {
    margin-bottom: 40px;
}

.img-fluid {
    @media screen and (max-width => 800px) {
        width: 100px;
        height: 60px;
        }
        @media screen and (max-width => 500px) {
        width: 80px;
        height: 40px
        }
}

`;

export const MAP = styled.img`
    margin-top: 50px;

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