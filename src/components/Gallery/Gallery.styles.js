import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
`;

export const Content = styled.div`
    padding-left: 10px;
`;

export const Rectangle = styled.img`
    height: 200px;
    margin-top: 30px;

    @media screen and (max-width: 500px) {
        height: 100px; width: 30px;
    }

    @media screen and (max-width: 300px) {
        height: 50px; width: 20px;
    }
    
`;