import React, { Component } from 'react';
import Product from './Product';
import data from '../../data';

class Home extends Component {
  render() {
    return (
      <div className='container-fluid m-0 p-0'>
        <div className='row store-header'>
          <div className='col-md-2 store-logo'>
            <a href='#'>
              <img src="./img/images/merkato.svg" alt='Merkato' width='180px' />
            </a>
          </div>

          <div className='col-md-8 store-catalog'>
            <div className='row'>
              <div className='col'>
                <a href='#'>
                  <h2>Home</h2>
                </a>
              </div>
              <div className='col'>
                <a href='#'>
                  <h2>Collections</h2>
                </a>
              </div>
              <div className='col'>
                <a href='#'>
                  <h2>Products</h2>
                </a>
              </div>
              <div className='col'>
                <a href='#'>
                  <h2>Blogs</h2>
                </a>
              </div>
              <div className='col'>
                <a href='#'>
                  <h2>Pages</h2>
                </a>
              </div>
            </div>
          </div>

          <div className='col-md-2 store-action'>
            <a href='#'>
              <img src="./img/images/search.svg" alt='Search' width='24px' />
            </a>
            <a href='#'>
              <img src="./img/images/cart.svg" alt='Cart' width='24px' />
            </a>
          </div>
        </div>

        <div className='row store-herobanner'>
          <div className='col'>
            <img src="./img/images/hero_banner.jpg" alt='Hero Banner' />
          </div>
        </div>

        <div className='row store-section'>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <h1>Trending Collection</h1>
              </div>
            </div>

            <div className='row section-items'>
              {
                data.products.map((product) => (
                  <Product key={product.id} product={product}></Product>
                ))
              }
            </div>

            <div className='row section-loadmore'>
              <div className='col-md-6 offset-md-3'>
                <a href='#'>Load More</a>
              </div>
            </div>
          </div>
        </div>

        <div className='row store-footer'>
          <div className='col'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6'>
                  <a href='#'>
                    <img src="./img/images/merkato.svg" alt='Merkato' width='240px' />
                  </a>

                  <div className='social-links'>
                    <a href='#'>
                      <img src="./img/images/facebook.svg" width='32px' alt='Facebook' />
                    </a>
                    <a href='#'>
                      <img src="./img/images/twitter.svg" width='32px' alt='Twitter' />
                    </a>
                    <a href='#'>
                      <img src="./img/images/instagram.svg" width='32px' alt='Instagram' />
                    </a>
                  </div>
                </div>

                <div className='col-md-3'>
                  <label>Merkato</label>
                  <ul>
                    <li>
                      <a href='#'>About Us</a>
                    </li>
                    <li>
                      <a href='#'>Terms and Conditions</a>
                    </li>
                    <li>
                      <a href='#'>Privacy Policy</a>
                    </li>
                  </ul>
                </div>

                <div className='col-md-3'>
                  <label>Customer Care</label>
                  <ul>
                    <li>
                      <a href='#'>Help Center</a>
                    </li>
                    <li>
                      <a href='#'>Shipping and Delivery</a>
                    </li>
                    <li>
                      <a href='#'>Questions</a>
                    </li>
                    <li>
                      <a href='#'>Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
