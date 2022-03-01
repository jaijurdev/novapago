import { Grid } from '@mui/material'
import CryptoGraphic from '../cryptoGraphic/cryptoGraphic'
import { FormatPrice } from '../utils/formatPrice'
import { chartContainer, Subtitle, Title } from './cryptoChartStyle'

function CryptoChart (props) {
  const { crypto } = props  
  return (
    <Grid container style={chartContainer}>
      <Grid container alignItems='center'>
        <Grid item xs={3}>
          <Grid container direction='column'>
            <Grid item>
              <Title>{crypto.name}</Title>
            </Grid>
            <Grid item>
              <Subtitle>{crypto.symbol}</Subtitle>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction='column'>
            <Grid item>
              <Title>
                <FormatPrice price={crypto.priceUsd} />
              </Title>
            </Grid>
            <Grid item>
              <Subtitle>Price (USD)</Subtitle>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction='column'>
            <Grid item>
              <Title>
                <FormatPrice price={crypto.marketCapUsd} />
              </Title>
            </Grid>
            <Grid item>
              <Subtitle>Market Cap (USD)</Subtitle>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction='column'>
            <Grid item>
              <Title>
                <FormatPrice price={crypto.supply} />
              </Title>
            </Grid>
            <Grid item>
              <Subtitle>Supply</Subtitle>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
          <CryptoGraphic crypto={crypto} />
      </Grid>
    </Grid>
  )
}

export default CryptoChart
