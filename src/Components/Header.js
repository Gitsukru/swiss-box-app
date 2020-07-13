import React from 'react';

import {
  Link
} from "react-router-dom";

function Header(props) {
    return (
<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
  <h5 className="my-0 mr-md-auto font-weight-normal">Swiss-box</h5>
  <nav className="my-2 my-md-0 mr-md-3">
  <Link className="mx-2 text-dark" to="/">Home</Link>
  <Link className="mx-2 text-dark" to="/Storage-sites">Les sites de Stockages</Link>
  <Link className="mx-2 text-dark" to="/Price-list">Liste de prix</Link>
  <Link className="mx-2 text-dark" to="/Abouts">A propos</Link>
  <Link className="mx-2 text-dark" to="/Contact">Contact</Link>
  
  </nav>
  <Link className="mx-2 btn btn-outline-primary" to="/Login">Se connecter</Link>
</div>
    )
}

export default Header;