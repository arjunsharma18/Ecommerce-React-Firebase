import React, { Component } from 'react';
import { Home } from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AddProducts } from './components/AddProducts';
import { Login } from './components/Login';

export default class App extends Component {
  render() {
    return <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/addproducts' component={AddProducts} />
          <Route path='/login' component={Login} />
        </Switch>
      </BrowserRouter>

    </div>;
  }
}
