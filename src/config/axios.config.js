import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://api.coincap.io/v2/',
})