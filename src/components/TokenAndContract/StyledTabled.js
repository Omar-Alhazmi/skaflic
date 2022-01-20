import styled from 'styled-components'

export const TableWrapper  = styled.div`
    margin: 10px;
    display: grid;
    align-content: center;
    height: 100vh;
        &:before{
        display: block;
        text-align: center;
        font-size: 11px;
        color: white;
        padding: 0 0 10px;
}
`
export const TableContainer = styled.table`
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;
    box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
    display: block;
`

export const TableHedContainer = styled.thead`
    -webkit-box-shadow:-3px 6px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 0px 0 rgb(0 0 0 / 0%);
        display: block;
        float: left;
        width: 50%;
`
export const TableBodyContainer = styled.tbody`
    display: block;
    width: 50%;
    position: relative;
    overflow-x: auto;
`
export const TableTh = styled.th`
    text-align: center;
    padding: 23px;
    color: #ffff;
    background: #44444496;
    font-size: 1rem;
    &:nth-child(odd) {
    color: #ffff;
    background: #4ec7cc82;
}
    display: block;`
export const TableTd = styled.td`
        text-align: center;
        padding: 23px;
        border-left: 1px solid #f8f8f8;
        font-size: 12px;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        /* width: 100%; */
        font-size: 13px;
        text-overflow: ellipsis;
        display: block;
        &:nth-child(odd) {
            background: #F8F8F8;
            border-left: 1px solid #E6E4E4;
        &:nth-child(even) {
            border-left: 1px solid #E6E4E4;
    }
    }
`

export const TableTr = styled.tr`
&:nth-child(even) {
    background: #F8F8F8;
}
@media (max-width: 767px) {
&:nth-child(even) {
        background: transparent;
    }
    }
`
export const IconContainer = styled.div`
display:flex;
 justify-content: space-between;
`
export const DisplayWrapper = styled.div`
height: fit-content;
min-height:800px ;
display:flex;
flex-direction:column;
justify-content:center;
/* align-items:center; */
background:#ffffff;
z-index:1;
position: relative;
@media screen and (max-width:768px){
    min-height: 1100px;
    height: fit-content;
}
@media screen and (max-width:480px){
    min-height: 1300px;
    height: fit-content;

}
`;