import React from 'react'
import { LinkedButton } from '../components/buttons'
import { CardWLogoSm } from '../components/containers'

export function Welcome(props) {
    const content = <div>
            <div className="py-8 px-4">
                <p className="py-2">Employees are your most important asset</p>
                <p className="py-2">Keeping them engaged make them more productive and reduces attrition, saving you time and money usually spend on hiring</p>
                <p className="py-2">Let's get your free trial started</p>
            </div>
            <div>
                <LinkedButton link="/register" text="Register" />
                <LinkedButton link="/login" text="Log In" />
            </div>
    </div>
    
    return <CardWLogoSm child={content} />
}