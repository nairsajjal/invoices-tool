import React from 'react';

import './App.css';

function App() {
  return (
    <div>
    <div className="container">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <h3 className="align-right text-center text-light">INVOICE GENERATOR</h3>
      </nav>

      
    </div>
    <div className="container">
      <div className="row">
          <div className="col-md-6 col-lg-6">

          </div>
          <div className="col-md-6 col-lg-6">
          <form className="form-inline" action="/action_page.php">
         <label htmlFor="email2" className="mb-2 mr-sm-2">Email:</label>
          <input type="text" className="form-control mb-2 mr-sm-2" id="email2" placeholder="Enter email" name="email" />
          <label htmlFor="pwd2" className="mb-2 mr-sm-2">Password:</label>
          <input type="text" className="form-control mb-2 mr-sm-2" id="pwd2" placeholder="Enter password" name="pswd" />
           <div className="form-check mb-2 mr-sm-2">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" name="remember" /> Remember me
          </label>
        </div>    
        
      </form>
          </div>
      </div>

    </div>
    </div>
  );
}

export default App;
