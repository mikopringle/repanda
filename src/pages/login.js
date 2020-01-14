import React, { useState } from 'react'
import { post } from '../api/api'
import { Redirect } from 'react-router-dom'
import { StyledLabel, StyledInput } from '../components/formElements'
import { ActionButton } from '../components/buttons'
import { CardWLogo } from '../components/containers'

export function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [submission, setSubmission] = useState({
        success: false,
        message: null
    })
    const [toHome, setToHome] = useState(false)

    const submit = async () => {
        const body = {
            email: email,
            password: password
        }
        try {
            const res = await post('user/login', body)
            setSubmission({
                success: true,
                message: null
            })
            props.setSigned(true)
            props.setEmail(body.email)
            props.setToken(res.data.token)
            props.setCompanyId(res.data.companyId)
            setTimeout(() => setToHome(true), 3000)
        }
        catch (err) {
            if (err.response){
                setSubmission({
                    success: false,
                    message: err.response.data.message
                })
            }
            else {
                setSubmission({
                    success: false,
                    message: err.message
                })
            }
        }

    }

    const form = <div>
            <StyledLabel text="Email Address" />
            <StyledInput value={email} setValue={setEmail} placeholder="Email"/>

            <StyledLabel text="Password" />
            <StyledInput type="password" value={password} setValue={setPassword} placeholder="Password" />

            <ActionButton action={submit} text="Log In" />
            {submission.success ? <p>Log in success!</p> : <p>{submission.message}</p>}
    </div>

    return toHome ? <Redirect to="/" /> : <CardWLogo child={form} />
}