import React, { Component } from 'react';


class AddPlayerForm extends Component {
	state = {
		value: ''
	}

	handleValueChange = (e) => {
		const { value } = e.target;

		this.setState({
			value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addPlayer(this.state.value);

		this.setState({
			value: ''
		});
	}

	render() {
		return (
			<form onSubmit={ this.handleSubmit }>
				<input 
					type="text" 
					value={ this.state.value }
					onChange={ (e) => this.handleValueChange(e) }
					placeholder="Enter a player's name"
				/>
				<input
					type="submit"
					value="Add Player"
				/>
			</form>
		)
	}
}


export default AddPlayerForm;