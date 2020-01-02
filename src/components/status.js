import React from 'react'

export function Status(props) {
    return props.email ? <p>You're logged in as {props.email}</p> : <p>Not logged in</p>
}