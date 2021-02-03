import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

export const TitleHomeContent = styled.div`
    width: ${props => props.recent ? "50%" : "100%"};
    font-weight: ${props => props.view ? "normal" : "bold"};
    font-size: ${props => props.others ? "30px" : "16px"};
    line-height: 21px;
    letter-spacing: ${props => props.view ? "0" : "0.1em"};
    color: ${props => props.view ? "#5A5A5A" : "#111111"};
    margin-bottom: ${props => props.about ? "15px" : "22px"};
    display: ${props => props.recent ? "inline-flex" : "block"};
    cursor: ${props => props.view ? "pointer" : "auto"};
    flex-direction: ${props => props.view ? "row-reverse" : "none"};
`;

export const Viewedin = styled(LinkR)`
    font-weight: normal;
    text-decoration: none;
    color: #5A5A5A;
    display: ${props => props.others ? "none" : "inline-block"};
`;

export const BannerContainer = styled.div`
  color: #333;
  display: block;
  height: 480px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 801px) {
    background-image: url(${(props) => props.src});
  }
`;
export const SmallBannerContainer = styled.div`
  display: none;
  @media screen and (max-width: 801px) {
    display: block;
    margin-top: 80px;
    z-index: 6;
    top: 0;
    position: absolute;
    color: #333;
  height: 480px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  }
`;

export const SliderBig = styled(AwesomeSlider)`
.awssld__wrapper{
  margin: 0 auto !important;
  display: block;
  min-height: 400px;
  height: 480px;
  @media screen and (max-width: 1064px) {
    min-height: 400px;
  height: 480px;
  }
}
  .awssld__bullets{
    display: none;
  }
  .awssld__content  {
    background-color: transparent;
    width: 100% !important;
    position: static !important;
  }
  .awssld__timer {
    background-color: transparent;
    z-index: -1;
  }
  .awssld__content > div {
    background-color: transparent;
    width: 100%;
    display: block;
    height: 100%;
  }
  .awssld__container{
    height: fit-content;
  }
`;