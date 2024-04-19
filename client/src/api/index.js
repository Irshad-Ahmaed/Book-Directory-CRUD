import axios from 'axios'

const API = axios.create({baseURL: "http://localhost:5005"})

export const postBook = (bookData) => API.post('/postBook', bookData)
export const getAllBooks = () => API.get('/getBook');