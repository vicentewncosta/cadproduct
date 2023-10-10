import React from 'react';

import {HashRouter, Switch, Route} from 'react-router-dom';

import home from './views/home';
import CadastroProduto from './views/Produtos/Cadastro';

export default () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/cadastro-produtos" Component={CadastroProduto} />
                <Route exact path="/" Component={home} /> 
            </Switch>
        </HashRouter>
    )
} 