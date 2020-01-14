import React from 'react'
import { Link } from 'react-router-dom'

//This button redirects to a new page
export function LinkedButton ({link, text}){
    return (
    <button className="font-bold py-2 px-3 mx-3 my-3 text-xl rounded-lg inline-block bg-teal-500 text-white"><Link to={link}>{text}</Link></button>
    )
}

//This button runs a given action(function) on click
export function ActionButton ({action, text}){
    return (
        <button className="font-bold py-2 my-3 px-3 text-xl rounded-lg bg-teal-500 text-white" onClick={action}>{text}</button>
    )
}