import React from 'react'
import { SendDıv } from '../../styles/Send'

function Send(props) {
    return (
        <>
            <SendDıv onSubmit={props.action}>
                <input type="text" name="message" value={props.message} onChange={(e) => props.text(e)} placeholder="Type your message" />
                <button type="submit">Send</button>
            </SendDıv> 
        </>
    )
}

export default Send
