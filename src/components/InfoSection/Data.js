import * as StyledTable from './StyledTabled.js'
import * as InfoElements from "./InfoElements";
import { BsCurrencyExchange,BsCoin} from "react-icons/bs";
import { GiShoppingCart} from "react-icons/gi";
import { RiExchangeFundsLine,RiExchangeDollarLine} from "react-icons/ri";
import { FaFileContract,FaFileInvoiceDollar,FaWatchmanMonitoring} from "react-icons/fa";
import { VscLightbulbAutofix} from "react-icons/vsc";
import { CgListTree} from "react-icons/cg";


 const data =
 <>
 <InfoElements.ActivityContainer> 
 <InfoElements.OneActivityContainer>
     <InfoElements.IconContainer>
    <BsCurrencyExchange  color='rgb(34 131 164)' size='8em'/>
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
     <GiShoppingCart  color='rgb(34 131 164)' size='8em'/>
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
     <RiExchangeFundsLine  color='rgb(34 131 164)' size='8em'/>
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
 <InfoElements.Divider className='svgCenter'/>
 <InfoElements.SectionTitle darkText={true}> Our Solutions</InfoElements.SectionTitle>
 <InfoElements.ActivityContainer>
 <InfoElements.OneActivityContainer>
     <InfoElements.IconContainer>
     <FaFileContract  color='rgb(34 131 164)' size='8em'/>
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
     <VscLightbulbAutofix  color='rgb(34 131 164)' size='8em'/>
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
 <InfoElements.Divider className='svgCenter'/>
 <InfoElements.SectionTitle darkText={true}> Skaflic Uniqueness</InfoElements.SectionTitle>
 <InfoElements.ActivityContainer>
 <InfoElements.OneActivityContainer>
     <InfoElements.IconContainer>
     <FaFileInvoiceDollar  color='rgb(34 131 164)' size='8em'/>
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
     <RiExchangeDollarLine  color='rgb(34 131 164)' size='8em'/>
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
     <BsCoin  color='rgb(34 131 164)' size='8em'/>
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
     <FaWatchmanMonitoring  color='rgb(34 131 164)' size='8em'/>
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
     <CgListTree  color='rgb(34 131 164)' size='8em'/>
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

const tokenAndContract =
<>
        <StyledTable.TableWrapper >
            <StyledTable.TableContainer>
                <StyledTable.TableHedContainer>
                    <StyledTable.TableTh className="tableHeader">Token Name</StyledTable.TableTh>
                    <StyledTable.TableTh className="tableHeader">Ticker</StyledTable.TableTh>
                    <StyledTable.TableTh className="tableHeader">Supply</StyledTable.TableTh>
                    <StyledTable.TableTh className="tableHeader">ICO Price</StyledTable.TableTh>
                </StyledTable.TableHedContainer>
                <StyledTable.TableBodyContainer>
                    <StyledTable.TableTd>
                        SKAFLIC
                    </StyledTable.TableTd>
                    <StyledTable.TableTd>
                        FLIC
                    </StyledTable.TableTd>
                    <StyledTable.TableTd>
                        10,000,000,000 FLIC
                    </StyledTable.TableTd>
                    <StyledTable.TableTd>
                        0.001
                    </StyledTable.TableTd>
                </StyledTable.TableBodyContainer>
            </StyledTable.TableContainer>
        </StyledTable.TableWrapper>
    </>


export const section_1 = {
    id: 'what_we_fix',
    lightBg:true, 
    cardData: data,
    lightText:false,
    lightTextDesc:false,
};
export const section_4 = {
    id: 'token_and_contract',
    lightBg:true,  
    lightText:false,
    lightTextDesc:false,
    // topLine:'Why is Inventory so Important?',
    // headline:'',
    description: tokenAndContract,
    imgStart:true,
    img: require("../../images/contract.svg").default,
    alt:'contract',
    dark:false,
    primary:false,
    darkText:true,
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