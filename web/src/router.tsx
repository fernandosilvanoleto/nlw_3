import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
//npm install react-router-dom

import Landing from './pages/landing';
import OrphanagesMap from './pages/OrphanagesMap';

// ONDE SE CRIA ROTAS NO REACT
function Routes(){
    return (
    <BrowserRouter>
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={OrphanagesMap}/>
    </BrowserRouter>
    );
}

export default Routes;