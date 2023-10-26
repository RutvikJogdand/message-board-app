import axios from "axios";
import { POST_MESSAGE_REQUEST, POST_MESSAGE_SUCCESS, POST_MESSAGE_FAILURE } from "./actionTypes";

export const post_message_req = () => ({
    type: POST_MESSAGE_REQUEST
})

export const post_message_success = (payload) => ({
    type: POST_MESSAGE_SUCCESS,
    payload
})

export const post_message_failure = (payload) => ({
    type: POST_MESSAGE_FAILURE,
    payload
})

export const post_message = (payload) => (dispatch) => {
    dispatch(post_message_req())
    axios.post(process.env.REACT_APP_POST_MESSAGES,{
        "text": payload
    },
    {
        headers: {
            Authorization: process.env.REACT_APP_KEY,
        }
    })
    .then(res => {
        dispatch(post_message_success(res.data))
    })
    .catch(err => {
        dispatch(post_message_failure(err))
    })
}