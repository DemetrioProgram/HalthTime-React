import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/login';
import Principal from './pages/Principal/principal';
import CadastroUser from './pages/CadastroUser/cadastroUser'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" component={Principal} />
                <Route path="/cadastroUser" component={CadastroUser} />
            </Switch>
        </BrowserRouter>
    );
}