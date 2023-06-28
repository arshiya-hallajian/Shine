import React from 'react'
import './OnSaleCart.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { TfiShoppingCart } from 'react-icons/tfi'
import { GoSearch } from 'react-icons/go'
import { MdCompareArrows } from 'react-icons/md'
import { Link } from 'react-router-dom'
export default function OnSaleCart(props) {
  return (
    <Link to={`/Product/${props.sellerId}`} className='On-Sale-Cart'>
      <img src="https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/5-min.jpg" alt="" />
      <p className='mb-2 On-Sale-Cart-title'>{props.name}</p>
      <div dir='ltr'>
        <span style={{ textDecoration: 'line-through', color: 'gray' }}>{props.price * 2} تومان</span>
        <span style={{ color: ' rgb(191 167 114)' }} className='mx-1'>{props.price} تومان</span>

      </div>
      <hr />
      <div className="timer">
        <p> <span>1</span> روزها</p>
        <p> <span>01</span> ساعت</p>
        <p> <span>42</span> دقیقه</p>
        <p> <span>31</span> ثانیه</p>
      </div>
      <div className="On-Sale-Cart-icons">
        <div class="On-Sale-Cart-icon" target="_blank" draggable="false" data-tooltip='افزودن به سبد خرید'>
          <TfiShoppingCart />
        </div>

        <div class="On-Sale-Cart-icon" target="_blank" draggable="false" data-tooltip='مشاهده سریع'>
          <GoSearch />
        </div>

        <div class="On-Sale-Cart-icon" target="_blank" draggable="false" data-tooltip="مقایسه">
          <MdCompareArrows />
        </div>
        <div class="On-Sale-Cart-icon" target="_blank" draggable="false" data-tooltip="افزودن به علاقه مندی ها">
          <AiOutlineHeart />
        </div>

      </div>
      <span className='On-Sale-Cart-badge'>حراج</span>
    </Link>
  )
}
