import React from 'react';
import{
    BrowserRouter,
    Switch,
    Route
}from 'react-router-dom';
import App from './../App';
import RecipeDetail from './Recipe-detail';

function Router()
{
     return(
        <BrowserRouter>
         <Switch>
             <Route
                exact
                path="/"
                component={App}
            />
            <Route
                path="/recipe/:id"
                component={RecipeDetail}
            />
            </Switch>
        </BrowserRouter>
       
     );
}

export default Router;