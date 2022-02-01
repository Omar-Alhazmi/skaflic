import React from 'react'
import * as FooterStyle from './StyledFooter';
import { animateScroll as scroll } from 'react-scroll'
import {
  FaTwitter,
  FaYoutube,
  FaTelegram,
  FaDiscord

} from "react-icons/fa";
import {
  VscMail,
  VscHome,
} from "react-icons/vsc";
import Logo from '../../images/mainLogo.png'
import ECM_TOKEN from '../../Fils/ECM_TOKEN.pdf';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
    <FooterStyle.FooterContainer>
      <FooterStyle.FooterWrap>
        <FooterStyle.FooterLinksColumns>
          <FooterStyle.FooterLinksWrapper>
          <FooterStyle.SocialLogo to="/" onClick={toggleHome}>
            <FooterStyle.FooterLogo src={Logo} alt='Logo'/>
            </FooterStyle.SocialLogo>
            <FooterStyle.FooterLinkTitle>
              <VscMail color='rgb(78 199 204)' size={25} className='icon-margin' />
              <span>Contact</span>
            </FooterStyle.FooterLinkTitle>
            <FooterStyle.FooterLink href="mailto:skaflic@gmail.com">skaflic@gmail.com</FooterStyle.FooterLink>
            <FooterStyle.FooterParagraph >0123456789</FooterStyle.FooterParagraph>
          </FooterStyle.FooterLinksWrapper>
        </FooterStyle.FooterLinksColumns>
        <FooterStyle.FooterLinksColumns>
                    <FooterStyle.FooterLinksWrapper>
              <FooterStyle.FooterLinkTitle>
                <VscHome  color='rgb(78 199 204)' size={25} className='icon-margin' />
                <span>Address</span>
                </FooterStyle.FooterLinkTitle>
              <FooterStyle.FooterParagraph >~~~~~~ Dubai</FooterStyle.FooterParagraph>
              <FooterStyle.FooterParagraph >UAE</FooterStyle.FooterParagraph>
              </FooterStyle.FooterLinksWrapper>
      </FooterStyle.FooterLinksColumns>
        <FooterStyle.FooterLinksColumns>
          <FooterStyle.FooterLinksWrapper>
            <FooterStyle.FooterHedLine>
              Community
               </FooterStyle.FooterHedLine>
               <FooterStyle.FooterLinkSocialList>
                 <FooterStyle.FooterLinkSocialListItem>
                 <FooterStyle.FooterLink target="_blank" href="https://t.me/skaflicofficial">
                   <FooterStyle.FooterLinkSocialSpan>
                     <FooterStyle.SocialIcons><FaTelegram /></FooterStyle.SocialIcons>
                     Telegram
                   </FooterStyle.FooterLinkSocialSpan>
                   </FooterStyle.FooterLink>
                 </FooterStyle.FooterLinkSocialListItem>
                 <FooterStyle.FooterLinkSocialListItem>
                 <FooterStyle.FooterLink target="_blank" href="https://discordapp.com/users/913029021321818153/">
                 <FooterStyle.FooterLinkSocialSpan>
                     <FooterStyle.SocialIcons><FaDiscord /></FooterStyle.SocialIcons>
                     Discord
                   </FooterStyle.FooterLinkSocialSpan>
                   </FooterStyle.FooterLink>
                   </FooterStyle.FooterLinkSocialListItem>
                   <FooterStyle.FooterLinkSocialListItem>
                   <FooterStyle.FooterLink target="_blank" href="https://www.youtube.com/">
                   <FooterStyle.FooterLinkSocialSpan>
                     <FooterStyle.SocialIcons><FaYoutube /></FooterStyle.SocialIcons>
                     Youtube
                   </FooterStyle.FooterLinkSocialSpan>
                      </FooterStyle.FooterLink>
                   </FooterStyle.FooterLinkSocialListItem>
                   <FooterStyle.FooterLinkSocialListItem>
                   <FooterStyle.FooterLink target="_blank" href="https://twitter.com/SkaflicOfficial">
                   <FooterStyle.FooterLinkSocialSpan>
                     <FooterStyle.SocialIcons><FaTwitter /></FooterStyle.SocialIcons>
                     Twitter
                   </FooterStyle.FooterLinkSocialSpan>
                     </FooterStyle.FooterLink>
                   </FooterStyle.FooterLinkSocialListItem>
               </FooterStyle.FooterLinkSocialList>
          </FooterStyle.FooterLinksWrapper>
        </FooterStyle.FooterLinksColumns>
        <FooterStyle.FooterLinksColumns>
          <FooterStyle.FooterLinksWrapper>
            <FooterStyle.FooterHedLine>
            Legal
               </FooterStyle.FooterHedLine>
               <FooterStyle.FooterLinkSocialList>
                 <FooterStyle.FooterLinkSocialListItem>
                 <FooterStyle.FooterLink href={ECM_TOKEN} download>
                   <FooterStyle.FooterLinkSocialSpan>
                     Whitepaper
                   </FooterStyle.FooterLinkSocialSpan>
                   </FooterStyle.FooterLink>
                 </FooterStyle.FooterLinkSocialListItem>
                 <FooterStyle.FooterLinkSocialListItem>
                 <FooterStyle.FooterLink target="_blank" href="#">
                 <FooterStyle.FooterLinkSocialSpan>
                     Terms of use
                   </FooterStyle.FooterLinkSocialSpan>
                   </FooterStyle.FooterLink>
                   </FooterStyle.FooterLinkSocialListItem>
                   <FooterStyle.FooterLinkSocialListItem>
                   <FooterStyle.FooterLink target="_blank" href="#">
                   <FooterStyle.FooterLinkSocialSpan>
                     AML & KYC
                   </FooterStyle.FooterLinkSocialSpan>
                      </FooterStyle.FooterLink>
                   </FooterStyle.FooterLinkSocialListItem>
                   <FooterStyle.FooterLinkSocialListItem>
                   <FooterStyle.FooterLink target="_blank" href="#">
                   <FooterStyle.FooterLinkSocialSpan>
                     Data Protection Policy
                   </FooterStyle.FooterLinkSocialSpan>
                     </FooterStyle.FooterLink>
                   </FooterStyle.FooterLinkSocialListItem>
                   <FooterStyle.FooterLinkSocialListItem>
                   <FooterStyle.FooterLink target="_blank" href="#">
                   <FooterStyle.FooterLinkSocialSpan>
                   FAQ
                   </FooterStyle.FooterLinkSocialSpan>
                     </FooterStyle.FooterLink>
                   </FooterStyle.FooterLinkSocialListItem>
               </FooterStyle.FooterLinkSocialList>
          </FooterStyle.FooterLinksWrapper>
        </FooterStyle.FooterLinksColumns>
      </FooterStyle.FooterWrap>
    </FooterStyle.FooterContainer>
          <FooterStyle.Footer>
            <FooterStyle.FooterCopyright>
                        SKAFLIC © {new Date().getFullYear()} All rights reserved
            </FooterStyle.FooterCopyright>
        </FooterStyle.Footer>
        </>
  );
};

export default Footer;
