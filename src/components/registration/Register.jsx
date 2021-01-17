import React from 'react';

export default function Register() {
  return (
    <div className='container-fluid'>
      <div className='container'>
        <div className='row justify-content-center mt-4 mb-4'>
          <img src="./img/images/merkato.svg" className='credential-logo' alt='Logo' />
        </div>

        <div className='row justify-content-center'>
          <div className='register-card'>
            <div className='container mt-4 mb-4'>
              <div className='credential-title text-center'>
                <h1>Create your account</h1>
              </div>
            </div>

            <div className='container'>
              <form className='form-group'>
                <div className='row justify-content-center'>
                  <div className='col-md-5'>
                    <label className='input-title text-uppercase'>
                      First Name
                    </label>

                    <div className='input-group'>
                      <input
                        type='text'
                        name=''
                        className='form-control input-fname mb-3'
                        value=''
                        placeholder='John'
                      />
                    </div>
                  </div>

                  <div className='col-md-5'>
                    <label className='input-title text-uppercase'>
                      Last Name
                    </label>

                    <div className='input-group'>
                      <input
                        type='text'
                        name=''
                        className='form-control input-lname mb-3'
                        value=''
                        placeholder='Doe'
                      />
                    </div>
                  </div>
                </div>

                <div className='row justify-content-center'>
                  <div className='col-md-10'>
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
                  <div className='col-md-5'>
                    <label className='input-title text-uppercase'>
                      Password
                    </label>

                    <div className='input-group'>
                      <input
                        type='text'
                        name=''
                        className='form-control input-password mb-3'
                        value=''
                        placeholder='Password'
                      />
                    </div>
                  </div>

                  <div className='col-md-5'>
                    <label className='input-title text-uppercase'>
                      Confirm Password
                    </label>

                    <div className='input-group'>
                      <input
                        type='text'
                        name=''
                        className='form-control input-repassword mb-3'
                        value=''
                        placeholder='Re-enter password'
                      />
                    </div>
                  </div>
                </div>

                <div className='row justify-content-center'>
                  <div className='col-md-10'>
                    <div className='register-policy text-center mt-3 mb-3'>
                      <p>
                        By creating an account, you are agreeing to Merkato's
                        privacy policy and terms of use. You also agree to
                        receive exclusive offers via email; you can
                        unsubscribe at any time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='row justify-content-center'>
                  <div className='col-md-5'>
                    <div className='create-container'>
                      <button
                        type='button'
                        name='button'
                        className='btn create-btn text-uppercase mb-4'
                      >
                        Create Account
                      </button>
                    </div>
                  </div>
                </div>

                <div className='row justify-content-center'>
                  <div className='col-md-9'>
                    <div className='register-pOr text-center'>
                      <p>
                        <span className='px-3'>or</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className='row justify-content-center'>
                  <div className='col-md-5'>
                    <div className='reg-login-container mt-2 mb-2'>
                      <button
                        type='button'
                        name='button'
                        className='btn reg-login-btn text-uppercase'
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className='register-footer mt-4 mb-4'>
        <div className='row justify-content-center'>
          Copyright © 2021 Merkato, 2021 - 2021. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

