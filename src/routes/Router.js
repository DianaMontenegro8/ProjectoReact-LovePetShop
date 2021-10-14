import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import NavBar from "../components/NavBar";
import App from '../containers/App'
import NewLovePetShop from '../containers/NewLovePetShop'

const Router = () => {
    return (
        <BrowserRouter>
        <NavBar />
            <Switch>
                <Route exact path="/" component={App} />
                 <Route exact path="/new" component={NewLovePetShop} />
            </Switch>

        </BrowserRouter>
    )
}

export default Router;