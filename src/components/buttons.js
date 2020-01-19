import React from 'react'
import { Link } from 'react-router-dom'

//This button redirects to a new page
export function LinkedButton ({link, text}){
    return (
        <Link display="block" to={link}><button className="mx-4 my-4 bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-white font-semibold py-2 px-4 border border-grey-400 rounded shadow">{text}</button></Link>
    )
}

//This button runs a given action(function) on click
export function ActionButton ({action, text}){
    return (
        <button className="mx-4 my-4 bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-white font-semibold py-2 px-4 border border-grey-400 rounded shadow"
        onClick={action}>{text}</button>
    )
}

//Links to pages on the navbar
export function NavButton ({link, text}) {
    return (
        <Link display="inline-block" to={link}><button className="inline-block text-teal-200 hover:text-white mr-4">{text}</button></Link>
    )
}

//produce a grouped set of buttons that feed different params into an action
export function GroupedActionButtons ({actions, texts}) {
    return (
        <div class="flex justify-center py-5 px-2">
            {actions.map((action, i) => {
                return <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mx-2 rounded-l" onClick={action}>{texts[i]}</button>
            })}
        </div>
    )
}