import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { post } from '../api/api'
import { ActionButton } from '../components/buttons'
import { CardWLogoSm } from '../components/containers'
import { StyledLabel, StyledInput } from '../components/formElements'


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

    const form = <div>
            <StyledLabel text="Company Name" />
            <StyledInput value={name} setValue={setName}/>

            <StyledLabel text="Company Industry" />
            <StyledInput value={inudstry} setValue={setIndustry} />
            
            <StyledLabel text="Email" />
            <StyledInput value={email} setValue={setEmail} />

            <StyledLabel text="Password" />
            <StyledInput value={password} type={password} setValue={setPassword} />

            <StyledLabel text="Company ABN" />
            <StyledInput value={abn} setValue={setAbn} />
            
            <StyledLabel text="Invitation Code" />
            <StyledInput value={code} setValue={setCode} />

            <ActionButton action={submit} text="submit" />
    </div>

    const success = toHome ? <Redirect to="/" /> : <h2>success! redirecting in 5 seconds...</h2>

    const error = <div><h2>Error! redirecting back in 5 seconds...</h2><p>Server side response:{submission.message}</p></div>

    if (!submission.submitted) {
        return <CardWLogoSm child={form} />
    }
    else if (submission.submitted && !submission.error) {
        return <CardWLogoSm child={success} />
    }
    else {
        return <CardWLogoSm child={error} />
    }
}