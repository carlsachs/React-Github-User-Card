import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Card from "./components/Card.js";
import FollowerCard from "./components/FollowerCard.js";

class App extends React.Component {
  state = {
    userData: [],
    followerData: [],
    err: ""
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/carlsachs')
    .then(res => {
      console.log(res);
      this.setState({
        userData: [res.data]
      });
    })
    .catch(err => {
      console.log("There's an error", err)
    });

    axios.get('https://api.github.com/users/carlsachs/followers')
    .then(res => {
      console.log("data" , res)
      this.setState({
        followers: res.data
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
      <Card userData={this.state.userData}/>
      <FollowerCard />
    </div>
  );
}
}

export default App;
