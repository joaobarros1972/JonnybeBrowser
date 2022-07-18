import React from 'react';
import {Link} from 'react-router-dom' 

function Servicos() {
  return (
    <>
    <div className="row mt-3 justify-content-center">
      <div className="col-4 bg-light card p-3">
        <h2>Servicos</h2>
      </div>
    </div>  
      <Link to="/About">About</Link>
    </>
  );
}

export default Servicos;