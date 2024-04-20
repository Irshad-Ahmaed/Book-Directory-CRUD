const postReducer = (state={data:null}, action) => {
    switch (action.type) {
        case 'POST_BOOK':
            return { ...state }

        case 'FETCH_ALL_BOOKS':
            return { ...state, data: action.payload }
            
        default:
            return state;
    }
}

export default postReducer;