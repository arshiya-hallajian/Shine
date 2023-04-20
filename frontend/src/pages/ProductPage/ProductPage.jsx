import React from 'react';
import './ProductPage.css';
import ProductTopbar from '../../components/ProductTopbar/ProductTopbar';
import ProductPage_general from '../../components/ProductPage-header-general/ProductPage_general';
import Comments from '../../components/Comments/Comments';
import Suggests from '../../components/Suggested Products/Suggests';

export default function ProductPage() {
    return (
        <div className='ProductPage'>
            <ProductTopbar />
            <ProductPage_general />
            <Comments />
            <Suggests />


            <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}
