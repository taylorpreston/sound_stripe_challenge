import React, { Component } from 'react';
import './App.css';
import Artist from './Components/Artist'
import Songs from './Components/Songs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Artist/>
        <Songs/>
      </div>
    );
  }
}

export default App;
