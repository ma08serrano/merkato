import React from 'react';

export default function Footer() {
    return (
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
    );
}