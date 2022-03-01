import React, { useEffect, useState } from 'react'
import { Grid, Button, CircularProgress } from '@mui/material'
import { cryptoHistory } from '../../services/assets-services'
import { ChartTest } from './chart'

function CryptoGraphic (props) {
  const { crypto } = props
  const [graphicData, setGraphicData] = useState()
  const [loading, setLoading] = useState(true)
  const [interval, setInt] = useState('m1')
  const [period, setPeriod] = useState('hour')

  function getHistoryData () {
    const data = cryptoHistory(crypto.id, interval)
    setGraphicData(data)
    setTimeout(() => {
      setLoading(false)
    }, 200)
  }
  useEffect(() => {
    getHistoryData()
  }, [interval])

  useEffect(() => {}, [graphicData])

  useEffect(() => {}, [loading])

  return (
    <Grid container direction='column' justifyContent='center'>
      <Grid item xs={12} justifyContent='center'>
        {graphicData !== undefined ? (
          <ChartTest data={graphicData} period={period} />
        ) : (
          <CircularProgress />
        )}
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent='center'>
          <Button
            variant={period === 'hour' ? 'contained' : ''}
            onClick={() => {
              setInt('m1')
              setPeriod('hour')
            }}
          >
            Hour
          </Button>
          <Button
            variant={period === 'day' ? 'contained' : ''}
            onClick={() => {
              setInt('h1')
              setPeriod('day')
            }}
          >
            Day
          </Button>
          <Button
            variant={period === 'month' ? 'contained' : ''}
            onClick={() => {
              setInt('d1')
              setPeriod('month')
            }}
          >
            Month
          </Button>

          <Button
            variant={period === 'year' ? 'contained' : ''}
            onClick={() => {
              setInt('d1')
              setPeriod('year')
            }}
          >
            Year
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CryptoGraphic
