import styled from "styled-components";
import { Link } from "react-router-dom";
  
export const FooterContainer = styled.div`
 min-height: 500px;
    padding: 64px 0px;
    width: 100%;
    color: rgb(248, 248, 248);
    background: #373548;

`;

export const FooterWrap = styled.div`
        margin: 0px auto;
   display: flex;
    flex-direction: column;
    width: 1366px;
    height: 100%;
    padding: 0px 123px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-flow: row wrap;
    @media (max-width: 1199.98px){
    padding: 0px 20px;
    width: 100%;
    }
    @media (max-width: 576px){
    text-align: center;
}
`;

export const FooterLinksColumns = styled.div`
    flex-direction: column;
    display: flex;
    @media (max-width: 1199.98px){
    width: 100%;
    flex-direction: row;
    }
    @media (max-width: 575.98px){
    flex-direction: column;
    }

`;

export const FooterLinksWrapper = styled.div`
    flex-direction: column;
    display: flex;
`;


export const FooterLinkTitle = styled.div`
   margin:10px 0;
   @media (max-width: 575.98px) {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
}
`;
export const FooterLink = styled.a`
   color: rgb(248, 248, 248);
    text-decoration: none;
    transition: all 0.4s ease 0s;
    &:hover {
        color: #4ec7cc;
        transition:0.3s ease-out;
    }
`;
export const FooterParagraph = styled.p`
    margin-top: 10px;
`
export const FooterLinkSocialList = styled.ul`
    list-style-type: none;
  @media (max-width: 575.98px){
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
}
`;

export const FooterLinkSocialListItem = styled.li`
    margin-top: 15px;
    margin-right: 20px;
@media (max-width: 575.98px){
    margin: 8px;
}
`
export const FooterLinkSocialSpan = styled.span`
   display: flex;
    -webkit-box-align: center;
    align-items: center;
`

export const SocialLogo = styled(Link)`
    cursor:pointer;
    display:flex;
    align-items:center;
    &:hover {
        color: #4ec7cc;
        transition:0.3s ease-out;
    }
`;

export const FooterLogo = styled.img`
     width: 209px;
    height: 134px;
    margin-left: -29%;
    @media (max-width: 575.98px){
        margin:auto;
    }

`;

export const SocialIcons = styled.div`
   margin-right: 10px;
`;

export const Footer = styled.footer`
    height: 100px;
    width: 100%;
    background: linear-gradient(135deg,#4e4376 0%,#4ec7cc 100%);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
`;

export const FooterCopyright = styled.p`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    color: rgb(255, 255, 255);
`
export const FooterHedLine = styled.h3`
@media (max-width: 1199.98px){
    margin-bottom: 0px;
    margin-top: 32px;
}
`
