import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, img, price, description} = service;
    return (
        <div className='col service-card p-3'>
            <img src={img} className="img-fluid" alt={name} />
            <div className="service-text ps-3">
                <h5 className='mt-3'>{name}</h5>
                <p><small>{description}</small></p>
                <h3 className='service-price'>{price}</h3>
                <button className='btn card-btn'>Checkout</button>
            </div>
        </div>
    );
};

export default Service;