import React from "react";
import {GlobalContent} from "../../GlobalContent";
import { TitleHomeContent, Viewedin} from "../style";
import {GalleryValueData} from "../../../alldata/GalleryContent";
import { BsFillCaretRightFill } from "react-icons/bs";
import 'react-lazy-load-image-component/src/effects/blur.css';
import HNLogo from "../../../images/HNLogo.png";
import {
    GalleryContainer,
    GalleryImage,
    DropDown,
    Dropbtn,
    DropDownContent,
    ContentDiv2,
    ContentDrop,
    ButtonCloser,
} from "./style";

const GalleryContent = () => {
    const ManageGalleryData = ({images}) => {
        return(
            <GalleryImage 
                src = {images} 
                alt= {images} 
                effect="blur"
                placeholderSrc={images}
                width={`190px`}
            />
        )
    };
    return(
        <GlobalContent>
            <TitleHomeContent recent>Recent Gallery</TitleHomeContent>
            <TitleHomeContent view recent>
                <Viewedin to="/galleries">View All <BsFillCaretRightFill target="_blank"/></Viewedin>
            </TitleHomeContent>
            <GalleryContainer>
                {GalleryValueData.map((data, idx) => {
                    if(idx < 8){
                        return(
                            <>
                             <DropDown role="button" tabIndex={-1} key={idx}>
                                <Dropbtn>
                                <ManageGalleryData
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
                    )}
                        })}
            </GalleryContainer>
        </GlobalContent>
    );
};

export default GalleryContent;