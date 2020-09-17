import styled from 'styled-components'
import {Typography, CardContent, AppBar} from '../../components'



export const ContainerStyled = styled.div`  
    max-width:1024px;
    padding: 20px;
   margin: 0 auto;
`

export const ContainerSelectStyled = styled.div`  
    margin-bottom: 20px;
   
    span{
       color:#ffffff;
       margin-right: 10px;
   }
`

export const CardPanelContentStyled = styled(CardContent)`
    display: flex;
    justify-content: space-between;
    padding:25px;
`
export const CardContentStyled = styled(CardContent)`
    width: 400px;    
    border-left:8px solid ${({color})=> color ||'5d78ff'};
`
export const ValueStyled = styled(Typography)`
    font-weight: 400;
    font-size: 2rem;
`
export const LabelStyled = styled(Typography)`
    font-weight: 500;
    font-size:1.2rem;
`

export const AppBarStyled = styled(AppBar)`
    background-color: #083a37;
    padding-left:15px;
    padding-right:15px;
    display:flex;
    justify-content: space-around;

`
export const ItemStyled = styled.div`
    display: flex;
    justify-content: space-between;
    min-with:150px;
`

export const OptionCountryStyled = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    min-width: 180px;
    
`


