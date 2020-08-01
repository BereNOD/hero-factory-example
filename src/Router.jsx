import * as React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import Home from './pages/Home'
import NotFound from './pages/NotFound'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Router