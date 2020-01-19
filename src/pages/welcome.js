import React from 'react'
import { LinkedButton } from '../components/buttons'
import { CardWLogoSm } from '../components/containers'

export function Welcome(props) {
    const content = <div>
            <div className="py-8 px-4">
                <p className="py-2">Employees are your most important asset</p>
                <p className="py-2">Let's help them help you!</p>
                <p className="py-2">Click REGISTER to get your Free Trial!</p>
            </div>
            <div>
                <LinkedButton link="/register" text="Register" />
            </div>
    </div>
    
    return <CardWLogoSm child={content} />
}