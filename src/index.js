import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import AboutUs from './views/about-us'
import ThankYou from './views/thank-you'
import Home from './views/home'
import Quote from './views/quote'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={ThankYou} exact path="/thank-you" />
        <Route component={Home} exact path="/" />
        <Route component={Quote} exact path="/quote" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
