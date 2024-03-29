import React from 'react'
import { useState } from 'react';

export default function Signin(props) {

  const [newUser, setNewUser] = useState({});

  const handleChange = (e) => {
      const user = {...newUser};
      user[e.target.name] = e.target.value;
      //console.log(user);
      setNewUser(user);
  };

  return (
    <>
<main className="main-content mt-0">
    <section>
      <div className="page-header min-vh-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
              <div className="card card-plain">
                <div className="card-header pb-0 text-start">
                  <h4 className="font-weight-bolder">Sign In</h4>
                  <p className="mb-0">Enter your email and password to sign in</p>
                </div>
                <div className="card-body">
                  <form role="form" onSubmit={props.submit}>
                    <div className="mb-3">
                      <input type="text" className="form-control form-control-lg" id="username" name="username" placeholder="Username" aria-label="Username" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                      <input type="password" className="form-control form-control-lg" id="password" name="password" placeholder="Password" aria-label="Password" onChange={handleChange} />
                    </div>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign in</button>
                    </div>
                  </form>
                </div>
                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                  <p className="mb-4 text-sm mx-auto">
                    Don't have an account?
                    <a href="/signup" className="text-primary text-gradient font-weight-bold">Sign up</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
              <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
                <img src="/assets/img/shapes/pattern-lines.svg" alt="pattern-lines" className="position-absolute opacity-4 start-0" />
                <div className="position-relative">
                  <img className="max-width-500 w-100 position-relative z-index-2" src="/assets/img/illustrations/chat.png" alt="chat-img" />
                </div>
                <h4 className="mt-5 text-white font-weight-bolder">Dev. Legends</h4>
                <p className="text-white">Experience is the name everyone gives to their mistakes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
    </>
  )
}
