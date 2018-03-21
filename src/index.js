import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import HomePage from './containers/HomePage';
import About from './components/routes/About';
import ProductContainer from './components/routes/ProductContainer';
import Contact from './components/routes/Contact';
import Workshops from './components/routes/Workshops';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/workshops' component={Workshops}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/order' component={ProductContainer}/>
    </div>
  </BrowserRouter>), 
  document.getElementById('root'));
registerServiceWorker();
