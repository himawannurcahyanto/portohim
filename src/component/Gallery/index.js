import React from "react";
import {GlobalContent} from "../GlobalContent";
import {GalleryValueData} from "../../alldata/GalleryContent";
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
    GalleryTitle, 
    GalleryContainer,
    GalleryImage,
    DropDown,
  Dropbtn,
  DropDownContent,
  ContentDiv2,
  ContentDrop,
  ButtonCloser,
} from "./style";
import HNLogo from "../../images/HNLogo.png"

const ManageGalleryValueData = ({images}) => {
    return(
        <GalleryImage 
        src = {images} 
        alt= {images} 
        effect="blur" 
        placeholderSrc={images}
        />
    );
};

const Gallery = () => {
    return(
        <GlobalContent>
            <GalleryTitle>Photo Gallery</GalleryTitle>
            <GalleryTitle desc>The more we grateful, the more we get. This gallery describes my life in one scroll. Let the picture talk. Enjoy!</GalleryTitle>
            <GalleryContainer>
                {GalleryValueData.map((data, idx) => {
                    return(
                        <>
                        <DropDown role="button" tabIndex={-1} key={idx}>
                            <Dropbtn>
                            <ManageGalleryValueData
                            key={idx}
                            images={data.images}
                            alt={data.images}
                            />
                            </Dropbtn>
                            <DropDownContent>
                            <ContentDiv2><ButtonCloser/></ContentDiv2>
                            <ContentDrop>
                                <img src={data.images} width="100%" />
                            </ContentDrop>
                            </DropDownContent>
                        </DropDown>
                        </>
                    
                )})}
            </GalleryContainer>
        </GlobalContent>
    );
};

export default Gallery;
