import React, { useState } from 'react';
import { Welcome } from './pages/welcome'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Register } from './pages/register';
import { Login } from './pages/login' 
import { Dash } from './pages/dash'
import { Status } from './components/status'

function App() {
  const [signed, setSigned] = useState(false)
  const [email, setEmail] = useState("")
  const [token, setToken] = useState("")

  const stateProps = {
    setSigned: setSigned,
    setEmail: setEmail,
    setToken: setToken
  }

  return (
    <Router>
      <Status email={email} />
      <Switch>
        <Route path="/register">
          <Register {...stateProps}/>
        </Route>
        <Route path="/login">
          <Login {...stateProps}/>
        </Route>
        <Route exact path="/">
          {signed ? <Dash /> : <Welcome />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
