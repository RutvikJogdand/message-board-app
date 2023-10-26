import { GET_MESSAGES_FAILURE, GET_MESSAGES_REQUEST, GET_MESSAGES_SUCCESS } from "./actionTypes"

export const initState = {

    messages_feed: [],
    err_message: "",
    loading: 1
}

const messagesFeedReducer = (state = initState, action) => {

    switch(action.type)
    {
        case GET_MESSAGES_REQUEST:
            return{
                ...state,
                messages_feed: [],
                loading: 2
            }
        
        case GET_MESSAGES_SUCCESS:
            return{
                ...state,
                messages_feed: action.payload,
                loading: 3
            }    

        case GET_MESSAGES_FAILURE:
            return{
                ...state,
                err_message: action.payload,
                loading: 4
            }    

        default:
            return state    
    }
}

export default messagesFeedReducer