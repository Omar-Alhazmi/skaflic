import React,{useState,useEffect} from "react";
import {FaBars} from "react-icons/fa";
import { IconContext} from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  LogoImage
} from "./NavbarElements";
import ECM_TOKEN from '../../Fils/ECM_TOKEN.pdf';

import Logo from '../../images/mainLogo.png'
const Navbar = ({ toggle }) => {
const [scrollNav,setScrollNav]=useState(false)


const chnageNav=()=>{
  if(window.scrollY >= 80){
    setScrollNav(true)
  }else{
    setScrollNav(false)
  }
};

useEffect(()=>{
  window.addEventListener('scroll',chnageNav)
},[]);


const toggleHome=()=>{
  scroll.scrollToTop()
};


  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}><LogoImage src={Logo} alt="Logo"/></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="what_we_fix" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Skaflic Activity</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="road_map" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Road Map</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="team" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Team</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="token_and_contract" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Token and contract</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="ico" smooth={true} duration={500} spy={true} exact='true' offset={-80}>ICO</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink href={ECM_TOKEN} download>White paper</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
