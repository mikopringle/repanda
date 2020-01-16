import React from 'react'
import { LeftHeading } from './logo'
import { ActionButton, LinkedButton} from './buttons'

export function Status(props) {
    const logged = <div className="text-white">
        <ActionButton action={props.logout} text="Log Out" />
    </div>

    const not = <LinkedButton link="/login" text="Log In" />
    const user = props.email ? logged : not

    return <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-2">
        <div className="inline-flex justify-start">
        <LeftHeading />
        <div class="hidden lg:flex md:items-center md:justify-start md:w-auto">
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