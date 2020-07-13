import React from 'react'

export default function ForgotPassword() {
    return (
    <div className="container content-container d-flex">
       <form className="form-signin">
       
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only mb-3">Email address</label>
            <input  type="email" id="inputEmail" className="form-control mb-3" placeholder="Email address" required=""/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Envoyer nouveau mot de passe</button>
        </form>
    </div>
    )
}
