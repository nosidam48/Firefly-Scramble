import React from 'react';
import "./style.css"

function Header(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
  <span id="title" className="navbar-brand mb-0 h1"><a id="title" target="_blank" href="https://en.wikipedia.org/wiki/Firefly_(TV_series)">Firefly Memory Mix-Up</a></span>
  <div className="navbar-text center" id="center-nav">{props.message}</div>
  <div className="navbar-text right" id="score-nav">Score: {props.score} | Top Score: {props.topScore}</div>
</nav>
  )
}

export default Header