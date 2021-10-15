import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import NavBar from "../components/NavBar";
import App from '../containers/App'
import NewAnimais from '../containers/NewAnimais'

const Router = () => {
    return (
        <BrowserRouter>
        <NavBar />
            <Switch>
                <Route exact path="/" component={App} />
                 <Route exact path="/new" component={NewAnimais} />
            </Switch>

        </BrowserRouter>
    )
}

export default Router;