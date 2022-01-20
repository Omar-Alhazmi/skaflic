import styled from "styled-components";

export const ServicesContainer=styled.div`
    height:800px ;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:#27323c;
    z-index:1;
    position: relative;
    @media screen and (max-width:768px){
        height: 1100px;
    }
    @media screen and (max-width:480px){
        height: 1300px;
    }
`;

export const ServicesWrapper=styled.div`
    max-width:1000px;
    margin:0 auto;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    align-items:center;
    grid-gap:16px;
    padding:0 50px;`;


export const ContentWrapper=styled.div`
  padding:30px;
  background-color: #ffff;
`;

export const ServicesCard=styled.div`
position: relative;
border-radius: 8px;
    height: 340px;
    width: 265px;
    max-height:340px;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0 0 80px -10px black;
    overflow: hidden;
`;
export const CardDescription=styled.div`
    z-index: 1;
    position: relative;
    height: 80px;
    width: 100%;
    bottom: 0;
`;
export const SvgCu=styled.svg`
    position: relative;
    fill: white;
    left: 0;
    bottom: 0;
    width: 400px;
    height: 450px;
`;
export const SocialIconsWrapper=styled.div`
 height: 80px;
    width: 400px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100px;
    margin: auto;
`;
export const SocialIcon=styled.div`
  height: 25px;
    width: 25px;
    border-radius: 100%;
    background-color: white;
    display: inline-block;
    padding: 5px;
    margin-right: 25px;
    transform: translateY(200px);
    transition: transform 1s cubic-bezier(.46, 1.48, .18, .81);
    &:hover{
        transform: translateY(0px);
    }
`;

export const CardInfo=styled.div`
  	font-family: Inconsolata;
    padding-left: 20px;
    transform: translateY(250px);
    /* background-color: aliceblue; */
    transition: transform 1s cubic-bezier(.31,1.21,.64,1.02);
    &:hover{
        transform: translateY(0px);
    }
`;

export const CardHedLine=styled.div`
    font-weight: bolder;
    padding-top: 5px;
`;

export const CardParagraph=styled.h2`
        margin-top: 10px;
`;

export const CardIcons=styled.div`
    height: 18px;
    width: 18px;
    margin-top: 4px;
    margin-left: 4px;
    background-position: center;
    background-size: cover;
`;




