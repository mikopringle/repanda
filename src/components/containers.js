import React from 'react'
import Logo from './logo'

//renders a centered card component with survey panda logo
//try to render this for every single return call of the pages components
export function CardWLogo({child}) {
    return (
        <div className="inline-block w-full max-w-xs rounded overflow-hidden shadow-lg text-center mt-5">
            <Logo />
            {child}
        </div>
    )
}