import * as StyledTable from './StyledTabled.js'

const des =
    <>
        Despite the rapid development in the electronic commerce world,
        there are still two problems that have not been addressed in classic stores,
        which moved to electronic stores since the process was only a transition without development
        on the basic principle (the store), and these problems can be shortened in:
        <br />
        <br />
        <ul>
            <li>Financing by selling a share of the equity to those who have achieved success</li>
            <li>Ensuring survival, continuity, and capital preservation</li>
        </ul>
        <br />
        We offer a solution, The equity store.
        With the store, we are capable of bringing control back in the hands of the investor, small time or otherwise, and help them get the resources need to monitor and ensure their survivability.
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
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    headline: 'What we fix?',
    description: des,
    imgStart: false,
    img: require('../../images/whatWeFix .svg').default,
    alt: 'Car',
    darkText: true,
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