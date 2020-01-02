import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import '../css/register.css'
import { post } from '../api/api'

export function Register(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [inudstry, setIndustry] = useState("")
    const [code, setCode] = useState("")
    const [abn, setAbn] = useState("")
    const [submission, setSubmission] = useState({ submitted: false, error: null, message: null })
    const [toHome, setToHome] = useState(false)

    async function submit() {
        const params = {
            email: email,
            password: password,
            name: name,
            inudstry: inudstry
        }
        try {
            const res = await post('user/new', params)
            console.log(res)
            setSubmission({
                submitted: true,
                error: false,
                message: null
            })
            setTimeout(() => {
                setToHome(true)
            }, 5000)
        }
        catch (err) {
            console.log(err.response)
            setSubmission({
                submitted: true,
                error: true,
                message: err.response.data
            })
            setTimeout(() => {
                setSubmission({
                    submitted: false,
                    error: null,
                    message: null
                })
            }, 5000)
        }
    }

    const form = <div className="register">
        <label>
            Email:
        <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
            Password:
        <input value={password} type="password" onChange={(e) => setPassword(e.target.value)}></input>
            Company Name:
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
            Company Industry:
        <input value={inudstry} onChange={(e) => setIndustry(e.target.value)}></input>
            Company ABN:
        <input value={abn} onChange={(e) => setAbn(e.target.value)} />
            Invitation Code:
        <input value={code} onChange={(e) => setCode(e.target.value)} />
            <button onClick={submit}>Submit</button>
        </label>
    </div>

    const success = toHome ? <Redirect to="/" /> : <h2>success! redirecting in 5 seconds...</h2>

    const error = <div><h2>Error! redirecting back in 5 seconds...</h2><p>Server side response:{submission.message}</p></div>

    if (!submission.submitted) {
        return form
    }
    else if (submission.submitted && !submission.error) {
        return success
    }
    else {
        return error
    }
}