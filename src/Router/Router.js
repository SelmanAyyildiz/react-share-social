import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'

function RouterFunction() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/register" component={Signup}/>
                <Route exact path="/login" component={Signin}/>
            </Switch>
        </Router>
    )
}

export default RouterFunction
