import React from 'react';

class Navbar extends React.Component {
    render() { 
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <h1 className="navbar-brand"> To-Do list</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    
  </div>
</nav>
        );
    }
}
 
export default Navbar;