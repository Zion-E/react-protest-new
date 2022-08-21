import styled from 'styled-components';

export const Wrapper = styled.div`
padding: 0;


display: flexbox;
align-items: center;

.Behind {
    height: 500px;
    width: 100%;
}
`;

export const Content = styled.div`
.Cover {
        
    background-color: black;
    opacity: 0.5;
    min-height: 500px;
    max-height: 500px;

}

ImageLOGO {
    margin-top: 0;
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

h1 {
    font-size: calc(3.375rem + 3.5vw);
}

.donate {
    color: white; font-family: Roboto; font-style:normal;
    font-weight:900; font-size: 80px; margin-top: 100px;
}
.ipsum {
    color: white; 
}

.formline {
    margin-top: 40px;
}
.formfill {
    background-color: rgba(128, 128, 128, 0.219); margin-right: 10%; 
    border-radius: 15px;
}
.donbutton {
    width: 80%; margin-left: 20%; border-radius: 40px; height: 40px;
}
.donor {
    margin-top: -25%;
}
.bleem {
    height: 400px;
}
.row {
    padding-left: 50px; padding-right: 30px;
}
.WWA {
    color: green;
}
.col {
    padding-top: 40px; width: 50%;
}
.rectangle {
    width: 50px; height: 5px; background-color: green; margin-top: -7px;
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