import React, { Component } from 'react';
import * as StyledTable from './StyledTabled.js'
export default class index extends Component {
  render() {
    return <StyledTable.DisplayWrapper id={'token_and_contract'}>
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
    </StyledTable.DisplayWrapper>;
  }
}
