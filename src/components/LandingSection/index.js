import React  ,{ useState }
  from "react";
// import Video from "../../videos/data.mp4";
import * as LandingElements from "./LandingElements";
import * as Container from '../InfoSection/InfoElements.js';
import ECM_TOKEN from '../../Fils/ECM_TOKEN.pdf';

const LandingSection = () => {

  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }

  // const [Play, setPlay] = useState(true)
  // const onPlay = () => {
  //   setPlay(!Play)
  //   setTimeout(() => {
  //     setPlay(false)
  //   }, 60000);
  // }
  return (
    <Container.InfoContainer  id="home">
    <Container.InfoWrapper>
          <Container.InfoRow>
            <Container.Column1>
              <LandingElements.LandingVideo 
              width="100%" height="315"  
              src="https://www.youtube.com/embed/dN6-TIOPo3U"
               title="YouTube video player" frameborder="0" 
               allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture" 
               allowFullScreen></LandingElements.LandingVideo>
            </Container.Column1>
            <Container.Column2>
            <LandingElements.LandingH2>What is <LandingElements.LandingStrong> Skaflic? </LandingElements.LandingStrong></LandingElements.LandingH2>
              <LandingElements.LandingP>Skaflic is the first market in the world for
                buying and selling equity for E-commerce stores
                through crypto currencies.
              </LandingElements.LandingP>
              <LandingElements.LandingBtnWrapper>
            <LandingElements.LandingButton
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true' dark='true'
               href={ECM_TOKEN} download>
                White paper
                {hover ? <LandingElements.ArrowForward /> : <LandingElements.ArrowRight />}{" "}
                </LandingElements.LandingButton>
                </LandingElements.LandingBtnWrapper>
                <LandingElements.LandingBtnWrapper>
            <LandingElements.LandingButton2
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true' dark='true'
              to="road_map" smooth={true} duration={500} spy={true} exact='true' offset={-80}
               >
                Road Map
                {hover ? <LandingElements.ArrowForward /> : <LandingElements.ArrowRight />}{" "}
                </LandingElements.LandingButton2>
                </LandingElements.LandingBtnWrapper>
            </Container.Column2>

            {/* <LandingElements.LandingBtnWrapper>
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
        </LandingElements.LandingBtnWrapper> */}
          </Container.InfoRow>
          </Container.InfoWrapper>
          </Container.InfoContainer>
        
  );
};

export default LandingSection;
