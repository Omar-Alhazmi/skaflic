import React from 'react';
import * as ServicesElements from "./ServicesElements";
import './st.css';
const Services = () => {
    return (
        <ServicesElements.ServicesContainer id="team">
            <ServicesElements.ServicesWrapper>
            <ServicesElements.ServicesH1>Our Team</ServicesElements.ServicesH1>
            <ServicesElements.ServicesWrapper>
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
            </ServicesElements.ServicesWrapper>
    {/* <ServicesCard>
    <CardDescription>
        <SocialIconsWrapper>
            <SocialIcon>
                <CardIcons></CardIcons>
            </SocialIcon>
                <SocialIcon>
                    <CardIcons className='social-2'></CardIcons>
                </SocialIcon>
                <SocialIcon>
                <CardIcons className='social-3'></CardIcons>

                </SocialIcon>
        </SocialIconsWrapper>
        <SvgCu>
            <path id="p" d="M0,200 Q80,100 400,200 V150 H0 V50" transform="translate(0 300)" />
            <rect id="dummyRect" x="0" y="0" height="450" width="400" fill="transparent" />
            <animate xlinkHref="#p" attributeName="d" to="M0,50 Q80,100 400,50 V150 H0 V50" fill="freeze" begin="dummyRect.mouseover" end="dummyRect.mouseout" dur="0.1s" id="bounce1" />
            <animate xlinkHref="#p" attributeName="d" to="M0,50 Q80,0 400,50 V150 H0 V50" fill="freeze" begin="bounce1.end" end="dummyRect.mouseout" dur="0.15s" id="bounce2" />
            <animate xlinkHref="#p" attributeName="d" to="M0,50 Q80,80 400,50 V150 H0 V50" fill="freeze" begin="bounce2.end" end="dummyRect.mouseout" dur="0.15s" id="bounce3" />
            <animate xlinkHref="#p" attributeName="d" to="M0,50 Q80,45 400,50 V150 H0 V50" fill="freeze" begin="bounce3.end" end="dummyRect.mouseout" dur="0.1s" id="bounce4" />
            <animate xlinkHref="#p" attributeName="d" to="M0,50 Q80,50 400,50 V150 H0 V50" fill="freeze" begin="bounce4.end" end="dummyRect.mouseout" dur="0.05s" id="bounce5" />
            <animate xlinkHref="#p" attributeName="d" to="M0,200 Q80,100 400,200 V150 H0 V50" fill="freeze" begin="dummyRect.mouseout" dur="0.15s" id="bounceOut" />
        </SvgCu>
        <CardInfo>
            <CardHedLine>Name</CardHedLine>
            <CardParagraph>Description</CardParagraph>
        </CardInfo>
    </CardDescription>
    {/* <div class="card-blur"></div> */}
    
    </ServicesElements.ServicesWrapper>
        </ServicesElements.ServicesContainer>
    )
}

export default Services;
