import { http } from '../config/axios.config'

export const listCoins = () => {
  const list = []
  http.get('/assets').then(r => {
    r.data.data.map(c => list.push(c))
    return list
  })
  return list
}

export const cryptoHistory = (id, interval) => {
  let graphicData = []
  http
    .get(`/assets/${id}/history?interval=${interval}`)
    .then(r => {
      r.data.data.map(d => graphicData.push(d))
      return graphicData
    })
  return graphicData
}
