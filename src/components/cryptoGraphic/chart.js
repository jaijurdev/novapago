import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { chartStyle } from './chartStyles'
import { CircularProgress } from '@mui/material'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement)

export function ChartTest (props) {
  const [loading, setLoading] = useState(false)

  const { data, period } = props

  let prices = []
  let dates = []

  data.map((d, i) => {
    prices.push(d.priceUsd)
    const formattedDate = d.date.split('T')
    if (period === 'hour' || period === 'day')
      dates.push(formattedDate[1].slice(0, 5))
    else dates.push(formattedDate[0])
    return ''
  })

  switch (period) {
    case 'hour':
      dates = dates.slice(0, 59)
      prices = prices.slice(0, 59)
      break
    case 'day':
      dates = dates.slice(0, 23)
      prices = prices.slice(0, 23)
      break
    case 'month':
      dates = dates.slice(0, 29)
      prices = prices.slice(0, 29)
      break
    case 'year':
      dates = dates.slice(0, 365)
      prices = prices.slice(0, 365)
      break
    default:
      break
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 200)
  }, [data])

  const options = {
    maintainAspectRatio: false,
    responsive: true
  }

  const labels = dates

  const theData = {
    labels,
    datasets: [
      {
        label: 'Prices(USD)',
        data: prices,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  }
  return (
    <>
      {loading === false ? (
        <Line
          options={options}
          data={theData}
          width={1000}
          height={600}
          style={chartStyle}
        />
      ) : (
        <CircularProgress />
      )}
    </>
  )
}
