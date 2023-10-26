import React, { useState } from "react";
import { post_message } from "../../redux/post-message-redux/actions";
import { useDispatch, useSelector } from "react-redux";

function PostMessage(){

    const [message, setMessage] = useState("");

    const dispatch = useDispatch()

    const loading = useSelector(state => state.postMessageRoot.loading)

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const submit = () => {
        dispatch(post_message(message))
    }
    return(
        <>
            <div>
                <input type="text" name="message" value={message} onChange={handleChange} />
                <button onClick={submit}>Post</button>
                <button>Delete All!</button>
                {
                    loading === 1?
                    <span>Posting message..</span>
                    :
                    loading === 2?
                    <span> Message Posted Successfully</span>
                    :
                    loading === 3 &&
                    <span>Error posting message</span>
                }
            </div>
        </>
    )
}

export default PostMessage