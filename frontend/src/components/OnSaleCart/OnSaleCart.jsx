import React from 'react'
import './OnSaleCart.css'
export default function OnSaleCart() {
  return (
    <div className='On-Sale-Cart'>
        <img src="https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/5-min.jpg" alt="" />
        <p className='mb-2 On-Sale-Cart-title'>دستبند ظریف دخترانه</p>
        <div dir='ltr'>
        <span style={{textDecoration:'line-through',color:'gray'}}>22.000 تومان</span>
            <span style={{ color:' rgb(191 167 114)'}} className='mx-1'>17.000 تومان</span>
         
        </div>
        <hr />
        <div className="timer">
            <p> <span>1</span> روزها</p>
            <p> <span>01</span> ساعت</p>
            <p> <span>42</span> دقیقه</p>
            <p> <span>31</span> ثانیه</p>
        </div>
        <span className='On-Sale-Cart-badge'>حراج</span>
    </div>
  )
}
