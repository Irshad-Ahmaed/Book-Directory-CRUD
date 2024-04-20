import axios from 'axios'

const API = axios.create({baseURL: "http://localhost:5005"})

export const postBook = (bookData) => API.post('/book/postBook', bookData)
export const getAllBooks = () => API.get('/book/getBook');
export const deleteBook = (id) => API.delete(`/book/delete/${id}`);