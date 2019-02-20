import React from 'react';
import logo from './logo.svg';
import Card from './components/Card/index';
import Header from './components/Header/index';
import cards from './cards.json'
import Jumbotron from './components/Jumbo/index'
import './App.css';

class App extends React.Component {
  // Set state to the games starting point
  state = {
    cards: cards,
    score: 0,
    message: "Click any image to start!",
    topScore: 0
  };
  // A function to shuffle the array of pictures
  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  // A function to increase the score
  scoreUp = score => {
    score++ 
    this.setState({
      score: score,
      message: "You clicked correctly. Keep going!"
    })
  }
  // A function to reset the game and give a losing message
  youLose = () => {
    this.setState({
      cards: cards,
      score: 0,
      message: "You clicked me twice! Click any image to try again!"
    })
  }
  // A function to reset the game and display message to run when the game has been won.
  reset = () => {
    this.setState({
        cards: cards,
        score: 0,
        message: "You won! Click any image to see if it was a fluke!",
        topScore: 0
    })
  }
  // A function to increase the current top score
  topScore = (score) => {
    // If the game hasn't been won, add one to the top score
    if(score < 11) {
      if (this.state.score >= this.state.topScore) {
        this.setState({
          topScore: this.state.score + 1
        })
      }
    }
    // Otherwise run the reset function with the win message
    else {
      this.reset()
    }
    }
  
  // A function for controlling the game
  itemController = props => {
    // Shuffle the cards when the function runs
    this.shuffle(this.state.cards);
    // Create a new array to hold the current game state
    const gameArray = [...this.state.cards];
    // A variable that is the the index of the card clicked in the new array
    const propsIndex = gameArray.indexOf(props);
    // set that index to equal everything from the clicked card
    gameArray[propsIndex] = {...props};
    // If the card has not already been clicked
    if (gameArray[propsIndex].clicked === false) {
      // Set clicked to true, run the scoreUp and topScore functions and setState to the new array
      gameArray[propsIndex].clicked = true;
      this.scoreUp(this.state.score);
      this.setState({
        cards: gameArray
      });
      this.topScore(this.state.score);
    }
    // Otherwise run the losing message
    else if (gameArray[propsIndex].clicked === true) {
      this.youLose()
    }
    
  }

  render() {
    return (
      <div>
        {/*Pass score, message and topScore, to the header */}
      <Header
      score={this.state.score}
      message={this.state.message}
      topScore={this.state.topScore}
      />
      <Jumbotron>Jumbo</Jumbotron>
      <div className='container'>
    {/* For each card in the state cards, create a card componenet and pass it the card object */}
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
