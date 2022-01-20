import React from 'react'
import * as FooterStyle from './StyledFooter';
import { animateScroll as scroll } from 'react-scroll'
import {
    FaLinkedin,
    FaTwitter,
    FaYoutube,
  } from "react-icons/fa";
  import {
    BsDiscord,
    BsTelegram,
  } from "react-icons/bs";
import Logo from '../../images/mainLogo.png'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterStyle.FooterContainer>
            <FooterStyle.FooterWrap>
                <FooterStyle.FooterLinksContainer>
                    <FooterStyle.FooterLinksWrapper>
                    <FooterStyle.FooterLinkItems>
              <FooterStyle.FooterLinkTitle>About</FooterStyle.FooterLinkTitle>
              <FooterStyle.FooterLink to="/">Our base of operations</FooterStyle.FooterLink>
              <FooterStyle.FooterLink to="/">Buraidah, Al Qassim, Saudi Arabia</FooterStyle.FooterLink>
              <FooterStyle.FooterLink to="/">Our company mission</FooterStyle.FooterLink>
              <FooterStyle.FooterLink to="/">To ensure stability, access and, opportunity to all investors.</FooterStyle.FooterLink>
              <FooterStyle.FooterLink to="/">Terms of Service</FooterStyle.FooterLink>
            </FooterStyle.FooterLinkItems>
            <FooterStyle.FooterLinkItems>
              <FooterStyle.FooterLinkTitle>Contact Us </FooterStyle.FooterLinkTitle>
              <FooterStyle.FooterLink to="/">Contact</FooterStyle.FooterLink>
              <FooterStyle.FooterLink to="/">Support</FooterStyle.FooterLink>
              <FooterStyle.FooterLink to="/">Destinations</FooterStyle.FooterLink>
              <FooterStyle.FooterLink to="/">Sponserships</FooterStyle.FooterLink>
            </FooterStyle.FooterLinkItems>
          </FooterStyle.FooterLinksWrapper>
          <FooterStyle.FooterLinksWrapper>
            <FooterStyle.FooterLinkItems>
              <FooterStyle.FooterLinkTitle>Social Media </FooterStyle.FooterLinkTitle>
              <FooterStyle.FooterLinkSocial target="_blank"  to="https://t.me/skaflicofficial">Telegram</FooterStyle.FooterLinkSocial>
              <FooterStyle.FooterLinkSocial target="_blank"  to="https://discordapp.com/users/913029021321818153/">Discord</FooterStyle.FooterLinkSocial>
              <FooterStyle.FooterLinkSocial target="_blank"  to="https://www.youtube.com/">Youtube </FooterStyle.FooterLinkSocial>
              <FooterStyle.FooterLinkSocial target="_blank"  to="https://twitter.com/SkaflicOfficial">Twitter</FooterStyle.FooterLinkSocial>
            </FooterStyle.FooterLinkItems>
                    </FooterStyle.FooterLinksWrapper>
                </FooterStyle.FooterLinksContainer>
                <FooterStyle.SocialMedia>
          <FooterStyle.SocialMediaWrap>
            <FooterStyle.SocialLogo to="/" onClick={toggleHome}><FooterStyle.LogoFooter src={Logo} alt="Logo"/></FooterStyle.SocialLogo>
            <FooterStyle.WebsiteRights>
            SKAFLIC © {new Date().getFullYear()} All rights reserved
            </FooterStyle.WebsiteRights>
            <FooterStyle.SocialIcons>
              <FooterStyle.SocialIconLink href="https://t.me/skaflicofficial" target="_blank" aria-label="Facebook">
                <BsTelegram />
              </FooterStyle.SocialIconLink>
              <FooterStyle.SocialIconLink href="https://discordapp.com/users/913029021321818153/" target="_blank" aria-label="Instagram">
                <BsDiscord />
              </FooterStyle.SocialIconLink>
              <FooterStyle.SocialIconLink href="https://www.youtube.com/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </FooterStyle.SocialIconLink>
              <FooterStyle.SocialIconLink href="https://twitter.com/SkaflicOfficial" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </FooterStyle.SocialIconLink>
              <FooterStyle.SocialIconLink href="https://www.linkedin.com/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </FooterStyle.SocialIconLink>
            </FooterStyle.SocialIcons>
          </FooterStyle.SocialMediaWrap>
        </FooterStyle.SocialMedia>
            </FooterStyle.FooterWrap>
        </FooterStyle.FooterContainer>
    );
};

export default Footer;
