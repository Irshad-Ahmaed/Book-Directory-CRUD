import { Navigate } from 'react-router-dom'
import * as api from '../api'

export const postBook = (bookData, Navigate) => async (dispatch) => {
    try {
        const { data } = await api.postBook(bookData)
        dispatch({type: 'POST_BOOK', data})
    } catch (error) {
        
    }
}