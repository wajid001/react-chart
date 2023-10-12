import React from 'react'
import { Grid } from '@mui/material'
import LineChart from './components/LineChart'
import './App.css'

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={8}>
          <LineChart />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
