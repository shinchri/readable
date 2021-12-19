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
import { EditPostForm } from './features/posts/EditPostForm'
import { DeletePostForm } from './features/posts/DeletePostForm'
import { EditCommentForm } from './features/comments/EditCommentForm'
import { DeleteCommentForm } from './features/comments/DeleteCommentForm'
import { Page404 } from './features/page/Page404'

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/category/:category" component={PostsByCategory} />
          <Route exact path="/posts/new" component={AddPostForm} />
          <Route exact path="/posts/:id/edit" component={EditPostForm} />
          <Route exact path="/posts/:id/delete" component={DeletePostForm} />
          <Route exact path="/posts/:id" component={PostDetail} />
          <Route exact path="/comments/:id/edit" component={EditCommentForm} />
          <Route exact path="/comments/:id/delete" component={DeleteCommentForm} />
          <Route exact path="/404" component={Page404} />
          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  )
  
}

export default App;
