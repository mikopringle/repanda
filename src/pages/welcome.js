import React from 'react'
import { LinkedButton } from '../components/buttons'
import Logo from '../components/logo'

export function Welcome(props) {
    return (
        <div>
            <Logo />
            <div className="text-left">
                <p >Employees are your most important asset</p>
                <p>Keeping them engaged make them more productive and reduces attrition, saving you time and money usually spend on hiring</p>
                <p>Let's get your free trial started</p>
            </div>
            <div className = "flex items-center justify-center ">
            <div className="mr-8">
            <LinkedButton link="/register" text="Register" />
            </div>
            <div className="ml-8">
            <LinkedButton link="/login" text="Log In" />
            </div>
            </div>
        </div>
    );
}