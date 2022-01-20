import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
import ECM_TOKEN from '../../Fils/ECM_TOKEN.pdf';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="what_we_fix" onClick={toggle}>
            What we fix
          </SidebarLink>
          <SidebarLink to="road_map" onClick={toggle}>
            Road Map
          </SidebarLink>
          <SidebarLink to="team" onClick={toggle}>
            Team
          </SidebarLink>
          <SidebarLink to="token_and_contract" onClick={toggle}>
            Token and contract
          </SidebarLink>
          <SidebarLink to="ico" onClick={toggle}>
            ICO
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute href={ECM_TOKEN} download>White paper</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
