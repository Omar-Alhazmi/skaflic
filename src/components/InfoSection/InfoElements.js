import styled from "styled-components";

export const InfoContainer=styled.div`
    color: #fff;
    z-index:1;
    position: relative;
    background:${({lightBg})=>(lightBg ? '#f9f9f9' : '#7c8a95')};
    @media screen and (max-width:768px){
        padding:100px 0;
    }
`;
export const ActivityContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height:fit-content ;
    max-width:1100px;
    min-height: 1100px;
    z-index: 1;
    @media screen and (min-width:768px){
    flex-direction: row;
    align-items: flex-start;
}`;
export const OneActivityContainer=styled.div`
  display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    padding: 26px;
    max-width: 360px;
    text-align: center;
    flex-basis: 33%;
    /* @media screen and (min-width:768px){
    flex-direction: row;
    align-items: flex-start;
} */
`
export const IconContainer =styled.div`
    margin-bottom:14px;
@media screen and (max-width:768px){
    margin-bottom:18px;
    }
`
export const SectionTitle =styled.h1`
    margin:14px auto;
    color:#000;
    text-align:center;
@media screen and (max-width:768px){
    margin-bottom:18px;
    }
`
export const CardTitle =styled.h3`
    margin-bottom:14px;
    color:#000;
@media screen and (max-width:768px){
    margin-bottom:18px;
    }
`
export const CardParagraph =styled.p`
    font-size: 14px;
    opacity: 0.75;
    line-height: 28px;
    width: 100%;
    color:#000;

@media screen and (max-width:768px){
    font-size: 16px;
    line-height: 24px;
    }
`
export const InfoContainer2=styled.div`
    color: #fff;
    z-index:1;
        position: relative;
        margin-bottom: 350px;
        box-shadow: 0px 0px 40px rgb(0 0 0 / 80%);
    background:${({lightBg})=>(lightBg ? '#f9f9f9' : '#7c8a95')};
    :before{
   content:'';
   position:absolute;
   top:0;
   left:0;
   right:0;
   bottom:0;
   background:linear-gradient(180deg ,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6) 100%),linear-gradient(180deg ,rgba(0,0,0,0.2) 0%,transparent 100%);
   z-index:2;
}
    @media screen and (max-width:1024px){
        padding:100px 0;
        margin-bottom: 862px;

    }
`;


export const InfoWrapper=styled.div`
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
`;


export const InfoRow=styled.div`
    display: grid;
    grid-auto-columns:${({imgStart})=>(imgStart ? `30% 70%`:`minmax(auto ,1fr)`)};
    align-items:center;
    grid-template-areas:${({imgStart})=>(imgStart ? `'col2 col1'`:`'col1 col2'`)};

    @media screen and (max-width:768px){
          margin:auto;

        grid-template-areas:${({imgStart})=>(imgStart ? `'col1' 'col2'`:`'col1 col1''col2 col2'`)};
        grid-auto-columns:minmax(auto ,1fr)
    }
`;

export const Column1=styled.div`
     margin-bottom:15px;
     padding:0 15px;
     grid-area:col1;
`;

export const Column2=styled.div`
     margin-bottom:15px;
     padding:0 15px;
     grid-area:col2;
`;

export const TextWrapper =styled.div`
    max-width:540px;
    padding-top:0;
    padding-bottom:60px;
`;

export const TopLine = styled.p`
    color:#4ec7cc;
    font-size:16px;
    line-height:16px;
    font-weight:700;
    letter-spacing:1.4px;
    text-transform:uppercase;
    margin-bottom:16px;
`;

export const Heading =styled.h1`
    margin-bottom:24px;
    font-size:48px;
    line-height:1.1;
    font-weight:600;
    color: ${({lightText})=>(lightText ? '#f7f8fa' : '#7c8a95')};

    @media screen and (max-width:480px){
        font-size:32px;
    }
`;

export const Subtitle=styled.p`
    /* max-width:440px; */
    max-width: 517px;
    margin-bottom:35px;
    font-size:18px;
    line-height:24px;
    color:${({darkText})=>(darkText ? '#7c8a95' :'#fff')};
`;

export const BtnWrap=styled.div`
    display:flex;
    justify-content: flex-start;
`;

export const ImgWrap=styled.div`
    max-width:555px;
    height:100%;
`;

export const Img=styled.img`
    width:100%;
    margin:0 0 10px 0;
    padding-right:0;
`;