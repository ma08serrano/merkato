import React from 'react';
import Product from './Product';
import data from '../../data';

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
