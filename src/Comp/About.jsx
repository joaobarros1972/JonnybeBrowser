import React from 'react';
import {Link} from 'react-router-dom'
 

function About() {
  return (
    <div className="row mt-3 justify-content-center">
      <div className="col-4 bg-light card p-3">
        <h2>Autor:</h2>
        <h4>Joao Barros</h4>
      </div>
        <Link to="/">Home</Link>
    </div>
  );
}

export default About;