import React, { Component } from 'react';

import logo from '../../img/images/merkato.svg';
import search from '../../img/images/search.svg';
import cart from '../../img/images/cart.svg';
import hero_banner from '../../img/images/hero_banner.jpg';
import facebook from '../../img/images/facebook.svg';
import twitter from '../../img/images/twitter.svg';
import instagram from '../../img/images/instagram.svg';

import items_1 from '../../img/items/items_1.jpg';
import items_2 from '../../img/items/items_2.jpg';
import items_3 from '../../img/items/items_3.jpg';
import items_4 from '../../img/items/items_4.jpg';
import items_5 from '../../img/items/items_5.jpg';
import items_6 from '../../img/items/items_6.jpg';
import items_7 from '../../img/items/items_7.jpg';
import items_8 from '../../img/items/items_8.jpg';

class Home extends Component {
  render() {
    return (
      <div className='container-fluid m-0 p-0'>
        <div className='row store-header'>
          <div className='col-md-2 store-logo'>
            <a href='#'>
              <img src={logo} alt='Merkato' width='180px' />
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
              <img src={search} alt='Search' width='24px' />
            </a>
            <a href='#'>
              <img src={cart} alt='Cart' width='24px' />
            </a>
          </div>
        </div>

        <div className='row store-herobanner'>
          <div className='col'>
            <img src={hero_banner} alt='Hero Banner' />
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
              <div className='col-md-3'>
                <a href='#'>
                  <div className='item'>
                    <div className='item-img'>
                      <img src={items_1} />
                    </div>
                    <div className='item-name pt-2'>
                      <h4>Sample Item 1</h4>
                    </div>
                    <div className='item-price'>$99.00</div>
                  </div>
                </a>
              </div>

              <div className='col-md-3'>
                <a href='#'>
                  <div className='item'>
                    <div className='item-img'>
                      <img src={items_2} />
                    </div>
                    <div className='item-name pt-2'>
                      <h4>Greentea sales high quality korean knitting dress</h4>
                    </div>
                    <div className='item-price'>$89.00</div>
                  </div>
                </a>
              </div>

              <div className='col-md-3'>
                <a href='#'>
                  <div className='item'>
                    <div className='item-img'>
                      <img src={items_3} />
                    </div>
                    <div className='item-name pt-2'>
                      <h4>Sweater sexy Long Sleeve Striped Dress</h4>
                    </div>
                    <div className='item-price'>$119.00</div>
                  </div>
                </a>
              </div>

              <div className='col-md-3'>
                <a href='#'>
                  <div className='item'>
                    <div className='item-img'>
                      <img src={items_4} />
                    </div>
                    <div className='item-name pt-2'>
                      <h4>Boho sexy white blouse</h4>
                    </div>
                    <div className='item-price'>$129.00</div>
                  </div>
                </a>
              </div>
            </div>

            <div className='row section-items'>
              <div className='col-md-3'>
                <a href='#'>
                  <div className='item'>
                    <div className='item-img'>
                      <img src={items_4} />
                    </div>
                    <div className='item-name pt-2'>
                      <h4>Square waist pants terno pants</h4>
                    </div>
                    <div className='item-price'>$99.00</div>
                  </div>
                </a>
              </div>

              <div className='col-md-3'>
                <a href='#'>
                  <div className='item'>
                    <div className='item-img'>
                      <img src={items_5} />
                    </div>
                    <div className='item-name pt-2'>
                      <h4>Boho women summer beach</h4>
                    </div>
                    <div className='item-price'>$89.00</div>
                  </div>
                </a>
              </div>

              <div className='col-md-3'>
                <a href='#'>
                  <div className='item'>
                    <div className='item-img'>
                      <img src={items_6} />
                    </div>
                    <div className='item-name pt-2'>
                      <h4>Korean summer bodycon sleeveless sexy dress</h4>
                    </div>
                    <div className='item-price'>$119.00</div>
                  </div>
                </a>
              </div>

              <div className='col-md-3'>
                <a href='#'>
                  <div className='item'>
                    <div className='item-img'>
                      <img src={items_7} />
                    </div>
                    <div className='item-name pt-2'>
                      <h4>Korean sexy bodycon mini formal dress</h4>
                    </div>
                    <div className='item-price'>$129.00</div>
                  </div>
                </a>
              </div>
            </div>

            <div className='row section-items'>
              <div className='col-md-3'>
                <a href='#'>
                  <div className='item'>
                    <div className='item-img'>
                      <img src={items_8} />
                    </div>
                    <div className='item-name pt-2'>
                      <h4>Sample Item 1</h4>
                    </div>
                    <div className='item-price'>$99.00</div>
                  </div>
                </a>
              </div>

              <div className='col-md-3'>
                <a href='#'>
                  <div className='item'>
                    <div className='item-img'>
                      <img src={items_1} />
                    </div>
                    <div className='item-name pt-2'>
                      <h4>Greentea sales high quality korean knitting dress</h4>
                    </div>
                    <div className='item-price'>$89.00</div>
                  </div>
                </a>
              </div>

              <div className='col-md-3'>
                <a href='#'>
                  <div className='item'>
                    <div className='item-img'>
                      <img src={items_2} />
                    </div>
                    <div className='item-name pt-2'>
                      <h4>Sweater sexy Long Sleeve Striped Dress</h4>
                    </div>
                    <div className='item-price'>$119.00</div>
                  </div>
                </a>
              </div>

              <div className='col-md-3'>
                <a href='#'>
                  <div className='item'>
                    <div className='item-img'>
                      <img src={items_3} />
                    </div>
                    <div className='item-name pt-2'>
                      <h4>Boho sexy white blouse</h4>
                    </div>
                    <div className='item-price'>$129.00</div>
                  </div>
                </a>
              </div>
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
                    <img src={logo} alt='Merkato' width='240px' />
                  </a>

                  <div className='social-links'>
                    <a href='#'>
                      <img src={facebook} width='32px' alt='Facebook' />
                    </a>
                    <a href='#'>
                      <img src={twitter} width='32px' alt='Twitter' />
                    </a>
                    <a href='#'>
                      <img src={instagram} width='32px' alt='Instagram' />
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
