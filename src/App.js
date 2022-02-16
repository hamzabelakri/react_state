import React, { Component } from "react";
import image from "./images/John.jpg";
export default class App extends Component {
  state = {
    fullName: "Johw Wick",
    Bio: "A legenday assassin",
    profession: "Hitman",
    imgSrc: image,
    show: false,
    counter: 0,
  };


  ingrement = () => {

    this.setState({ counter: this.state.counter + 1 });

  }
  Show = () => {
    if(this.state.show){
      this.setState({ show: false })
    }
    else{
      this.setState({ show: true });
      setInterval(
        this.ingrement,1000);
    }  

this.setState({ counter: 0});
  };

  render() {
    return (
      <div>
        {this.state.show ? (
          <div>
            <p>{this.state.fullName}</p>
            <p>{this.state.Bio}</p>
            <p>{this.state.profession}</p>
            <img src={this.state.imgSrc} />
            <h1>{this.state.counter}</h1>
          </div>
        ) : null}
        <button onClick={this.Show}>Click</button>
        <p></p>
      </div>
    );
  }
}
