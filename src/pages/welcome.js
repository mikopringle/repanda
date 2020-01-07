import React from 'react'
import Button from '../components/linkedBtn'

export function Welcome(props) {
    return (
        <div>
            <h1  className= "bg-teal-500 text-white text-2xl font-bold font-sans flex items-center justify-center" >SurveyPanda</h1>
            <div className="text-left">
                <p >Employees are your most important asset</p>
                <p>Keeping them engaged make them more productive and reduces attrition, saving you time and money usually spend on hiring</p>
                <p>Let's get your free trial started</p>
            </div>
            <div className = "flex items-center justify-center ">
            <div className="mr-8">
            <Button  link="/register" text="Register" />
            </div>
            <div className="ml-8">
            <Button link="/login" text="Log In" />
            </div>
            </div>
        </div>
    );
}