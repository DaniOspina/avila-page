import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
 } from 'react-router-dom';
import Cart from '../Components/Cart/Cart';
import Home from '../Components/home/Home';
import Send from '../Components/Send/Send';
import CategoriesDashBoard from './CategoriesDashboard';

const AppRouter = () => {
    return (
        <Router>
            <div>
            <Switch>
                <Route path="/Cart" component={Cart}/>
                <Route path="/Send" component={Send}/>
                <Route path="/Home" component={Home}/>
                <Route path="/" component={CategoriesDashBoard}/>
                <Redirect to="/"/>
            </Switch>
            </div>   
        </Router>
    )
}

export default AppRouter
