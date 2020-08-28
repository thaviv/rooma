import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // first we getting promise from the site and converting it to JSON file so we can read the data.
      .then(users => this.setState({ data: users })); //adding the date to our state.
  }



  render() {
    return (
      <div className="App">
        {this.state.data.map(user => (
          <h1 key={user.key}>{user.name}</h1>
        ))}
      </div>
    );
  }
}



export default App;
