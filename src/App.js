import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    person: {
      fullName: "Peter Paker",
      bio: "A passionate 'web' developer.",
      imgSrc:
        "https://media.gettyimages.com/id/73020969/photo/promotional-portrait-of-american-actor-nicholas-hammond-as-the-costumed-superhero-spider-man-as.jpg?s=612x612&w=0&k=20&c=vhbLYXzXkdzmGEbqHz6Nai3SS7l9JRnpOawx_ytpYb0=",
      profession: "Developing web strings",
    },
    show: false,
    mountedTime: new Date(),
  };

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  getMountedTimeInterval = () => {
    const currentTime = new Date();
    const interval = Math.round((currentTime - this.state.mountedTime) / 1000);
    return interval;
  };

  render() {
    return (
      <div className="App">
        <h1>No.1 web developer in the world </h1>
        <button className="button" onClick={this.toggleProfile}>
          Show profile{" "}
        </button>
        {this.state.show && (
          <div>
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>

            <img src={this.state.person.imgSrc} alt="Profile" />
            <p>Profession: {this.state.person.profession}</p>
          </div>
        )}
        <p>Time since mounted: {this.getMountedTimeInterval()} seconds</p>
      </div>
    );
  }
}

export default App;
