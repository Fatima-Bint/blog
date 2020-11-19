import React from 'react'
import Login from './components/Login'
import {BrowserRouter as Router,Switch,Link, Route} from 'react-router-dom'
//import { Switch } from '@material-ui/core'
import Signup from './components/Signup'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'

function App() {
  
  return (
  
    <div>
      <div>

        <Router>
          <Switch>
            <Route path="/Login" component={Login}/>
          </Switch>
          <Switch>
            <Route path="/Signup" component={Signup}/>
          </Switch>

          <Link to='/Signup'>Signup</Link>
        <Link to="/Login">Login</Link>
          
        </Router>
      </div>
      
    </div>
  )
}

export default App
