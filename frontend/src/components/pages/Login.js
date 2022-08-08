import React from "react";

function Login() {
  return (
    <div>
      <section >
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>Login</h4>
              <hr/>
            </div>
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
                  
                  <hr />
                  <div className="form-group">
                    <label className="mb-1">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile No"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Password</label>
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
                      Login
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

export default Login;
