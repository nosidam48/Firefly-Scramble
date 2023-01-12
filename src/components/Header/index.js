import React from 'react';
import "./style.css"

function Header(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <ul>
  <li id="title"><a target="_blank" href="https://en.wikipedia.org/wiki/Firefly_(TV_series)">Firefly Memory Mix-Up</a></li>
  <li className="navbar-text center" id="center-nav">{props.message}</li>
  <li className="navbar-text right" id="score-nav">Score: {props.score} | Top Score: {props.topScore}</li>
  </ul>
</nav>
  )
}

export default Header