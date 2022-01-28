import React from 'react';
import Icon1 from '../../images/avatar.svg';
import Team from './Team';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from "./ServicesElements";

const Services = () => {
    return (
        <ServicesContainer lightBg id="team">
            <ServicesH1>Our Team</ServicesH1>
            <Team />
            <ServicesH1>Developer Participant</ServicesH1>
            <ServicesWrapper>
                <ServicesCard darkBg>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Name</ServicesH2>
                    <ServicesP>Description...Description...Description...</ServicesP>
                </ServicesCard>
                <ServicesCard darkBg>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Name</ServicesH2>
                    <ServicesP>Description...</ServicesP>
                </ServicesCard>
                <ServicesCard darkBg>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Name</ServicesH2>
                    <ServicesP>Description...</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
