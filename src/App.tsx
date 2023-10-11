import React from 'react'
import './App.css'
import { Grid } from '@mui/material'
import LineChart from './components/LineChart'
import { data, options } from './constants/lineChart.constants'
import OptionTabs from './components/OptionTabs'

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={8}>
          <LineChart />
          <OptionTabs />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
