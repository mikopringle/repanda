import React, { useState } from 'react';
import { Welcome } from './pages/welcome'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Register } from './pages/register';
import { Login } from './pages/login' 

function App() {
  const [signed, setSigned] = useState(false)
  const [companyName, setCompanyName] = useState("")

  const stateProps = {
    setSigned: setSigned,
    setCompanyName: setCompanyName
  }

  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register {...stateProps}/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          {signed ? <Welcome /> : <Welcome />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
