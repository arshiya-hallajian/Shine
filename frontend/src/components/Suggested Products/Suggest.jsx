import "./Suggest.css";

import React from 'react';

const Suggest = ({ img, title, price }) => {
    return (
        <div className="container">
            <div className="product-body">
                <img src={img} alt="" />
                <p className="pro-title" href="">{title}</p>
                <p className="price">{price}</p>
            </div>
        </div>
    );
};

export default Suggest;