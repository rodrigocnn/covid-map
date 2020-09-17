import React from 'react'
import {Grid, Skeleton} from './../../components'
import Card from './Card'


function Board ({data}){

const {cases, todayDeaths, recovered, deaths, todayCases, critical} = data


function getValue (value){
    const item = (value)?value : <Skeleton variant="text" width={180} height={40} />
    if(typeof(item) === 'number'){
        return item.toLocaleString()
    }
}

    return(
        <Grid container  spacing={4}>
            <Grid item xs={12} md={4} >
                <Card value={getValue(cases)} label="Total de Casos" color="#5d78ff"/>
            </Grid>

            <Grid item xs={12} md={4} >
                <Card  value={getValue(todayCases)}  label="Casos Hoje" color="#f7b829"/>
            </Grid>

             <Grid item xs={12} md={4} >
                 <Card  value={getValue(deaths)}  label="Total de Mortes" color="#000000"/>
            </Grid>

            <Grid item xs={12} md={4} >
                <Card  value={getValue(todayDeaths)}  label="Óbitos hoje" color="#000000"/>
            </Grid>

            <Grid item xs={12} md={4} >
                <Card  value={getValue(critical)}  label="Criticos" color="#e95078"/>
            </Grid>

            <Grid item xs={12} md={4} >
                <Card  value={getValue(recovered)}  label=" Recuperados" color="#4d9a66"/>
            </Grid>
               
           
        </Grid>
    )

}

export default Board