import React from 'react'

export function Status(props) {
    const logged = <div>
        <p>You're logged in as {props.email}</p>
        <button onClick={props.logout}>log out</button>
    </div>

    const not = <p>Not logged in</p>
    return props.email ? logged : not 
}