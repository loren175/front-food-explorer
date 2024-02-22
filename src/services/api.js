import axios from 'axios'

export const api = axios.create({
  baseURL: "http://localhost:3333",
  withCredentials: true,
})

// Para uso local mude para baseURL: "http://localhost:3333"
// https://api-food-explorer-njhs.onrender.com