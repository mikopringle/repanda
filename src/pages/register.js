import React from 'react'

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