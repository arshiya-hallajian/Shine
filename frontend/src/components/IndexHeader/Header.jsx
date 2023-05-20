import React from 'react';
import "./header.css";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import {MdProductionQuantityLimits} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
import { AiOutlineShoppingCart,AiOutlineMenu,AiOutlineClose,AiOutlineHome,AiOutlineInfoCircle } from "react-icons/ai";
import { BiUser } from "react-icons/bi";


const Header = () => {
  return (
    <>

      <header className='header'>
        <div className='header_backgruond'>

        </div>

        <section className='navbar'>

        <button class="offcanvas-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><AiOutlineMenu/></button>





          <button className='hambur-menu'>
            <img src="images/hambur-menu.png" alt="hamber-menu" />
          </button>

          <ul className='list-right'>
            <li><a href="#">صفحه اصلی</a></li>
            <li><a href="#">محصولات</a></li>
            <li><a href="#">درباره ما</a></li>
            <li><a href="#">تماس با ما</a></li>
          </ul>

      <div className='logo-div'>
        <img className='logo' src="images/header-image3.png" alt="Site Logo" />
      </div>
          



          <ul className='list-left'>

            <li><a href="#"><BiUser /></a></li><span>|</span>
            <li><a href="#"><AiOutlineShoppingCart /></a></li><span>|</span>
            <li><a href="#"><AiOutlineHeart /></a></li><span>|</span>
            <li><a href="#"><BiSearchAlt /></a></li>

          </ul>


          <div className="shop-icon-mibile-size">
          <a href="#"><AiOutlineShoppingCart /></a> 
          <a href="#"><AiOutlineHeart /></a> 
                
    
          </div>

        </section>

       

        <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
          <div class="offcanvas-header">
            <h5 id="offcanvasTopLabel">الماس فروشی آرتا و برادران به جز ارشیا</h5>
            <AiOutlineClose  class="btn-close-icon" data-bs-dismiss="offcanvas" aria-label="Close"/>
          
          </div>
          <div class="offcanvas-body">
          <ul>
            <li>صفحه اصلی <AiOutlineHome className='offcanvas-icon'/></li>
            <li> درباره ما <AiOutlineInfoCircle className='offcanvas-icon'/></li>
            <li> محصولات <MdProductionQuantityLimits className='offcanvas-icon'/></li>
            <li> تماس با ما <FiPhoneCall className='offcanvas-icon'/></li>
          </ul>
          </div>
        </div>
      </header>

    </>
  )
}

export default Header;






