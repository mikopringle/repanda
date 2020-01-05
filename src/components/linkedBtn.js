import React from 'react'
import { Link } from 'react-router-dom'

export default function Button ({link, text}){
    return (
    <button className="font-bold py-2 px-4 rounded inline-block"><Link to={link}>{text}</Link></button>
    )
}