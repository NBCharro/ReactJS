import React from 'react';
// import classes from './ProductDetail.module.css';
import { useParams } from 'react-router-dom';

const ProductDetail = props => {
    // Request to a API, to backend, etc
    const params = useParams();
    console.log(params.productId);
    return (
        <section>
            <h1>Product Detail</h1>
            <p>{params.productId}</p>
        </section>
    );
};

export default ProductDetail;
