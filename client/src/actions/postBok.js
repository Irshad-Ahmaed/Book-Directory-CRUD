import * as api from '../api'

export const postBook = (bookData, navigate) => async (dispatch) => {
    try {
        const {data} = await api.postBook(bookData)
        dispatch({type:'POST_BOOK', payload: data})
        dispatch(fetchAllBooks())
        navigate('/displayBook')
        
    } catch (error) {
        console.log(error)
    }
}

export const fetchAllBooks = () => async (dispatch) => {
    try {
        const { data } = await api.getAllBooks();
        dispatch({type: 'FETCH_ALL_BOOKS', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteBook = (id, navigate) => async (dispatch) => {
    try {
        await api.deleteBook(id)
        dispatch(fetchAllBooks())
        navigate('/displayBook')

    } catch (error) {
        console.log(error)
    }
}

export const updateBook = (id, navValue, navigate) => async (dispatch) => {
    try {
        
        await api.updateBook(id, navValue)
        dispatch(fetchAllBooks())
        navigate('/displayBook')

    } catch (error) {
        console.log(error)
    }
}