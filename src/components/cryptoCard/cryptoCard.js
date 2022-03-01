import { Grid, Button } from '@mui/material'
import { useState } from 'react'
import CryptoChart from '../cryptoChart/cryptoChart'
import FormatPercent from '../utils/formatPercent'
import { FormatPrice } from '../utils/formatPrice'
import { SmallCardRow, CardRow, cryptoCardStyle, buttonRow } from './cryptoCardStyle'

function CryptoCard (props) {
  const { data } = props
  const [char, setChar] = useState(false)

  function handleOpenChar () {
    if (char === false) setChar(true)
    else setChar(false)
  }

  return (
    <Grid>
      <Button onClick={() => handleOpenChar()} style={buttonRow}>
        <Grid container style={cryptoCardStyle}>
          <Grid item>
            <Grid container></Grid>
          </Grid>
          <Grid item style={SmallCardRow} xs={1}>
            {data.rank}
          </Grid>
          <Grid item style={CardRow} xs={2}>
            <Grid container direction='column' justifyContent='flex-start'>
              <Grid item>{data.name}</Grid>
              <Grid item>
                <small>{data.symbol}</small>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={CardRow} xs={1}>
            <FormatPrice price={data.priceUsd} />
          </Grid>
          <Grid item style={CardRow} xs={1}>
            <FormatPrice price={data.marketCapUsd} />
          </Grid>
          <Grid item style={CardRow} xs={1}>
            <FormatPrice price={data.vwap24Hr} />
          </Grid>
          <Grid item style={CardRow} xs={1}>
            <FormatPrice price={data.supply} />
          </Grid>
          <Grid item style={CardRow} xs={1}>
            <FormatPrice price={data.volumeUsd24Hr} />
          </Grid>
          <Grid item style={CardRow} xs={1}>
            <FormatPercent price={data.changePercent24Hr} />
          </Grid>
        </Grid>
      </Button>
      {char === true ? (
        <CryptoChart crypto={data} />
      ) : (
        ''
      )}
    </Grid>
  )
}

export default CryptoCard
