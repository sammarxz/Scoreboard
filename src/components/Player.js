import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter.js'
import Icon from './Icon';


class Player extends PureComponent {

	static propTypes = {
		changeScore: PropTypes.func.isRequired,
		removePlayer: PropTypes.func.isRequired,
		name: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		index: PropTypes.number.isRequired,
		score: PropTypes.number.isRequired,
		isHighScore: PropTypes.bool
	}

	render() {  
		const { id, index, name, score, changeScore, removePlayer } = this.props;

		return (
			<div className="player">
		    <span className="player-name">
		      <button className="remove-player" onClick={ () => removePlayer(id) } >✖</button>
		      <Icon isHighScore={this.props.isHighScore} />
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