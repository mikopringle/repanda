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
            setSubmission({
                success: false,
                message: err.response.data.message
            })
        }

    }

    const form = <div>
        <label>
        <h1  className= "bg-teal-500 text-white text-2xl font-bold font-sans flex items-center justify-center" >Login</h1>
            <div className="text-gray-700 text-xl font-bold mb-1" >
                Email:
            </div>

            <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className="mt-6 text-gray-700 text-xl font-bold mb-1" >
                Password:
            </div>

            <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="font-sans font-bold mt-8 w-32 px-2 pt-1 pb-1 mb-8 bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold rounded-lg px-4 rounded focus:outline-none focus:shadow-outline" type="button">>
            <button onCLick={submit}>Log in</button>
            </div>

            {submission.success ? <p>Log in success!</p> : <p>{submission.message}</p>}
        </label>
    </div>

    return toHome ? <Redirect to="/" /> : form
}