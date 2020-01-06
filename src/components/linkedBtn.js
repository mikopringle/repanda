import React from 'react'
import { Link } from 'react-router-dom'

export default function Button ({link, text}){
    return (
    <button className="font-bold mt-8 py-2 px-3 text-xl rounded-lg inline-block bg-teal-500 text-white"><Link to={link}>{text}</Link></button>
    )
}