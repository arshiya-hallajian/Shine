import React from 'react';
import Suggest from './Suggest';
import "./Suggests.css"

const Suggests = () => {
    return (
        <div className='container'>
            <h4>محصولات پیشنهادی</h4>

            <div className="components">
                <Suggest img="https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/9-min.jpg" title="گردن بند کیری" price="000'25 تومان" />
                <Suggest img="https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/9-min.jpg" title="گردن بند کیری" price="000'25 تومان" />
                <Suggest img="https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/9-min.jpg" title="گردن بند کیری" price="000'25 تومان" />
                <Suggest img="https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/9-min.jpg" title="گردن بند کیری" price="000'25 تومان" />
                <Suggest img="https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/9-min.jpg" title="گردن بند کیری" price="000'25 تومان" />

            </div>

        </div>
    );
};

export default Suggests;