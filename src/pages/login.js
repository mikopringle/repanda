import React, { useState } from 'react'
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
        <label>
            <div className="text-gray-700 text-xl font-bold mb-4" >Email:</div>
            
            <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight 
            focus:outline-none focus:shadow-outline"
                value={email} onChange={(e) => setEmail(e.target.value)} />
            
            <div className="text-gray-700 text-xl font-bold mb-4" >Password:</div>

            <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight 
            focus:outline-none focus:shadow-outline" 
                type="password" value={password} 
                onChange={(e) => setPassword(e.target.value)} />

          
            <div className = "w-24 mt-6 flex items-center justify-center font-bold  py-2 px-3 text-xl
             rounded-lg bg-teal-500 text-white flex items-center justify-center">
            <button onClick={submit}>Log in</button>
            </div>

            {submission.success ? <p>Log in success!</p> : <p>{submission.message}</p>}
        </label>
    </div>

    return toHome ? <Redirect to="/" /> : form
}