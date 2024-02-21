import axios from 'axios'

export const api = axios.create({
  baseURL: "https://api-food-explorer-njhs.onrender.com",
  withCredentials: true,
})