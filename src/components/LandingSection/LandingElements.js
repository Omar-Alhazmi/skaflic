import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { Link as LinkS } from "react-scroll";
export const LandingContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 825px;
  position: relative;
  z-index: 1;
  margin:auto;
  /* :before{
   content:'';
   position:absolute;
   top:0;
   left:0;
   right:0;
   bottom:0;
   background:linear-gradient(180deg ,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6) 100%),linear-gradient(180deg ,rgba(0,0,0,0.2) 0%,transparent 100%);
   z-index:2;
} */
`;
export const LandingVideo=styled.iframe`
  width:-webkit-fill-available;
  height:345px;
  @media screen and (max-width: 100px){
    width:450px;
  }

`;
export const LandingBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;
export const VideoPlay = styled.video`
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index:100;
`;
export const LandingWrapper =styled.div`
  display:grid;
  z-index: 1;
  height:fit-content ;
  width:100% ;
  max-width:1100px;
  margin-right:auto;
  margin-left:auto;
  padding:0 24px;
  justify-content:center;
  position: relative;
min-height: 1100px;
@media (max-width: 575.98px){
margin: 41px auto 0;
}
`
export const LandingContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LandingH2 = styled.h2`
 color:${({isStrong})=>(isStrong ? `rgb(80 198 201)`:`#2283a4`)};
  font-size: 32px;
  text-align: center;
  font-family: Montserrat, sans-serif;
    line-height: 150%;
    padding: 15px 0px;
    font-weight: 400;
  @media screen and(max-width:768px) {
    font-size: 28px;
  }
  @media screen and(max-width:480px) {
    font-size: 32px;
  }
`;
export const LandingStrong = styled.strong`
 color:rgb(80 198 201);
  font-size: 32px;
  text-align: center;
  font-family: Montserrat, sans-serif;
    line-height: 150%;
    padding: 15px 0px;
    font-weight: 400;
  @media screen and(max-width:768px) {
    font-size: 28px;
  }
  @media screen and(max-width:480px) {
    font-size: 32px;
  }
`;
export const LandingP = styled.p`
  margin-top: 24px;
  color: #000;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and(max-width:768px) {
    font-size: 24px;
  }

  @media screen and(max-width:480px) {
    font-size: 18px;
  }
`;

export const LandingBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const LandingButton= styled.a`
    border-radius:50px;
    text-decoration:none;
    background:${({primary})=>(primary ? '#2283a4' :'#010606')};
    white-space:nowrap;
    padding:${({big}) =>(big ? '14px 48px' : '12px 30px')};
    color:${({dark})=>(dark ? '#fff' :'#fff')};
    font-size:${({fontBig})=>(fontBig ?'20px' :'16px')};
    outline:none;
    border:none;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 0.2s ease-in-out;
    &:hover{
        transition: all 0.2s ease-in-out;
        color:${({dark})=>(dark ? '#000' :'#000')};
        background:${({primary})=>(primary ? '#fff':'#2283a4' )}; 
    };
`;
export const LandingButton2= styled(LinkS)`
    border-radius:50px;
    text-decoration:none;
    background:${({primary})=>(primary ? '#2283a4' :'#010606')};
    white-space:nowrap;
    padding:${({big}) =>(big ? '14px 48px' : '12px 30px')};
    color:${({dark})=>(dark ? '#fff' :'#fff')};
    font-size:${({fontBig})=>(fontBig ?'20px' :'16px')};
    outline:none;
    border:none;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 0.2s ease-in-out;
    &:hover{
        transition: all 0.2s ease-in-out;
        color:${({dark})=>(dark ? '#000' :'#000')};
        background:${({primary})=>(primary ? '#fff':'#2283a4' )}; 
    };
`;
export const LandingPageH1 = styled.h1`
color: #fff;
font-size: 48px;
text-align: center;
@media screen and (max-width: 768px){
    font-size: 40px;
}
@media screen and (max-width: 480px){
    font-size: 32px;
}
`;
