import React from 'react'

import {
    Link
  } from "react-router-dom";
export default function Login() {
    return (
    <div className="container content-container d-flex">
       <form className="form-signin">
       
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only mb-3">Email address</label>
            <input  type="email" id="inputEmail" className="form-control mb-3" placeholder="Email address" required=""/>
            <label htmlFor="inputPassword" className="sr-only mb-3">Password</label>
            <input  type="password" id="inputPassword" className="form-control mb-3" placeholder="Password" required=""/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <Link className="btn btn-link btn-block text-center" to="/Forgot-password">mot de passe oublié</Link>
            <p className="text-center mt-3">Ou</p>
            <Link className="btn btn-lg btn-outline-success btn-block" to="/Register">S'enregistrer</Link>
           
        </form>
    </div>
    )
}
