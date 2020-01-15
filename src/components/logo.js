import React from 'react'

//This is the defaul heading
export default function logoHeading() {
    return <h1 className="bg-teal-500 py-2 text-white text-2xl font-bold font-sans" >SurveyPanda</h1>
}

//left aligned version
export function LeftHeading() {
    return <h1 className="text-left px-10 bg-teal-500 py-2 text-white text-2xl font-bold font-sans" >SurveyPanda</h1>
}