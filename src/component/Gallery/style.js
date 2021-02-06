import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiOutlineClose } from "react-icons/ai";

export const GalleryTitle = styled.div`
    font-weight: ${(props) => (props.desc ? 500 : 900)};
    font-size: ${(props) => (props.desc ? "12px" : "30px")};
    line-height: ${(props) => (props.desc ? "18px" : "45px")};
    color: ${(props) => (props.desc ? "#5A5A5A" : "#111111")};
    text-align: center;
    margin: ${(props) => (props.desc ? "3px 6px 30px" : "34px 4px 2px")};
`;

export const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto;
    grid-gap: 20px;
    padding: 12px;
    overflow-x:hidden;
    @media screen and (max-width: 1015px) {
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto;
        margin: 0 100px;
        margin: auto;
      }
    @media screen and (max-width: 709px) {
        grid-template-columns: 50% 50%;
        grid-template-rows: auto;
        grid-gap: 5px;
        padding: 0px;
        margin: auto;
    }
`;

export const GalleryImage = styled(LazyLoadImage)`
    width: 190px;
    height: 190px;
    &:hover {
        transition: all 0.2s ease-in-out;
        transform:scale(1.02);
    }
    @media screen and (max-width: 520px) {
        max-width: 150px;
        max-height: 150px;
    }
`;

export const ButtonCloser = styled(AiOutlineClose)`
    font-size: 26px;
    color: white !important;
    font-weight: bold;
    background-color: white;
    border-radius: 50%;
`;
export const ContentDrop = styled.div`
margin: 20px auto;
max-width: 700px;
border-radius: 10px;
border-radius: 10px;
border: 1px solid #ccc;
padding: 16px 16px;
z-index: 952;
background-color: rgba(255,255,255);`;

export const DropDownContent = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.5);
display: none;
z-index: 951;
padding: 15px;
overflow-y: scroll;
`;
export const ContentDiv2 = styled.button`
    display: none;
    font-weight: 400;
    font-family: 'Montserrat',sans-serif;
    text-align: center;
    font-style: italic;
    font-size: 13px;
    line-height: 20px;
    text-decoration: underline;
    background: none;
    outline: none;
    border: none;
    color: white;
    cursor: pointer;
    width: fit-content;
`;

export const ContentDiv = styled.div`
    display: block;
    font-weight: 400;
    font-family: 'Montserrat',sans-serif;
    text-align: center;
    font-style: italic;
    font-size: 13px;
    line-height: 20px;
    text-decoration: underline;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    margin: 0 auto;
`;
export const DropDown = styled.div`
  margin-bottom: 32px;
  display: inline-block;
  border-bottom: 1px solid #D6D6D6;
  border: none;
  cursor: pointer;
  outline: none;
  > * {
    cursor: pointer;
  }

  &:focus,
  &:active {
    /* background-color: rgba(0, 0, 0, 0.1); */
    border: none;
  }

  &:focus ${DropDownContent}, &:active ${DropDownContent} {
    display: block;
    max-width: 100vw;
    cursor: auto;
  }
  &:focus ${ContentDiv2}, &:active ${ContentDiv2} {
      display: flex;
      flex-direction: row-reverse;
      width: 100%;
      color: white;
  }
  &:focus ${ContentDiv}, &:active${ContentDiv} {
    display: none;
}
  &:hover {
    color: #333;
  }
`;

export const Dropbtn = styled.div`
  display: block;
`;