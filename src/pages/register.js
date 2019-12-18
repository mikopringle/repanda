import React from 'react'
import '../css/register.css'

export function Register(props) {
    return(
        <form className="register">
            <label>
                Email:
                <input></input>
                Password:
                <input></input>
                Company Name:
                <input></input>
                <input type="submit" value="Submit" />
            </label>
        </form>
    );
}