import { GET_MESSAGES_REQUEST, GET_MESSAGES_SUCCESS, GET_MESSAGES_FAILURE } from "./actionTypes"
import axios from "axios"

export const get_messages_req = () => ({
    type: GET_MESSAGES_REQUEST
})

export const get_messages_success = (payload) => ({
    type: GET_MESSAGES_SUCCESS,
    payload
})

export const get_messages_failure = (payload) => ({
    type: GET_MESSAGES_FAILURE,
    payload
})

export const get_messages_feed = () => (dispatch) => {
    dispatch(get_messages_req())
    axios.get(process.env.REACT_APP_GET_MESSAGES,{
        headers: {
          Authorization: process.env.REACT_APP_KEY,
        },
      })
    .then(res => {
        // console.log('redux res', res)
        dispatch(get_messages_success(res.data))
    })
    .catch(err => {
        // console.log('redux err', err)
        dispatch(get_messages_failure(err.message))
    })

}