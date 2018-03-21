import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './containers/HomePage'
import About from './components/routes/About'
import Workshops from './components/routes/Workshops'
import ProductContainer from './components/routes/ProductContainer'
import Contact from './components/routes/Contact'

export default class Routes extends PureComponent {
  render() {
    return(
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/workshops" component={Workshops} />
          <Route path="/products" component={ProductContainer} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    )
  }
}
