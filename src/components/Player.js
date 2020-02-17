import React, { PureComponent } from 'react';
import Counter from './Counter.js'


class Player extends PureComponent {
	render() {  
		const { id, index, name, score, changeScore, removePlayer } = this.props;

		return (
			<div className="player">
		    <span className="player-name">
		      <button className="remove-player" onClick={ () => removePlayer(id) } >✖</button>
		      { name }
		    </span>
		    <Counter 
		    	index={ index }
		    	score={ score }
		    	changeScore={ changeScore }
		    />
		  </div>
		)
	}
}


export default Player;