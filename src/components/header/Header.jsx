import React from 'react';

export default function Header() {
    return (
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
    );
}