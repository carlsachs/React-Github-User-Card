import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Card from "./components/Card.js";

class App extends React.Component {
  state = {
    username: "carlsachs",
    userData: [],
    followers: [],
    followerData: []
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/carlsachs')
    .then(res => {
      console.log(res);
      this.setState({
        user: res.data,
      });
    })
    .catch(err => {
      console.log("There's an error", err)
    });

    axios.get('https://api.github.com/users/carlsachs/followers')
    .then(res => {
      console.log("data" , res)
    })
    .catch(err => {
      console.log("There's an error", err)
    });
  }

  
  render() {
  return (
    <div className="App">
      <h1>GitHub User Card</h1>
      <Card/>
    </div>
  );
}
}

export default App;
