import React from 'react';


const Header = (props) => (
  <header>
    <h1>{ props.title }</h1>
    <div className="stats">Players: { props.totalPlayers }</div>
  </header>
)


export default Header;