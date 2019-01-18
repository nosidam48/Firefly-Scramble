import React from 'react';
import logo from './logo.svg';
import Card from './components/Card/index';
import Header from './components/Header/index';
import cards from './cards.json'
import Jumbotron from './components/Jumbo/index'
import './App.css';

class App extends React.Component {
  state = {
    cards: cards,
    score: 0,
    message: "Click any image to start!",
    topScore: 0
  };

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  scoreUp = score => {
    score++ 
    this.setState({
      score: score
    })
  }

  youLose = () => {
    this.setState({
      cards: cards,
      score: 0,
      message: "You clicked me twice! Click any image to try again!"
    })
  }

  reset = () => {
    this.setState({
        cards: cards,
        score: 0,
        message: "You won! Click any image to see if it was a fluke!",
        topScore: 0
    })
  }

  topScore = () => {
    if(this.state.score < 12) {
      if (this.state.score >= this.state.topScore) {
        this.setState({
          topScore: this.state.score + 1
        })
      }
    }
    else if (this.state.score >= 12) {
      this.reset()
    }
    }
  

  itemController = props => {
    this.shuffle(this.state.cards);

    const gameArray = [...this.state.cards];
    const propsIndex = gameArray.indexOf(props);

    gameArray[propsIndex] = {...props};

    if (gameArray[propsIndex].clicked === false) {
      gameArray[propsIndex].clicked = true;
      this.scoreUp(this.state.score);
      this.topScore();
      this.setState({
        cards: gameArray,
        message: "You guessed correctly! Click again"
      });
    }
    else if (gameArray[propsIndex].clicked === true) {
      console.log("you clicked me bro")
      this.youLose()
    }
  }

  render() {
    return (
      <div>
      <Header
      score={this.state.score}
      message={this.state.message}
      topScore={this.state.topScore}
      />
      <Jumbotron>Jumbo</Jumbotron>
      <div className='container'>
      {this.state.cards.map(char => (
        <Card 
        handleClick={this.itemController}
        cards={char}
        key={char.id}
      />
      ))}
      </div>
      </div>
    );
  }
}

export default App;
