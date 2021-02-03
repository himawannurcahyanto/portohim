import React from "react";
import HomeContent from "../component/HomeContent";
import HomeBanner from "../component/HomeBanner";
import {BannerContainer,SliderBig,
  SmallBannerContainer} from "../component/HomeContent/style";
import {BannerSliderContent} from "../alldata/BannerSliderContent";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySliderBig = withAutoplay(SliderBig);

const Home = () => {
  return (
    <>
      <AutoplaySliderBig 
      play={true}
      cancelOnInteraction={false}
      interval={6000}
      className="aws-btn"
      >
      {BannerSliderContent.map((data,idx)=>{
        return(
          <>
          <BannerContainer img={data.source} key={idx} src={data.small}/>
          </>
        )})}
      </AutoplaySliderBig>
      <HomeBanner />
      <HomeContent />
    </>
  );
};

export default Home;