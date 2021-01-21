import styled from "styled-components";

export const Banner = styled.div`
    display: flex;
    @media screen and (max-width: 1015px) {
        display: block;
    }
`;

export const ImgPart = styled.div`
    flex-basis: 40%;
    padding: 5px;
    margin: 0 auto;
    text-align: center;
    align-self:center;
`;

export const Img = styled.img`
    margin-top: 40px;
    width:400px;
    @media screen and (max-width: 1015px) {
        width: 290px;
    }
`;
export const IntroPart = styled.div`
    flex-basis: 60%;
    flex-direction: column;
    padding: 5px 100px 5px 5px;
    align-self:center;
    margin-top: 50px;
    @media screen and (max-width: 1015px) {
        padding: 5px;
    }
`;

export const Intro = styled.div`
    font-weight: ${props => props.big ? 900 : 500};
    font-size: ${props => props.big ? "30px" : "14px"};
    line-height: ${props => props.big ? "45px" : "21px"};
    letter-spacing: ${props => props.normal ? "0.07em" : "0.54em"};
    margin-top: ${props => props.jobs ? "15px" : "0px"};
    text-align: ${props => props.jobs ? "justify" : "left"};
    @media screen and (max-width: 1015px) {
        text-align:center;
    }
`;