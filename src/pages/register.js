import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { post } from '../api/api'
import { ActionButton } from '../components/buttons'
import { CardWLogoMd } from '../components/containers'
import { StyledLabel, StyledInput } from '../components/formElements'


export function Register(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [inudstry, setIndustry] = useState("")
    const [code, setCode] = useState("")
    const [submission, setSubmission] = useState({ submitted: false, error: null, message: null })
    const [toHome, setToHome] = useState(false)

    async function submit() {
        const params = {
            email: email,
            password: password,
            name: name,
            inudstry: inudstry,
            firstName: firstName,
            code: code
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
                message: err.response.data ? err.response.data : "Error connecting to backend"
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

    const form = <div className="w-full">
            <StyledLabel text="Email" />
            <StyledInput value={email} setValue={setEmail} />

            <StyledLabel text="Password" />
            <StyledInput value={password} type="password" setValue={setPassword} />
            <div className="flex md:block">
                <div className="inline-block pr-2">
                    <StyledLabel text="Company Name" />
                    <StyledInput value={name} setValue={setName}/>
                </div>       
                <div className="inline-block pl-2">
                    <StyledLabel text="Company Industry" />
                    <StyledInput value={inudstry} setValue={setIndustry} />
                </div>
            </div>
            
            <div className="flex md:block">
                <div className="inline-block pr-2">
                    <StyledLabel text="First Name" />
                    <StyledInput value={firstName} setValue={setFirstName} />
                </div>
                <div className="inline-block pl-2">
                    <StyledLabel text="Invitation Code" />
                    <StyledInput value={code} setValue={setCode} />
                </div>
            </div>
            
            <ActionButton action={submit} text="submit" />
    </div>

    const success = toHome ? <Redirect to="/" /> : <h2>success! redirecting in 5 seconds...</h2>

    const error = <div><h2>Error! redirecting back in 5 seconds...</h2><p>Server side response:{submission.message}</p></div>

    if (!submission.submitted) {
        return <CardWLogoMd child={form} />
    }
    else if (submission.submitted && !submission.error) {
        return <CardWLogoMd child={success} />
    }
    else {
        return <CardWLogoMd child={error} />
    }
}