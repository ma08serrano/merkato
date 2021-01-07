import React, { Component } from 'react';
import logo from '../../img/images/merkato.svg';

class Login extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='container'>
          <div className='row justify-content-center mt-4 mb-4'>
            <img src={logo} className='credential-logo' alt='Logo' />
          </div>

          <div className='row justify-content-center'>
            <div className='login-card'>
              <div className='container mt-4 mb-4'>
                <div className='credential-title text-center'>
                  <h1>Sign in to your account</h1>
                </div>
              </div>

              <div className='container'>
                <form className='form-group'>
                  <div className='row justify-content-center'>
                    <div className='col-md-11'>
                      <label className='input-title text-uppercase'>
                        Email Address
                      </label>

                      <div className='input-group'>
                        <input
                          type='text'
                          name=''
                          className='form-control input-email mb-3'
                          value=''
                          placeholder='jdoe@gmail.com'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='row justify-content-center'>
                    <div className='col-md-11'>
                      <div className='continue-container'>
                        <button
                          type='button'
                          name='button'
                          className='btn continue-btn text-uppercase mb-4'
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className='row justify-content-center'>
                    <div className='col-md-11'>
                      <div className='login-pOr text-center'>
                        <p>
                          <span className='px-3'>or</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='row justify-content-center'>
                    <div className='col-md-11'>
                      <div className='new-account-container mt-2 mb-2'>
                        <button
                          type='button'
                          name='button'
                          className='btn new-account-btn text-uppercase'
                        >
                          Create new account
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <footer className='row justify-content-center'>
          <div className='col-md-11'>
            <div className='login-copyright mt-4'>
              Copyright © 2019 Merkato, 2019 - 2019.
            </div>

            <div className='login-reserved mb-4'>All Rights Reserved.</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Login;
