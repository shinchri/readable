import React, { Component } from 'react'
import * as ReadableAPI from '../utils/ReadableAPI'

class App extends Component {

  state = {
    categories: []
  }

  componentDidMount(){
    ReadableAPI.getAllCategories()
      .then((categories) => {
        this.setState(()=> ({
          categories
        }))
      })
  }

  render() {
    const { categories} = this.state
    return (
      <div className="App">
        <ul>
          {categories.map(category => (
            <li>{category.name} - {category.path}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
