import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import About from './Component/About/About';
import Contact from './Component/Contact';
import Project from './Component/Projects/Project';
import Works from './Component/Work/Works'

const routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/myprofile/projects" component={Project} exact />
                <Route path="/myprofile/work" component={Works} exact />
                <Route path="/myprofile/profile" component={About} exact />
                <Redirect path="/myprofile/" to="/myprofile/profile"/>
            </Switch>
        </Router>
    )
}

export default routes
