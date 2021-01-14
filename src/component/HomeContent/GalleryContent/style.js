import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto;
    grid-gap: 20px;
    overflow-x:hidden;
    @media screen and (max-width: 1015px) {
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto;
        margin: 0 auto;
      }
    @media screen and (max-width: 709px) {
        text-align:center;
        grid-template-columns: 40% 30%;
        grid-template-rows: auto;
        grid-gap: 15px;s
        width:100%;
    }
`;


export const GalleryImage = styled(LazyLoadImage)`
    width: 190px;
    height: 190px;
    position: inherit;
    &:hover {
        transition: all 0.2s ease-in-out;
        transform:scale(1.02);
    }
    @media screen and (max-width: 709px) {
        max-width: 180px;
        max-height: 180px;
    }
    @media screen and (max-width: 520px) {
        max-width: 130px;
        max-height: 130px;
    }
`;