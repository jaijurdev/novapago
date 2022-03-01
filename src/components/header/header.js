import { Autocomplete, FormControl, Grid, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { listCoins } from '../../services/assets-services'
import { headerStyle } from './headerStyle'

function Header ({passCrypto}) {
  const [cryptoList, setList] = useState()
  const [loading, setLoading] = useState(false)
  function getData () {
    const list = listCoins()
    setList(list)
    setTimeout(() => {
      if (loading === false) setLoading(true)
      else setLoading(true)
    }, 100)
  }

  useEffect(() => {
    if (cryptoList === undefined) getData()
  }, [cryptoList])

  useEffect(() => {}, [loading])

  return (
    <Grid
      container
      style={headerStyle}
      justifyContent='space-around'
      alignItems='center'
    >
      <Grid item>Novapago Tech</Grid>
      <Grid item xs={6}>
        <FormControl style={{ width: '100%' }}>
          <Autocomplete
            options={cryptoList !== undefined ? cryptoList : [{ name: 'No data' }]}
            getOptionLabel={options => options.name}
            renderInput={params => (
              <TextField
                {...params}
                label='Search crypto'
                style={{ backgroundColor: 'white' }}
              />
            )}
            onChange={(e, data) => {
                if (data !== null) passCrypto(data.id) 
                else passCrypto('none')
            }}
          />
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default Header
