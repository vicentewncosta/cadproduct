import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';

import Home from './views/home';
import CadastroProduto from './views/produtos/cadastro';

export default () => {
    return(
        <HashRouter>
            <Routes>
                <Route exact path="/cadastro-produtos" component={ CadastroProduto } />
                <Route exact path="/home" component={ Home } />
            </Routes>
        </HashRouter>
    )
}