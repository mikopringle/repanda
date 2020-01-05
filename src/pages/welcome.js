import React from 'react'
import Button from '../components/linkedBtn'

export function Welcome(props) {
    return (
        <div>
            <h1>SurveyPanda</h1>
            <div className="text-left">
                <p >Employees are your most important asset</p>
                <p>Keeping them engaged make them more productive and reduces attrition, saving you time and money usually spend on hiring</p>
                <p>Let's get your free trial started</p>
            </div>
            <Button link="/register" text="Register" />
            <Button link="/login" text="Log In" />
        </div>
    );
}