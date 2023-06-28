import React from 'react';
import "./header.css";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

const Header = () => {
  return (
    <>

      <header className='header'>
        <div className='header_backgruond'>

        </div>

        <section className='navbar'>



          <button className='hambur-menu'>
            <img src="images/hambur-menu.png" alt="" />
          </button>

          <ul className='list-right'>
            <li><a href="#">صفحه اصلی</a></li>
            <li><a href="#">محصولات</a></li>
            <li><a href="#">درباره ما</a></li>
            <li><a href="#">تماس با ما</a></li>
          </ul>
          <img className='logo' src="images/header-image3.png" alt="Site Logo" />

          <ul className='list-left'>
            <li><a href="#"><BiUser /></a></li> <span>|</span>
            <li><a href="#"><AiOutlineShoppingCart /></a></li><span>|</span>
            <li><a href="#"><AiOutlineHeart /></a></li><span>|</span>
            <li><a href="#"><BiSearchAlt /></a></li>

          </ul>


        </section>

      </header>

    </>
  )
}

export default Header;