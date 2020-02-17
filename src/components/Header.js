import React from 'react';
import Stats from './Stats';


const Header = (props) => (
  <header>
  	<Stats players={ props.players } />
    <h1>{ props.title }</h1>
  </header>
)


export default Header;