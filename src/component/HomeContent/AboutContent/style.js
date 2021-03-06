import styled from "styled-components";

export const AboutWrapper = styled.div`
    display: grid;
    grid-gap: 50px;
    @media screen and (max-width: 785px) {
        display: block;
        margin: 0 auto;
    }
`;

export const AboutWriteContent = styled.p`
    font-weight: ${(props) => (props.abt ? 500 : "normal") };
    font-size: 12px;
    line-height: ${(props) => (props.abt ? "18px" : "15px") };
    letter-spacing: ${(props) => (props.abt ? "0.1em" : "0") };
    align-self: ${(props) => (props.abt ? "none" : "center") };
    color: black;
`;

export const HimaAbout = styled.div`
    grid-area: 1 / 2 / span 2/ span 1;
    &:hover {
        transition: all 0.2s ease-in-out;
        transform:scale(1.05);
        }
    @media screen and (max-width: 785px) {
        margin: 10px auto;
        width: 80%
    }
`;

export const HimaAboutImg = styled.img`
    width: 100%;
`;

export const GridAbout = styled.div`
    grid-area: ${(props) => (props.gridAbt ? 1/1 : 2/1) };
`;

export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
`;

export const SocialIconLink = styled.a`
    color: #5A5A5A;
    font-size: 24px;
    margin-right: 10px;
    text-decoration: none;
`;

export const ContactIcon = styled.div`
    color : #5A5A5A;
    font-size: 24px;
    display: flex;
    margin-bottom: 25px;
    width: ${(props) => (props.phone ? "135px" : "240px") };
    justify-content: space-between;
`;