import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter.js'


class Player extends PureComponent {

	static propTypes = {
		changeScore: PropTypes.func.isRequired,
		removePlayer: PropTypes.func.isRequired,
		name: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		index: PropTypes.number.isRequired,
		score: PropTypes.number.isRequired
	}

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