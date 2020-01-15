import React from 'react'

export function BigLeftHeading({text}){
    return <h1 className="text-left text-teal-500 font-bold text-xl mb-8">{text}</h1>
}

//renders a rounded circle with the number displayed in the centre, coloured based on the number, only accepts 1-5
export function NumberDisplay({number}){
    //FIX ME: colours look horrendous!!
    const colour = number > 4 ? 'bg-teal-800': number > 2 ? 'bg-teal-600': 'bg-teal-400'
    return <div className = {`inline-flex rounded-full h-12 w-12 items-center justify-center text-white ${colour}`}>{number}</div>
}