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

.aboutus {
    color: white; font-family: Roboto; font-style:normal;
    font-weight:900; font-size: 70px; margin-top: 10%;
}
.ipsum {
    color: white;
}

.row {
    padding-left: 50px; padding-right: 30px;
}
.history {
    color: green;
}
.col {
    padding-top: 40px; width: 50%;
}
.rectangle {
    width: 50px; height: 5px; background-color: green; margin-top: -7px;
    margin-bottom: 10px;
}
h3 {
    color: blue;
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
export const VectorIMG = styled.img`
    height: 350px;
    width: 80%;
    margin-top: 30px;
`;

export const History = styled.div`
.row {
    padding-left: 50px; padding-right: 30px;
}
.history {
    color: green;
}
.col {
    padding-top: 40px; width: 50%;
}
.rectangle {
    width: 50px; height: 5px; background-color: green; margin-top: -7px;
    margin-bottom: 10px;
}
h3 {
    color: blue;
}

.CA {
    background-color: aliceblue; margin-inline: 4px; border-radius: 8px;
}

#cf3 {
    padding-left: 15%; padding-right: 15%; margin-top: 50px;
}

#alice {
    margin-top: 20px;
}

.reach {
    color: white; margin-top: 100px;
}
`;

