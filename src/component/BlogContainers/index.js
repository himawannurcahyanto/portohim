import React, {useState} from 'react';
import {GlobalContent} from '../GlobalContent';
import {BlogData} from "../../alldata/BlogContent";
import { RWebShare } from "react-web-share";
import {
    TitleContent,
    BoxContainer,
    BlogImage,
    BlogWrapped,
    BlogApart,
    BlogDivApart,
    ArticlePart,
    Linked,
    ShareBtn,
    BlogImageArt,
    BlogVideo,
    BlogDiv,
    BlogImageContent,
    BlogVidDiv
} from "./style";

const ManageOthArtData = ({image, desc , title}) => {
    return(
        <Linked to ={`/blogscontainer/${title}`}>
            <BlogApart art>
                <BlogDivApart imagart><BlogImageArt src={image}/></BlogDivApart>
                <BlogDivApart contain><BoxContainer>{desc}</BoxContainer></BlogDivApart>
            </BlogApart>
        </Linked>
    )
}

const BlogContainers = ({match}) => {
    const blogs = BlogData.filter(x => x['title'] == match.params.title)
    function shuffleArray(array){
        array.sort(function(){
            return 0.5-Math.random();
        });
    }
    shuffleArray(BlogData);

    return(
        <>
        <GlobalContent>
            <BlogApart containe>
                <BlogDivApart contain>
                {blogs.map((data) => {
                    return(
                    <>
                    <TitleContent>{data.title}</TitleContent>
                    <BlogWrapped image>
                        <BlogImage src = {data.imagee} />
                    </BlogWrapped>
                    <BlogWrapped>
                        <BoxContainer>{data.content.par1}</BoxContainer>
                            <BlogDiv>
                                <BlogImageContent src = {data.image.par1} />
                            </BlogDiv>
                            <BlogVidDiv videos={data.videos.par1}>
                                <BlogVideo url={data.video.par1}/>
                            </BlogVidDiv>
                        <BoxContainer>{data.content.par2}</BoxContainer>
                        <BlogDiv>
                                <BlogImageContent src = {data.image.par2} />
                            </BlogDiv>
                            <BlogVidDiv videos={data.videos.par2}>
                                <BlogVideo url={data.video.par2}/>
                            </BlogVidDiv>
                        <BoxContainer>{data.content.par3}</BoxContainer>
                            <BlogDiv>
                                <BlogImageContent src = {data.image.par3} />
                            </BlogDiv>
                            <BlogVidDiv videos={data.videos.par3}>
                                <BlogVideo url={data.video.par3}/>
                            </BlogVidDiv>
                        <BoxContainer>{data.content.par4}</BoxContainer>
                            <BlogDiv>
                                <BlogImageContent src = {data.image.par4} />
                            </BlogDiv>
                            <BlogVidDiv videos={data.videos.par4}>
                                <BlogVideo url={data.video.par4}/>
                            </BlogVidDiv>
                        <BoxContainer>{data.content.par5}</BoxContainer>
                            <BlogDiv>
                                <BlogImageContent src = {data.image.par5} />
                            </BlogDiv>
                            <BlogVidDiv videos={data.videos.par5}>
                                <BlogVideo url={data.video.par5}/>
                            </BlogVidDiv>
                        <BoxContainer>{data.content.par6}</BoxContainer>
                            <BlogDiv>
                                <BlogImageContent src = {data.image.par6} />
                            </BlogDiv>
                            <BlogVidDiv videos={data.videos.par6}>
                                <BlogVideo url={data.video.par6}/>
                            </BlogVidDiv>
                        <BoxContainer>{data.content.par7}</BoxContainer>
                            <BlogDiv>
                                <BlogImageContent src = {data.image.par7} />
                            </BlogDiv>
                            <BlogVidDiv videos={data.videos.par7}>
                                <BlogVideo url={data.video.par7}/>
                            </BlogVidDiv>
                        <BoxContainer>{data.content.par8}</BoxContainer>
                            <BlogDiv>
                                <BlogImageContent src = {data.image.par8} />
                            </BlogDiv>
                            <BlogVidDiv videos={data.videos.par8}>
                                <BlogVideo url={data.video.par8}/>
                            </BlogVidDiv>
                        <BoxContainer>{data.content.par9}</BoxContainer>
                            <BlogDiv>
                                <BlogImageContent src = {data.image.par9} />
                            </BlogDiv>
                            <BlogVidDiv videos={data.videos.par9}>
                                <BlogVideo url={data.video.par9}/>
                            </BlogVidDiv>
                        <BoxContainer>{data.content.par10}</BoxContainer>
                            <BlogDiv>
                                <BlogImageContent src = {data.image.par10} />
                            </BlogDiv>
                            <BlogVidDiv videos={data.videos.par10}>
                                <BlogVideo url={data.video.par10}/>
                            </BlogVidDiv>
                    </BlogWrapped>
                    <h4>Share To</h4>
                    <RWebShare
                        data={{
                        title: data.title,
                        }}
                    >
                    <ShareBtn>Share 🔗</ShareBtn>
                    </RWebShare>
                    </>
                    )
                })}
                </BlogDivApart>
                <BlogDivApart>
                    <TitleContent art>Other Article</TitleContent>
                    <ArticlePart>
                    {BlogData.map((data,idx) => (
                    <ManageOthArtData 
                        key={idx}
                        image={data.imagee}
                        desc={data.description}
                        title={data.title}
                    />
                    ))}
                    </ArticlePart>
                </BlogDivApart>
            </BlogApart>
        </GlobalContent>
        </>
    );
};

export default BlogContainers;