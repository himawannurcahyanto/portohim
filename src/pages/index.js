import React from "react";
import HomeContent from "../component/HomeContent";
import HomeBanner from "../component/HomeBanner";
import {BannerContainer} from "../component/HomeContent/style";
import {BannerSliderContent} from "../alldata/BannerSliderContent";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
  return (
    <>
      <AutoplaySlider 
      animation="cubeAnimation"
      play={true}
      cancelOnInteraction={false}
      interval={6000}
      className="aws-btn"
      >
      {BannerSliderContent.map((data,idx)=>{
        return(
          <>
          <img src={data.source} key={idx}/>
          </>
        )})}
      </AutoplaySlider>
      <HomeBanner />
      <HomeContent />
    </>
  );
};

export default Home;