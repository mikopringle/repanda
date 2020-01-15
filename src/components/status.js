import React from 'react'
import { LeftHeading } from './logo'

export function Status(props) {
    const logged = <div className="text-white">
        <p>You're logged in as {props.email}</p>
        <button onClick={props.logout}>log out</button>
    </div>

    const not = <p className="text-white">Not logged in</p>
    const user = props.email ? logged : not

    return <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="inline-flex justify-start">
        <LeftHeading />
        <div class="w-full block flex lg:flex lg:items-center lg:justify-start lg:w-auto">
                <a href="/"className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    About
                </a>
                <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Docs
                </a>
                <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    Contact
                </a>
        </div>
        </div>
        {user}
    </nav>
}