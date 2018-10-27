import React, { Component } from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import StarCard from "./components/StarCard";
import { Container, Row } from "./components/Grid";
import stars from "./stars.json";

function shuffleStars(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  state = {
    stars,
    currentScore: 0,
    topScore: 0,
    displayMessage: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
      this.setState({
        displayMessage: "Can't relate."
      })
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      displayMessage: "That's hot!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 15) {
      this.setState({ displayMessage: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      displayMessage: "",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledStars = shuffleStars(stars);
    this.setState({ stars: shuffledStars });
  };

  render() {
    return (
      <div>
        <Nav
          title="Clicky Game--Pop Icons Edition"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          displayMessage={this.state.displayMessage} 
        />
        <Jumbotron />
        <Container>
          <Row>
            <div className="col-md-10 offset-md-1">
              {this.state.stars.map(star => (
                  <StarCard
                    key={star.id}
                    handleClick={this.handleClick}
                    handleIncrement={this.handleIncrement}
                    handleReset={this.handleReset}
                    handleShuffle={this.handleShuffle}
                    id={star.id}
                    image={star.image}
                  />
              ))}
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
