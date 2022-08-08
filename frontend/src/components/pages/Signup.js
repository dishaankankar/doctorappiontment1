import React from "react";
import {Link} from "react-router-dom"
function Contactus() {
  return (
    <div>
      <section >
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              {/* <h4>Register</h4> */}
            </div>
            {/* <div className="col-md-8 my-auto">
              <h6 className="float-end">Home / Contact Us</h6>
            </div> */}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 ">
                  <h4>Join Practo</h4>
                  <label className="mb-1">Are you a Doctor? </label>
                  <Link to="/">Register Here</Link>
                 
              <div><Link to="/login">Login</Link></div>
                  <hr />
                  <div className="form-group">
                    <label className="mb-1">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile No"
                    ></input>
                  </div>
                  <div className="form-group">
                   <label className="mb-1">Speacilised Field</label>
                   <input
                        type="text"
                        className="form-control"
                        placeholder="Specialised Field"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Create Password</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Password"
                    ></input>
                  </div>
                  
                  <div className="form-group py-3">
                    <button
                      type="button"
                      className="btn btn-primary shadow w-100"
                    >
                      SignUp
                    </button>
                  </div>
                </div>
                
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactus;
