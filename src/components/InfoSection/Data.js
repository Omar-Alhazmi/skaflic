import * as InfoElements from "./InfoElements";
import { BsCurrencyExchange, BsCoin } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
import { RiExchangeFundsLine, RiExchangeDollarLine, RiGovernmentLine } from "react-icons/ri";
import {
    FaFileContract, FaFileInvoiceDollar,
    FaWatchmanMonitoring, FaEarlybirds, FaRegWindowRestore
} from "react-icons/fa";
import { VscLightbulbAutofix } from "react-icons/vsc";
import { CgListTree } from "react-icons/cg";
import { GrStakeholder } from "react-icons/gr";


const data =
    <>
        <InfoElements.SectionTitle darkText={true}> Skaflic Activity</InfoElements.SectionTitle>
        <InfoElements.ActivityContainer>
            <InfoElements.OneActivityContainer>
                <InfoElements.IconContainer>
                    <BsCurrencyExchange color='rgb(34 131 164)' size='8em' />
                </InfoElements.IconContainer>
                <InfoElements.CardTitle>
                    Exchange platform
                </InfoElements.CardTitle>
                <InfoElements.CardParagraph>
                    On the exchange platform users can tread all stoves equity and all major crypto currencies BTC, ETH, BNB, XRP..., moreover
                    users can stake Flic to get rewords and cash out their profit through P2P service or via USDFbuy - back service
                </InfoElements.CardParagraph>
            </InfoElements.OneActivityContainer>
            <InfoElements.OneActivityContainer>
                <InfoElements.IconContainer>
                    <GiShoppingCart color='rgb(34 131 164)' size='8em' />
                </InfoElements.IconContainer>
                <InfoElements.CardTitle>
                    Stores Platform
                </InfoElements.CardTitle>
                <InfoElements.CardParagraph>
                    CardParagraph1 CardParagraph1 CardParagraph1 CardParagraph1
                    CardParagraph1 CardParagraph1 CardParagraph1 CardParagraph1
                </InfoElements.CardParagraph>
            </InfoElements.OneActivityContainer>
            <InfoElements.OneActivityContainer>
                <InfoElements.IconContainer>
                    <RiExchangeFundsLine color='rgb(34 131 164)' size='8em' />
                </InfoElements.IconContainer>
                <InfoElements.CardTitle>
                    ICOs Platform
                </InfoElements.CardTitle>
                <InfoElements.CardParagraph>
                    CardParagraph1 CardParagraph1 CardParagraph1 CardParagraph1
                    CardParagraph1 CardParagraph1 CardParagraph1 CardParagraph1
                </InfoElements.CardParagraph>
            </InfoElements.OneActivityContainer>
        </InfoElements.ActivityContainer>
        <InfoElements.Divider className='svgCenter' />
        <InfoElements.SectionTitle darkText={true}> Our Solutions</InfoElements.SectionTitle>
        <InfoElements.ActivityContainer>
            <InfoElements.OneActivityContainer>
                <InfoElements.IconContainer>
                    <FaFileContract color='rgb(34 131 164)' size='8em' />
                </InfoElements.IconContainer>
                <InfoElements.CardTitle>
                    Equity Evaluation
                </InfoElements.CardTitle>
                <InfoElements.CardParagraph>
                    CardParagraph1 CardParagraph1 CardParagraph1 CardParagraph1
                    CardParagraph1 CardParagraph1 CardParagraph1 CardParagraph1
                </InfoElements.CardParagraph>
            </InfoElements.OneActivityContainer>
            <InfoElements.OneActivityContainer>
                <InfoElements.IconContainer>
                    <VscLightbulbAutofix color='rgb(34 131 164)' size='8em' />
                </InfoElements.IconContainer>
                <InfoElements.CardTitle>
                    Opportunity Reformation
                </InfoElements.CardTitle>
                <InfoElements.CardParagraph>
                    CardParagraph1 CardParagraph1 CardParagraph1 CardParagraph1
                    CardParagraph1 CardParagraph1 CardParagraph1 CardParagraph1
                </InfoElements.CardParagraph>
            </InfoElements.OneActivityContainer>
        </InfoElements.ActivityContainer>
        <InfoElements.Divider className='svgCenter' />
        <InfoElements.SectionTitle darkText={true}> Skaflic Uniqueness</InfoElements.SectionTitle>
        <InfoElements.ActivityContainer>
            <InfoElements.OneActivityContainer>
                <InfoElements.IconContainer>
                    <FaFileInvoiceDollar color='rgb(34 131 164)' size='8em' />
                </InfoElements.IconContainer>
                <InfoElements.CardTitle>
                    Online Financial
                </InfoElements.CardTitle>
                <InfoElements.CardParagraph>
                    CardParagraph1 CardParagraph1 CardParagraph1 CardParagraph1
                    CardParagraph1 CardParagraph1 CardParagraph1 CardParagraph1
                </InfoElements.CardParagraph>
            </InfoElements.OneActivityContainer>
            <InfoElements.OneActivityContainer>
                <InfoElements.IconContainer>
                    <RiExchangeDollarLine color='rgb(34 131 164)' size='8em' />
                </InfoElements.IconContainer>
                <InfoElements.CardTitle>
                    Automated Transaction
                </InfoElements.CardTitle>
                <InfoElements.CardParagraph>
                    CardParagraph1 CardParagraph1 CardParagraph1 CardParagraph1
                    CardParagraph1 CardParagraph1 CardParagraph1 CardParagraph1
                </InfoElements.CardParagraph>
            </InfoElements.OneActivityContainer>
            <InfoElements.OneActivityContainer>
                <InfoElements.IconContainer>
                    <BsCoin color='rgb(34 131 164)' size='8em' />
                </InfoElements.IconContainer>
                <InfoElements.CardTitle>
                    Stable coin
                </InfoElements.CardTitle>
                <InfoElements.CardParagraph>
                    CardParagraph1 CardParagraph1 CardParagraph1 CardParagraph1
                    CardParagraph1 CardParagraph1 CardParagraph1 CardParagraph1
                </InfoElements.CardParagraph>
            </InfoElements.OneActivityContainer>
            <InfoElements.OneActivityContainer>
                <InfoElements.IconContainer>
                    <FaWatchmanMonitoring color='rgb(34 131 164)' size='8em' />
                </InfoElements.IconContainer>
                <InfoElements.CardTitle>
                    Store Monitoring
                </InfoElements.CardTitle>
                <InfoElements.CardParagraph>
                    CardParagraph1 CardParagraph1 CardParagraph1 CardParagraph1
                    CardParagraph1 CardParagraph1 CardParagraph1 CardParagraph1
                </InfoElements.CardParagraph>
            </InfoElements.OneActivityContainer>
            <InfoElements.OneActivityContainer>
                <InfoElements.IconContainer>
                    <CgListTree color='rgb(34 131 164)' size='8em' />
                </InfoElements.IconContainer>
                <InfoElements.CardTitle>
                    ICO Release Structure
                </InfoElements.CardTitle>
                <InfoElements.CardParagraph>
                    CardParagraph1 CardParagraph1 CardParagraph1 CardParagraph1
                    CardParagraph1 CardParagraph1 CardParagraph1 CardParagraph1
                </InfoElements.CardParagraph>
            </InfoElements.OneActivityContainer>
        </InfoElements.ActivityContainer>
    </>

const TokenEconomics =
    <>
        <InfoElements.SectionTitle darkText={true}>Token Utility</InfoElements.SectionTitle>
        <InfoElements.ActivityContainer>
            <InfoElements.OneActivityContainer>
                <InfoElements.IconContainer>
                    <BsCurrencyExchange color='rgb(34 131 164)' size='8em' />
                </InfoElements.IconContainer>
                <InfoElements.CardTitle>
                    Flic Repurchase
                </InfoElements.CardTitle>
                <InfoElements.CardParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum
                </InfoElements.CardParagraph>
            </InfoElements.OneActivityContainer>
            <InfoElements.OneActivityContainer>
                <InfoElements.IconContainer>
                    <RiGovernmentLine color='rgb(34 131 164)' size='8em' />
                </InfoElements.IconContainer>
                <InfoElements.CardTitle>
                    Governance
                </InfoElements.CardTitle>
                <InfoElements.CardParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud
                </InfoElements.CardParagraph>
            </InfoElements.OneActivityContainer>
            <InfoElements.OneActivityContainer>
                <InfoElements.IconContainer>
                    <FaEarlybirds color='rgb(34 131 164)' size='8em' />
                </InfoElements.IconContainer>
                <InfoElements.CardTitle>
                    Early birds program
                </InfoElements.CardTitle>
                <InfoElements.CardParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud
                </InfoElements.CardParagraph>
            </InfoElements.OneActivityContainer>
            <InfoElements.OneActivityContainer>
                <InfoElements.IconContainer>
                    <GrStakeholder color='rgb(34 131 164)' size='8em' />
                </InfoElements.IconContainer>
                <InfoElements.CardTitle>
                    Staking
                </InfoElements.CardTitle>
                <InfoElements.CardParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat
                </InfoElements.CardParagraph>
            </InfoElements.OneActivityContainer>
            <InfoElements.OneActivityContainer>
                <InfoElements.IconContainer>
                    <FaRegWindowRestore color='rgb(34 131 164)' size='8em' />
                </InfoElements.IconContainer>
                <InfoElements.CardTitle>
                    Stores Icos
                </InfoElements.CardTitle>
                <InfoElements.CardParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate
                </InfoElements.CardParagraph>
            </InfoElements.OneActivityContainer>
            <InfoElements.OneActivityContainer>
                <InfoElements.IconContainer>
                    <FaFileInvoiceDollar color='rgb(34 131 164)' size='8em' />
                </InfoElements.IconContainer>
                <InfoElements.CardTitle>
                    Free Reduction
                </InfoElements.CardTitle>
                <InfoElements.CardParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate
                </InfoElements.CardParagraph>
            </InfoElements.OneActivityContainer>
        </InfoElements.ActivityContainer>
        <InfoElements.Divider className='svgCenter' />

    </>


export const section_1 = {
    id: 'what_we_fix',
    lightBg: true,
    cardData: data,
    lightText: false,
    lightTextDesc: false,
};
export const section_4 = {
    id: 'TokenEconomics',
    lightBg: true,
    cardData: TokenEconomics,
    lightText: false,
    lightTextDesc: false
};
export const section_5 = {
    id: 'ico',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    headline: 'Soon...',
    imgStart: false,
    img: require("../../images/soon.svg").default,
    alt: 'Papper',
    dark: false,
    primary: false,
    darkText: true,
};