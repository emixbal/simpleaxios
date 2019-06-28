const initialValue = {
    data: [],
    user:{},
    isLoading: true,
    isError: false,
    isFinish: false,
}
  
export default (state = initialValue, action) => {
    switch (action.type) {
        //users list
        case 'GET_USERS_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_USERS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFinish: true,
                data: action.payload.data
            };
        case 'GET_USERS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                data: 'Error Network'
            };

        //user deatail
        case 'GET_USER_PENDING':
            return {
                ...state,
                isLoading: true
            };
        case 'GET_USER_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFinish: true,
                user: action.payload.data
            };
        default:
            return state;
    }
}
