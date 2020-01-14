import React from 'react'
import { Link } from 'react-router-dom'

export function LinkedButton ({link, text}){
    return (
    <button className="font-bold  py-2 px-3 text-xl rounded-lg inline-block bg-teal-500 text-white"><Link to={link}>{text}</Link></button>
    )
}

export function ActionButton ({action, text}){
    return (
        <button className="font-bold  py-2 px-3 text-xl rounded-lg bg-teal-500 text-white flex items-center justify-center" onClick={action}>{text}</button>
    )
}