import styled from 'styled-components';


export const Wrapper = styled.div`
    
    margin-bottom: 10px;
`;

export const Content = styled.div`
    h3 {
        color: green;
    }
    p {
        color: black;
        @media screen and (max-width: 720px) {
            max-width: 100%
            height: 300px;
        }

            @media screen and (max-width: 420px) {
                max-width: 100%
                height: 300px;
            }

                @media screen and (max-width: 300px) {
                    max-width: 100%
                    height: 300px;
                }
    }
    .container-fluid {
        padding-top: 30px;
        padding-left: 30px;
        padding-right: 15px;
    }
    .rectangle {
        width: 50px; height: 5px; background-color: green; margin-top: -7px;
        margin-bottom: 10px;
    }

    
    }
`;

export const VectorIMG = styled.img`
    height: 350px;
    width: 80%;
    margin-top: 30px;
`;