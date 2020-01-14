import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { post } from '../api/api'
import Logo from '../components/logo'
import { ActionButton } from '../components/buttons'


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

    const inputStyles = "appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white w-64"

    const StyledLabel = (props) => <div className="text-gray-700 text-xl font-bold mb-1">{props.text}</div>

    const form = <div>
            <Logo />

            <StyledLabel text="Company Name" />
            <input className={inputStyles} value={name} onChange={(e) => setName(e.target.value)}></input>

            <StyledLabel text="Company Industry" />
            <input className={inputStyles} value={inudstry} onChange={(e) => setIndustry(e.target.value)}></input>
            
            <StyledLabel text="Email" />
            <input className={inputStyles} value={email} onChange={(e) => setEmail(e.target.value)}></input>

            <StyledLabel text="Password" />
            <input className={inputStyles} value={password} type="password" onChange={(e) => setPassword(e.target.value)}></input>

            <StyledLabel text="Company ABN" />
            <input className={inputStyles} value={abn} onChange={(e) => setAbn(e.target.value)} />
            
            <StyledLabel text="Invitation Code" />
            <input className={inputStyles} value={code} onChange={(e) => setCode(e.target.value)} />

            <ActionButton action={submit} text="submit" />
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