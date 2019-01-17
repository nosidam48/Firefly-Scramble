import React from 'react';
import "./style.css"

function Jumbotron() {
    return (
      <div className='jumbotron'>
      <h1 id="headline" className="text-center">Firefly Memory Clicker</h1>
      <h4 id="text-body" className="text-center">Click the images of the Firefly characters to increase your score. If you click the same image twice, you lose!</h4>
      </div>
    )
  }

export default Jumbotron