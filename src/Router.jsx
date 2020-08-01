import * as React from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import NotFound from './pages/NotFound'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <p>Hello, Hero factory!</p>
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Router