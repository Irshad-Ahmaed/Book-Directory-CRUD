const postReducer = (state={data:null}, action) => {
    switch (action.type) {
        case 'POST_BOOK':
            console.log('data')
            localStorage.setItem('addBook', JSON.stringify({...action?.data}))
            return { ...state }

        case 'FETCH_ALL_BOOKS':
            return { ...state, data: action.payload}
            
        default:
            return state;
    }
}

export default postReducer;