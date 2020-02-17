import React from 'react';
import Header from './Header';
import Player from './Player';


class App extends React.Component {
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

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: prevState.players[index].score += delta
    }))
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => ({
      players: prevState.players.filter( player => player.id !== id )
    }))
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={ this.state.players } />
        { this.state.players.map((player, index) => (
          <Player 
            key={ player.id } 
            id={ player.id }
            index={ index }
            name={ player.name }
            score={ player.score }
            changeScore={ this.handleScoreChange }
            removePlayer={ this.handleRemovePlayer }
          />
        )) }
      </div>
    )
  }
}


export default App;