import React, {useState} from 'react'

export function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = () => {
        
    }

    const form = <form>
        <label>
            Email:
            <input value={email} onChange={(e) => setEmail(e.target.value)}/>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" value="Log In" onClick={submit}/>
        </label>
    </form>

    return form
}