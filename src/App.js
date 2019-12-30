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
  const [name, setName] = useState("")

  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
