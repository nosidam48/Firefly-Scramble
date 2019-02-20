import React from 'react';
import "./style.css"

function FireCard(props) {
  return (
    <div onClick={() => props.handleClick(props.cards)} className="char-pic">
    <img alt={props.cards.name} src={props.cards.image}/>
    </div>
  )
  
}

export default FireCard