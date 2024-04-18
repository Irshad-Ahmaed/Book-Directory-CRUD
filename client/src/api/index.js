import axios from 'axios'

const API = axios.create({baseURL: "http://localhost:5005"})

export const postQuestion = (bookData) => API.post('/postBook', bookData)