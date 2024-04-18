import * as api from '../api'

export const postBook = (bookData, navigate) => async (dispatch) => {
    try {
        // console.log('Type')
        const {data} = await api.postBook(bookData)
        dispatch({type:'POST_BOOK', payload: data})
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}