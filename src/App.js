import React, { useState } from 'react'
import { Welcome } from './pages/welcome'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { Register } from './pages/register'
import { Login } from './pages/login' 
import { Dash } from './pages/dash'
import { Status } from './components/status'
import { Questionnaire } from './pages/question'
import { About } from './pages/about'
import { Docs } from './pages/docs'
import { Contact } from './pages/contact'


function App() {
  const [signed, setSigned] = useState(false)
  const [email, setEmail] = useState("")
  const [token, setToken] = useState("")
  const [companyId, setCompanyId] = useState("")
  const [employeeMode, setEmployeeMode] = useState(false)

  const stateProps = {
    setSigned: setSigned,
    setEmail: setEmail,
    setToken: setToken,
    setCompanyId: setCompanyId,
    setEmployeeMode: setEmployeeMode
  }
  
  const states = {
    signed: signed,
    email: email,
    token: token,
    companyId: companyId,
    employeeMode: employeeMode,
    logout: () => {
      setEmail("")
      setToken("")
      setCompanyId("")
      setSigned(false)
    }
  }

  return (
    <div className="w-full min-h-screen font-mono text-center">
      <Router>
      <Status {...states} />
      <Switch>
        <Route path="/register">
          <Register {...stateProps}/>
        </Route>
        <Route path="/login">
          <Login {...stateProps}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/docs">
          <Docs />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          {signed ? employeeMode ? <Questionnaire {...states} {...stateProps} /> : <Dash {...states} {...stateProps}/> : <Welcome />}
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
