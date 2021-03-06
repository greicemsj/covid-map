import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases, active } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color=" #FF0000" />
      </Grid>
      
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#FFD700" />
      </Grid>
      
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Total de casos" color="#7B68EE" />
      </Grid>
      
      <Grid item xs={12} md={3}>
        <Card value={getValue(deaths)} label="Total de mortos" color="#000000" />
      </Grid>
      
      <Grid item xs={12} md={3}>
        <Card value={getValue(active)} label="Casos ativos" color="#FF8C00" />
      </Grid>
      
      <Grid item xs={12} md={4}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#008000" />
      </Grid>
    </Grid>
  )
}

export default memo(Board)