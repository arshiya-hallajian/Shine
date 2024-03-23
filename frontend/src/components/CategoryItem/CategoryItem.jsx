import React from 'react';
import './CategoryItem.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { TfiShoppingCart } from 'react-icons/tfi';
import { GoSearch } from 'react-icons/go';
import { MdCompareArrows } from 'react-icons/md';
import necklaces1 from "../../assets/images/New-star-necklace.jpg"
export default function CategoryItem() {
    return (
        <div class="CategoryItem">
            <div class="CategoryItem-img ">
                <img src={necklaces1} alt="Snowy Mountains" />
            </div>

            <div class="CategoryItem-content">
                <p >گردن بند جدید ستاره</p>
                <div  >
                    <span>49.000 تومان </span>
                    <span>45.000 تومان</span>
                </div>
                <button class="CategoryItem-btn">افزودن به سبد خرید <span>&rarr;</span></button>
                <div className="CategoryItem-icons">
                    <div class="On-Sale-Cart-icon" target="_blank" draggable="false" data-tooltip='افزودن به سبد خرید'>
                        <TfiShoppingCart />
                    </div>

                    <div class="On-Sale-Cart-icon" target="_blank" draggable="false" data-tooltip='مشاهده سریع'>
                        <GoSearch />
                    </div>


                    <div class="On-Sale-Cart-icon" target="_blank" draggable="false" data-tooltip="افزودن به علاقه مندی ها">
                        <AiOutlineHeart />
                    </div>

                </div>
            </div>

        </div>
    )
}
