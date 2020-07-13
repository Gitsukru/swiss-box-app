import React from 'react'

export default function Register() {
    return (
    <div className="container content-container ">
       <form className="needs-validation mt-5">
       <h1 className="h3 mb-3 font-weight-normal">Please register</h1>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName">First name</label>
            <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName">Last name</label>
            <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
            <div className="invalid-feedback">
              Valid last name is required.
            </div>
          </div>
        </div>

        

        <div className="mb-3">
          <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
          <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
          <div className="invalid-feedback">
            Please enter a valid email address for shipping updates.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
          <div className="invalid-feedback">
            Please enter your shipping address.
          </div>
        </div>

        

        <div className="row">
          <div className="col-md-5 mb-3">
            <label htmlFor="country">Country</label>
            <select className="custom-select d-block w-100" id="country" required="">
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="state">State</label>
            <select className="custom-select d-block w-100" id="state" required="">
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="zip">Zip</label>
            <input type="text" className="form-control" id="zip" placeholder="" required=""/>
            <div className="invalid-feedback">
              Zip code required.
            </div>
          </div>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1"> J'ai lu et J'accepte les termes et conditions</label>
      </div>
        <button class="btn btn-primary btn-lg btn-block" type="submit">Enregister</button>
      </form>
    </div>
    )
}
