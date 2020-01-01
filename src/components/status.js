import React from 'react'

export function Status(props) {
    return props.companyName ? <p>You're logged in as {props.companyName}</p> : <p>Not logged in</p>
}