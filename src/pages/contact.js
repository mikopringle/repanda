import React from 'react'
import { CardWLogoSm } from '../components/containers'

export function Contact(){
    const contact = <div>
        <h1>Contact</h1>
        <a href="https://github.com/frankisawesome">Frank Li's github</a>
        </div>
    return <CardWLogoSm child={contact}/>
}