import React from 'react';
import * as ServicesElements from "./ServicesElements";
const Services = () => {
    return (
        <ServicesElements.ServicesContainer id="team">
            <ServicesElements.ServicesH1>Our Team</ServicesElements.ServicesH1>
            <ServicesElements.CardWrapper>
                <ServicesElements.ServicesCard>
                    <ServicesElements.ServicesIcon />
                    <ServicesElements.ContentWrapper>
                    <ServicesElements.ServicesH2>Reduce Expense</ServicesElements.ServicesH2>
                    <ServicesElements.ServicesP>We help reduce your fees and increase your overall revenue.</ServicesElements.ServicesP>
                    </ServicesElements.ContentWrapper>
                </ServicesElements.ServicesCard>
                <ServicesElements.ServicesCard>
                    <ServicesElements.ServicesIcon/>
                    <ServicesElements.ContentWrapper>
                    <ServicesElements.ServicesH2>Virtual Offices</ServicesElements.ServicesH2>
                    <ServicesElements.ServicesP>You can acess our platform online anywhere in the world.</ServicesElements.ServicesP>
                    </ServicesElements.ContentWrapper>
                </ServicesElements.ServicesCard>
                <ServicesElements.ServicesCard>
                    <ServicesElements.ServicesIcon />
                    <ServicesElements.ContentWrapper>
                    <ServicesElements.ServicesH2>Premium Benefits</ServicesElements.ServicesH2>
                    <ServicesElements.ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesElements.ServicesP>
                    </ServicesElements.ContentWrapper>
                </ServicesElements.ServicesCard>
    </ServicesElements.CardWrapper>
        </ServicesElements.ServicesContainer>
    )
}

export default Services;
