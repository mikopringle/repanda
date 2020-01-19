import React from 'react'
import { CardWLogoSm } from '../components/containers'

export function About(){
    const about = <div>
        <div>
            <h1>The team</h1>
            <p>Content Content Content</p>
        </div>
        <div>
            <h1>Our vision</h1>
            <p>Content Content Content</p>
        </div>
    </div>

    return <CardWLogoSm child={about}/>
}