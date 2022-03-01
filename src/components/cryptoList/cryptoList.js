import { useEffect, useState } from 'react'
import { CircularProgress, Grid } from '@mui/material'
import CryptoCard from '../cryptoCard/cryptoCard'
import {
  CardRow,
  CardRowLeft,
  cryptoCardHeader,
  SmallCardRow
} from '../cryptoCard/cryptoCardStyle'
import { cryptoListStyle } from './cryptoListStyle'
import { listCoins } from '../../services/assets-services'

function CryptoList ({cryptoFilter}) {
  let [theData, setData] = useState()
  const [loading, setLoading] = useState(true)

  function getData () {
    const list = listCoins()
    setData(list)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  useEffect(() => {
    if (theData === undefined) getData()
  }, [theData])

  useEffect(() => {}, [loading])

  if (cryptoFilter !== 'none') {
    theData = theData?.filter(c => c.id === cryptoFilter)
  }

  return (
    <Grid container direction='column' style={cryptoListStyle}>
      <Grid item>
        <Grid container style={cryptoCardHeader}>
          <Grid item style={SmallCardRow} xs={1}>
            Rank
          </Grid>
          <Grid item xs={2} style={CardRowLeft}>
            Name
          </Grid>
          <Grid item xs={1} style={CardRow}>
            Price
          </Grid>
          <Grid item xs={1} style={CardRow}>
            Market Cap
          </Grid>
          <Grid item xs={1} style={CardRow}>
            VWAP(24Hr)
          </Grid>
          <Grid item xs={1} style={CardRow}>
            Supply
          </Grid>
          <Grid item xs={1} style={CardRow}>
            Volume(24Hr)
          </Grid>
          <Grid item xs={1} style={CardRow}>
            Change(24Hr)
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {theData !== undefined ? (
          theData.map((c, i) => {
            if (i <= 9) {
              return <CryptoCard data={c} key={i} />
            }
            return ''
          })
        ) : (
          <Grid container justifyContent='center' style={{ margin: '25px 0' }}>
            <CircularProgress />
          </Grid>
        )}
      </Grid>
    </Grid>
  )
}

export default CryptoList
