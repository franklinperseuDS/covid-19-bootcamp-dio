import styled from "styled-components";
import { Typography, CardContent } from "../../../../node_modules/@material-ui/core/index";

export const LabelStyled = styled(Typography)`
    font-weight: 500;
    font-size: 1.5rem;
    `

export const ValueStyled = styled(Typography)`
    font-weight: 400;
    font-size: 2.5rem;
`   
export const CardContentStyled = styled(CardContent)`
    border-left: 8px solid ${({color}) => color || '#5d78ff'};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 40vh;
    min-width: 500px;
    padding: 25px;
`

export const ItemStyled = styled.div`
    display:flex;
    justify-content: space-between;
    min-width: 200px;
`

export const CardPanelContentStyled = styled(CardContent)`
border-left: 8px solid ${({color}) => color || '#5d78ff'};
display: flex;
justify-content: space-between;
flex-wrap: wrap;
height: 40vh;
min-width: 500px;
padding: 25px;
`
