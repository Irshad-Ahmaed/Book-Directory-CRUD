const postReducer = (state={data:null}, action) => {
    switch (action.type) {
        case 'POST_BOOK':
            localStorage.setItem('Profile', JSON.stringify(...action?.data))
            return state
    
        default:
            return state;
    }
}

export default postReducer;