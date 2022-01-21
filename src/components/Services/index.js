import React from 'react';
import Icon1 from '../../images/avatar.svg';


import { ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP } from "./ServicesElements";

const Services = () => {
    return (
        <ServicesContainer id="team">
            <ServicesH1 darkTitle>Our Team</ServicesH1>
            <ServicesWrapper>
                <ServicesCard darkBg>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Name</ServicesH2>
                    <ServicesP>Description...</ServicesP>
                </ServicesCard>
                <ServicesCard darkBg>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Name</ServicesH2>
                    <ServicesP>Description...</ServicesP>
                </ServicesCard>
                <ServicesCard darkBg>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Name</ServicesH2>
                    <ServicesP>Description...</ServicesP>
                </ServicesCard>
          
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
