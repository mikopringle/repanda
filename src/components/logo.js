import React from 'react'
import { Link } from 'react-router-dom'

//This is the defaul heading
export default function logoHeading() {
    return <Link to="/"><h1 className="bg-teal-500 py-2 text-white text-2xl font-bold font-sans" >SurveyPanda</h1></Link>
}

//left aligned version
export function LeftHeading() {
    return <Link to="/"><h1 className="text-left px-10 bg-teal-500 py-2 text-white text-2xl font-bold font-sans" >SurveyPanda</h1></Link>
}