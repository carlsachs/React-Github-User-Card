import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Card from "./components/Card.js";

class App extends React.Component {
  state = {
    user: "",
    setUser: ""
  }

  componentDidMount() {
    Axios.get('https://api.github.com/users/carlsachs')
    .then(res => {
      console.log(res);
      this.setState({
        user: res.data.login
      });
    })
    .catch(err => {
      console.log("There's an error", err)
    });

  }
  render() {
  return (
    <div className="App">
      <h1>GitHub User Card</h1>
      <Card />
    </div>
  );
}
}

export default App;
