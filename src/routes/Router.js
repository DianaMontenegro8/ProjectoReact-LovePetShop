import React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import NavBar from "../components/NavBar";

import App from '../containers/App'
import NossosServiços from '../containers/NossosServiços'
import QuemSomos from '../containers/QuemSomos'
import NewAnimais from '../containers/NewAnimais'

const Router = () => {
    return (
        <BrowserRouter>
        <NavBar />
            <Switch>
                <Route exact path="/Inicio" component={App} />
                 <Route exact path="/Quem Somos" component={QuemSomos} />
                 <Route exact path="/Nossos Serviços" component={NossosServiços} />
                 <Route exact path="/Registro" component={NewAnimais} />
            </Switch>

        </BrowserRouter>
    )
}

export default Router;