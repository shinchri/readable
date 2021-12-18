import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { Dashboard } from './features/page/Dashboard'
import { PostsByCategory } from './features/posts/PostsByCategory'
import { PostDetail } from './features/posts/PostDetail'
import { AddPostForm } from './features/posts/AddPostForm'

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/category/:category" component={PostsByCategory} />
          <Route exact path="/posts/new" component={AddPostForm} />
          <Route exact path="/posts/:id" component={PostDetail} />   
          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  )
  
}

export default App;
