import React from 'react';
import Counter from './Counter.js'


const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={ () => props.removePlayer(props.id) } >✖</button>
      { props.name }
    </span>
    <Counter 
    	index={ props.index }
    	score={ props.score }
    	changeScore={ props.changeScore }
    />
  </div>
)


export default Player;