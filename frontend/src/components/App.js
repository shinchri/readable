import React, { Component } from 'react'
import * as ReadableAPI from '../utils/ReadableAPI'

class App extends Component {

  state = {
    categories: [],
    posts: {}
  }

  componentDidMount(){
    ReadableAPI.getAllCategories()
      .then((categories) => {
        this.setState(()=> ({
          categories
        }))
      })

    ReadableAPI.getAllPosts()
      .then((posts) => {
        this.setState(() => ({
          posts
        }))
      })
  }

  render() {
    const { categories, posts} = this.state
    return (
      <div className="App">
        <ul>
          {categories.map(category => (
            <li>{category.name} - {category.path}</li>
          ))}
        </ul>
        <ul>
          {JSON.stringify(posts)}
        </ul>
      </div>
    );
  }
}

export default App;
