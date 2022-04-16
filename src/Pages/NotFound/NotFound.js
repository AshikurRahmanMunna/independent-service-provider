import React from 'react';
import notFound from '../../images/notfound.webp';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='d-flex align-items-center justify-content-center bg'>
            <img src={notFound} alt="page not found" />
        </div>
    );
};

export default NotFound;