import { POST_MESSAGE_REQUEST, POST_MESSAGE_SUCCESS, POST_MESSAGE_FAILURE } from "./actionTypes";

export const initState = {
    posted_message: {},
    err: false,
    loading: 0
}

const postMessageReducer = (state = initState, action) => {

    switch(action.type)
    {
        case POST_MESSAGE_REQUEST:
            return{
                ...state,
                posted_message: {},
                err: false,
                loading: 1
            }
        
        case POST_MESSAGE_SUCCESS:
            return{
                ...state,
                posted_message: action.payload,
                err: false,
                loading: 2
            }
        
        case POST_MESSAGE_FAILURE:
            return{
                ...state,
                postMessage: {},
                err: true,
                loading: 3
            }

        default:
            return state
    }
}

export default postMessageReducer