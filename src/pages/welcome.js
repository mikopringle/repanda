import React from 'react'
import { Trisection } from '../components/trisection'

const top = <img className alt="logo"/>

const mid = <div>
    <p>Employees are your most important asset</p>
    <p>Keeping them engaged make them more productive and reduces attrition, saving you time and money usually spend on hiring</p>
    <p>Let's get your free trial started</p>
</div>

const bottom = <button>Register</button>

export function Welcome(props) {
    return(
        <Trisection top={top} mid={mid} bottom={bottom}/>
    );
}