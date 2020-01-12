import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
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
            <h1 className="bg-teal-500 text-white text-4xl font-bold font-sans flex items-center justify-center" >SurveyPanda</h1>

            <div className="text-gray-700 text-xl font-bold mb-1 mt-5 flex items-center justify-center">
                Company Name:
           </div>
            <div className=" flex items-center justify-center">
                <input className="appearance-none block  bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white w-64" value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className="text-gray-700 text-xl font-bold mb-1 flex items-center justify-center">
                Company Industry:
           </div>
            <div className=" flex items-center justify-center flex items-center justify-center">
                <input className="appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white w-64" value={inudstry} onChange={(e) => setIndustry(e.target.value)}></input>
            </div>
            <div className="text-gray-700 text-xl font-bold mb-1 flex items-center justify-center">
                Email:
           </div>
            <div className=" flex items-center justify-center">
                <input className="appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white w-64" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="text-gray-700 text-xl font-bold mb-1 flex items-center justify-center">
                Password:
           </div>
            <div className="flex items-center justify-center">
                <input className="appearance-none block  bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white w-64" value={password} type="password" onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div className="text-gray-700 text-xl font-bold mb-1 flex items-center justify-center">
                Company ABN:
           </div>
            <div className="flex items-center justify-center">
                <input className="appearance-none block  bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white w-64" value={abn} onChange={(e) => setAbn(e.target.value)} />
            </div>
            <div className="text-gray-700 text-xl font-bold mb-1 flex items-center justify-center">
                Invitation Code:
           </div>
            <div className="flex items-center justify-center">
                <input className="appearance-none  bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white w-64" value={code} onChange={(e) => setCode(e.target.value)} />
            </div>
            <div className = "flex items-center justify-center">
            <button className="font-bold  py-2 px-3 text-xl rounded-lg bg-teal-500 text-white flex items-center justify-center" onClick={submit}>Submit</button>
            </div>
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