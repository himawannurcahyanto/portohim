import React from "react";
import {GlobalContent} from "../GlobalContent";
import {GalleryValueData} from "../../alldata/GalleryContent";
import 'react-lazy-load-image-component/src/effects/blur.css';
import {GalleryTitle, GalleryContainer,GalleryImage} from "./style";
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
                {GalleryValueData.map((data, idx) => (
                <ManageGalleryValueData
                    key={idx}
                    images={data.images}
                    alt={data.images}
                />
                ))}
            </GalleryContainer>
        </GlobalContent>
    );
};

export default Gallery;
