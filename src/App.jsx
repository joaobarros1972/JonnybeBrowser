import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './Comp/Home'
import Servicos from './Comp/Servicos'
import Contactos from './Comp/Contactos'
import Error from './Comp/Error'
import About from './Comp/About'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container text-center">
      
      <h2>React Browser App</h2>
      <nav>
       <Link to='/' 
         className="btn btn-primary me-2">
         Home</Link>
       <Link to='/Servicos' 
         className="btn btn-primary me-2">
         Servicos</Link>
       <Link to='/Contactos' 
         className="btn btn-primary">
         Contactos</Link>     
      </nav>

      
      <Routes>
        <Route path='/' 
          element={<Home />}/>
        <Route path='/Servicos' 
          element={<Servicos />}/>
        <Route path='/Contactos' 
          element={<Contactos />}/>   
        <Route path='/About' 
          element={<About />}/>  
        <Route path='*' 
          element={<Error />}/>  
      </Routes>
      </div>
  );
}

export default App;