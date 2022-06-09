import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    fullName: "Dhia Bachtouli",
    profession: "FullStack developer",
    bio: "checkpoint state",
    img: "logo192.png",
    bool: false,
  };
  handleClick = () => this.setState({ bool: !this.state.bool });
  render() {
    return (
     
      <div className="App">
        
        <button className="button" onClick={this.handleClick}>Show profil</button>
        {this.state.bool ? (
          <div>
            <h1>Hello {this.state.fullName}</h1>
            <h2>My profession is {this.state.profession}</h2>
            <h3>{this.state.bio}</h3>
            <img src={this.state.img} />
          </div>
        ) : null}
        
      </div>
    
    );
  }
}
