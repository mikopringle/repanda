import React from 'react'
import { LeftHeading } from './logo'
import { ActionButton, LinkedButton, NavButton } from './buttons'

export function Status(props) {
    const logged = <div className="text-white">
        <ActionButton action={props.logout} text="Log Out" />
    </div>

    const not = <LinkedButton link="/login" text="Log In" />
    const user = props.email ? logged : not

    return <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-2">
        <div className="inline-flex justify-start">
            <div className="flex items-center justify-start">
                <LeftHeading />
            </div>
            <div className="hidden lg:flex md:items-center md:justify-start md:w-auto">
                    <NavButton text="about" link="/about" /> 
                    <NavButton text="contact" link="/contact" />
                    <NavButton text="docs" link="/docs" />
            </div>
        </div>
        <div className="flex items-center justify-end">
            {user}
        </div>
    </nav>
}