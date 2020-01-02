import React, {useState} from 'react'
import { post } from '../api/api'
import { Redirect } from 'react-router-dom'

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
            setTimeout(() => setToHome(true), 3000)
        }
        catch(err) {
            setSubmission({
                success: false,
                message: err.response.data.message
            })
        }
        
    }

    const form = <div>
        <label>
            Email:
            <input value={email} onChange={(e) => setEmail(e.target.value)}/>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" value="Log In" onClick={submit}/>
            {submission.success ? <p>Log in success!</p> : <p>{submission.message}</p>}
        </label>
    </div>

    return toHome ? <Redirect to="/" /> : form
}