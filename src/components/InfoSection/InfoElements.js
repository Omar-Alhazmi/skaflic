import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #fff;
    z-index:1;
    position: relative;
    background:${({ lightBg }) => (lightBg ? '#f9f9f9' : '#fff')};
    @media screen and (max-width:768px){
        padding-bottom:100px;
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
    min-height: 450px;
    z-index: 1;
    background: #fff;
    border-radius: 3%;
    @media screen and (min-width:768px){
    flex-direction: row;
    align-items: flex-start;
    margin: auto;
}`;
export const OneActivityContainer = styled.div`
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
export const IconContainer = styled.div`
    margin-bottom:14px;
@media screen and (max-width:768px){
    margin-bottom:18px;
    }
`
export const Divider = ({ className }) => (
    <svg
        version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="167.000000pt" height="75.000000pt" viewBox="167.000000 75.000000"
        preserveAspectRatio="xMidYMid meet" className={className}>
        <g transform="translate(0.000000,75.000000) scale(0.100000,-0.100000)"
            fill="rgb(34, 131, 164)" stroke="none">
            <path
                fill="rgb(34, 131, 164)" stroke="none"
                d="M402 668 c-45 -45 38 -172 149 -228 22 -12 39 -24 36 -26 -3 -3 -40
        2 -83 10 -131 26 -248 36 -310 26 -145 -24 -198 -66 -143 -116 30 -27 83 -21
        201 25 57 23 108 41 112 41 5 0 -3 -11 -17 -25 -14 -14 -28 -38 -32 -52 -14
        -57 43 -121 91 -103 21 8 54 46 54 62 0 17 -26 7 -35 -14 -22 -51 -85 -24 -85
        37 0 25 8 40 30 59 93 78 320 28 875 -194 204 -81 331 -66 386 48 59 121 -43
        272 -184 274 -107 2 -160 -94 -76 -138 32 -16 110 -16 116 1 2 6 -16 9 -45 7
        -40 -3 -51 0 -71 22 -21 22 -23 29 -13 51 21 47 124 47 192 0 84 -58 102 -168
        39 -240 -75 -85 -155 -77 -484 48 -138 52 -284 105 -325 118 -85 26 -142 66
        -185 130 -72 106 -109 152 -138 170 -38 22 -39 23 -55 7z m65 -45 c34 -30 136
        -173 128 -181 -6 -7 -75 38 -118 77 -42 38 -67 79 -67 111 0 28 20 25 57 -7z
        m-122 -203 c-3 -5 -11 -10 -16 -10 -5 0 -50 -16 -99 -35 -97 -38 -150 -44
        -170 -19 -18 20 0 37 60 58 51 17 235 22 225 6z"
            />
        </g>
    </svg>
)

export const SectionTitle = styled.h1`
    margin:14px auto;
    color:#000;
    text-align:center;
@media screen and (max-width:768px){
    margin-bottom:18px;
    }
`
export const CardTitle = styled.h3`
    margin-bottom:14px;
    color:#000;
@media screen and (max-width:768px){
    margin-bottom:18px;
    }
`
export const CardParagraph = styled.p`
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
export const InfoContainer2 = styled.div`
    color: #fff;
    z-index:1;
        position: relative;
        box-shadow: 0px 0px 40px rgb(0 0 0 / 80%);
    background:${({ lightBg }) => (lightBg ? '#f9f9f9' : '#7c8a95')};
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


export const InfoWrapper = styled.div`
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
    min-height: 880px;
`;


export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns:${({ imgStart }) => (imgStart ? `30% 70%` : `minmax(auto ,1fr)`)};
    align-items:center;
    grid-template-areas:${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width:768px){
          margin:auto;

        grid-template-areas:${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1''col2 col2'`)};
        grid-auto-columns:minmax(auto ,1fr)
    }
`;

export const Column1 = styled.div`
     margin-bottom:15px;
     padding:0 15px;
     grid-area:col1;
`;

export const Column2 = styled.div`
     margin-bottom:15px;
     padding:0 15px;
     grid-area:col2;
`;

export const TextWrapper = styled.div`
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

export const Heading = styled.h1`
    margin-bottom:24px;
    font-size:48px;
    line-height:1.1;
    font-weight:600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#7c8a95')};

    @media screen and (max-width:480px){
        font-size:32px;
    }
`;

export const Subtitle = styled.p`
    /* max-width:440px; */
    max-width: 517px;
    margin-bottom:35px;
    font-size:18px;
    line-height:24px;
    color:${({ darkText }) => (darkText ? '#7c8a95' : '#fff')};
`;

export const BtnWrap = styled.div`
    display:flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width:555px;
    height:100%;
`;

export const Img = styled.img`
    width:100%;
    margin:0 0 10px 0;
    padding-right:0;
`;