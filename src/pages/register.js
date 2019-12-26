import React, { useState } from 'react'
import '../css/register.css'

export function Register(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    return(
        <form className="register">
            <label>
                Email:
                <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
                Password:
                <input value={password} onChange={(e) => setPassword(e.target.value)}></input>
                Company Name:
                <input value={name} onChange={(e) => setName(e.target.value)}></input>
                <input type="submit" value="Submit" />
            </label>
        </form>
    );
}