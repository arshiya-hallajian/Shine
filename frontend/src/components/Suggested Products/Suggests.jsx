import React from 'react';
import Suggest from './Suggest';
import "./Suggests.css"

const Suggests = () => {
    return (
        <div className='container'>
            <h4><span className='pipe'>|</span>محصولات پیشنهادی</h4>

            <div className="components">
                <Suggest img="https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/5-min.jpg" title="دستبند ستاره" price="000'25 تومان" />
                <Suggest img="https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/3-min.jpg" title="گردن بند قلب" price="000'25 تومان" />
                <Suggest img="https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/12-min.jpg" title="گردن بند نگین" price="000'25 تومان" />
                <Suggest img="https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/9-min.jpg" title="گردن بند نقره" price="000'25 تومان" />
                <Suggest img="https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/6-1-min.jpg" title="گردن بند ستاره" price="000'25 تومان" />

            </div>

        </div>
    );
};

export default Suggests;