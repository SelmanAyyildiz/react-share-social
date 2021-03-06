import React, { useContext } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from '../components/Navbar'
import AuthContext, { FirebaseAuthContext } from '../context/AuthContext'
import Detail from '../pages/Detail'
import Main from '../pages/Main'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'

function RouterFunction() {
    const {currentUser} = useContext(FirebaseAuthContext);
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/register" component={Signup}/>
                <Route exact path="/login" component={Signin}/>
                <Route exact path="/user/:id" component={currentUser ? Detail : Signin}/>
                <Route  path="/" component={Main}/>
            </Switch>
        </Router>
    )
}

export default RouterFunction
