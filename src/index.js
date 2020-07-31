import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import RegisterVideo from './pages/register/RegisterVideo';
import RegisterCategory from './pages/register/RegisterCategory';



const error404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/register/video" component={RegisterVideo} />
      <Route path="/register/category" component={RegisterCategory} />
      <Route component={error404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);