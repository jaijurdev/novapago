import CryptoList from '../cryptoList/cryptoList'
import { Grid } from '@mui/material'
import Header from '../header/header'
import { useEffect, useState } from 'react'

function Home () {
  const [cryptoFilter, setFilter] = useState('none')
  
  function passCrypto(id) {
    setFilter(id)
  }

  useEffect(() => {
  }, [cryptoFilter])
  
  return (
    <Grid container>
      <Header passCrypto={passCrypto} />
      <CryptoList cryptoFilter={cryptoFilter} />
    </Grid>
  )
}

export default Home
