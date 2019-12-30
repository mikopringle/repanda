import React, { useState } from 'react'
import '../css/register.css'

export function Register(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [inudstry, setIndustry] = useState("")
    const [code, setCode] = useState("")
    const [abn, setAbn] = useState("")

    const submit = () => {

    }

    return(
        <form className="register">
            <label>
                Email:
                <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
                Password:
                <input value={password} onChange={(e) => setPassword(e.target.value)}></input>
                Company Name:
                <input value={name} onChange={(e) => setName(e.target.value)}></input>
                Company Industry:
                <input value={inudstry} onChange={(e) => setIndustry(e.target.value)}></input>
                Company ABN:
                <input value={abn} onChange={(e) => setAbn(e.target.value)} />
                Invitation Code:
                <input value={code} onChange={(e) => setCode(e.target.value)} />
                <input type="submit" value="Submit" onClick={submit}/>
            </label>
        </form>
    );
}