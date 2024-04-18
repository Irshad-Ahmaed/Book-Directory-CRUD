const postReducer = (state={data:null}, action) => {
    switch (action.type) {
        case 'POST_BOOK':
            console.log('data')
            localStorage.setItem('addBook', JSON.stringify({...action?.data}))
            return { ...state }
    
        default:
            return state;
    }
}

export default postReducer;