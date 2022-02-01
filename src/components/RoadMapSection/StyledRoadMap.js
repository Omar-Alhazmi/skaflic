import styled from 'styled-components'

export const DisplayWrapper = styled.div`
    height: fit-content;
    min-height:800px ;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background:#f9f9f9;
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
`
export const RoadMapImg = styled.img`
width: 100vw;
@media (max-width: 575.98px){
height: 33vh;
}
`