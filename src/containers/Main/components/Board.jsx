import React, {memo} from 'react';
import { PropTypes } from '../../../../node_modules/@material-ui/core/index';
import {Grid, Skeleton}  from '../../../components/index'
import Card from './Card'

function  Board({ data}){
    const { cases, todayDeaths, deaths, recovered, todayCases} = data;
    const getValue = (value) => value ? value : <Skeleton variant="text"  width={182}></Skeleton>
    return(
        <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
                <Card value={getValue(cases) } label="Total de Casos" color="#67cB"/>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card value={getValue(todayDeaths)} label="Óbitos Hoje" color="#F78829"/>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card value={getValue(todayCases)} label="Casos hoje" color="#000"/>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card value={getValue(deaths)} label="Total de mortos" color="#E95078"/>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card value={getValue(recovered)} label="Total de recuperados" color="#5d78"/>
            </Grid>

        </Grid>
    )
}

export default memo(Board);