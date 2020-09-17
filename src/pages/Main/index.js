import React, { useState, useEffect, useCallback, Fragment} from 'react'
import Api from './../../api'
import {ContainerStyled, AppBarStyled, ContainerSelectStyled, OptionCountryStyled} from './style'
import Board from './Board'
import Grid from './../../components/Grid'
import Select from './../../components/Select'
import MenuItem from './../../components/MenuItem'
import COUNTRIES from './../../commons/constants/countries'

function Main (props){
    
    const [data, setData] = useState({})
    const [country] = useState('brazil')
    const [dateTime] = useState(new Date());

    const getDataCovid = useCallback( async (country)=>{
      const result = await Api.getCountry(country)
      setData(result.data)
    }, [])

    useEffect(() => {
        getDataCovid(country)

     },[getDataCovid, country]);


    const renderOptionCountry = COUNTRIES.map((item, index) =>
  
      <MenuItem key={index} value={item.value}>
        <OptionCountryStyled>
          <span>{item.label}</span>
          <img src={item.flag} alt={item.label}/>
        </OptionCountryStyled>
      </MenuItem>
    );

    const handleChange = ({target})=>{
        const countrySelected = target.value
        getDataCovid(countrySelected)
    }

       return(
        <Fragment>  
            <AppBarStyled position="static">
             
            <Grid container  spacing={3}>
              <Grid item xs={12} md={10} >
                <p>COVID19 - Painel Coronavírus  </p>
              </Grid>
                <Grid item xs={12} md={2} >
                <p align="right"> Atualizado em {dateTime.toLocaleDateString()}</p>
              </Grid>
           </Grid>
         
              </AppBarStyled>
              
            <ContainerStyled>
                <ContainerSelectStyled>
                <span>Selecione um país: </span>
                  <Select onChange={handleChange} defaultValue={country}>
                   {renderOptionCountry}
                  </Select>
                  
            </ContainerSelectStyled>

              <Board data={data}/>
            </ContainerStyled> 

       </Fragment>
        
      
         )
    
}
    

export default Main