import React from 'react'
<<<<<<< HEAD
import { Trisection } from '../components/trisection'
import { Link } from 'react-router-dom'
import '../css/welcome.css'


const top = <h1>SurveyPanda</h1>

const mid = <div>
    <p>Employees are your most important asset</p>
    <p>Keeping them engaged make them more productive and reduces attrition, saving you time and money usually spend on hiring</p>
    <p>Let's get your free trial started</p>
</div>

const bottom = <div>
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>
</div>

export function Welcome(props) {
    return (
        <Trisection top={top} mid={mid} bottom={bottom} />
=======
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
>>>>>>> 135d1342cec4752d301842244dd3680a740d528a
    );
}