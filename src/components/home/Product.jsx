import React from 'react';
import Rating from './Rating';

export default function Product(props) {
    const { product } = props;
    return (
        <div className='col-md-3'>
            <a href='#'>
                <div className='item'>
                    <div className='item-img'>
                        <img src={product.image} />
                    </div>
                    <div className='item-name pt-2'>
                        <h4>{product.name}</h4>
                    </div>
                    <Rating rating={product.rating}></Rating>
                    <div className='item-price'>${product.price}</div>
                </div>
            </a>
        </div>
    )
}