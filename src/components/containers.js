import React from 'react'
import Logo, { LeftHeading } from './logo'

//renders a centered card component with survey panda logo, size small
export function CardWLogoSm({child}) {
    return (
        <div className="inline-block w-full max-w-sm rounded bg-white overflow-hidden shadow-lg text-center mt-5">
            <Logo />
            <div className="px-10 py-5">{child}</div>
        </div>
    )
}

//a medium-lg sized card component for dashboard and questionnaire
export function CardWLogoMd({child}) {
    return (
        <div className="inline-block max-w-full rounded bg-white overflow-hidden shadow-lg text-center mt-5">
            <LeftHeading />
            <div className="px-10 py-5">{child}</div>
        </div>
    )
}