import React from 'react';
import './ProductPage.css';
import ProductTopbar from '../../components/ProductTopbar/ProductTopbar';
import ProductPage_general from '../../components/ProductPage-header-general/ProductPage_general';
import Comments from '../../components/Comments/Comments';

export default function ProductPage() {
    return (
        <div className='ProductPage'>
            <ProductTopbar />
            <ProductPage_general />
            <Comments />
        </div>
    )
}
