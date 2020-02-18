import React, { Component } from 'react';


const ScoreboardContext = React.createContext();


export class Provider extends Component {
  state = {
    players : [
      {
        id: 1,
        name: "Guil",
        score: 0
      },
      {
        id: 2,
        name: "Treasure",
        score: 0
      },
      {
        id: 3,
        name: "Ashley",
        score: 0
      },
      {
        id: 4,
        name: "James",
        score: 0
      }
    ]
  }

  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: prevState.players[index].score += delta
    }))
  }

  handleAddPlayer = (name) => {
    let newPlayer = {
      name,
      score: 0,
      id: this.prevPlayerId += 1
    }

    this.setState(prevState => ({
      players: prevState.players.concat(newPlayer)
    }))
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => ({
      players: prevState.players.filter( player => player.id !== id )
    }))
  }

  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);

    if (highScore) {
      return highScore
    }

    return null;
  }

  render() {
    return (
      <ScoreboardContext.Provider value={{
        players: this.state.players,
        actions: {
          changeScore: this.handleScoreChange,
          removePlayer: this.handleRemovePlayer,
          addPlayer: this.handleAddPlayer,
          getHighScore: this.getHighScore
        }
      }}>
        { this.props.children }
      </ScoreboardContext.Provider>
    )
  }
}

export const Consumer = ScoreboardContext.Consumer;
