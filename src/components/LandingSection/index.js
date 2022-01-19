import React, { useState } from "react";
import Video from "../../videos/data.mp4";
import * as LandingElements from "./LandingElements";

const LandingSection = () => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  const [Play, setPlay] = useState(true)

  const onPlay = () => {
    setPlay(!Play)
    setTimeout(() => {
      setPlay(false)
    }, 60000);
  }
  return (
    <LandingElements.LandingContainer id="home">
      <LandingElements.LandingBg>
        <LandingElements.VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </LandingElements.LandingBg>
      <LandingElements.LandingContent>
        <LandingElements.LandingBtnWrapper>
          {!Play ? <LandingElements.VideoPlay autoPlay controls >
            <source src={Video} type="video/mp4" />
          </LandingElements.VideoPlay> :
            <LandingElements.LandingButton
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true' dark='true' onClick={onPlay}>
              What is SKAFLIC?
              {hover ? <LandingElements.ArrowForward /> : <LandingElements.ArrowRight />}{" "}
            </LandingElements.LandingButton>}
        </LandingElements.LandingBtnWrapper>
      </LandingElements.LandingContent>
    </LandingElements.LandingContainer>
  );
};

export default LandingSection;
