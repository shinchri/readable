import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { Dashboard } from './features/page/Dashboard'
import { PostsByCategory } from './features/posts/PostsByCategory'

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/category/:category" component={PostsByCategory} />
          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  )
  
}

export default App;
