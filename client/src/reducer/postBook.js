const postReducer = (state={}, action) => {
    switch (action.type) {
        case 'POST_BOOK':
            return state
    
        default:
            return state;
    }
}

export default postReducer;