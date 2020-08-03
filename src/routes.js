import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/index'

import NotFound from './Pages/NotFound/index'
import Add from './Pages/Add/index'
import Header from '../src/Components/Header/index';
import CartShopping from '../src/Pages/CartShopping/index';

const Routes = () => {
    return (
      <BrowserRouter>
      <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add" exact component={Add} />
            <Route path="/cartShopping" exact component={CartShopping} />
            <Route path="*" exact component={NotFound} />
        </Switch>
    </BrowserRouter>
    )
}
export default Routes;