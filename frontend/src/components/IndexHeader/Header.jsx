import React from "react";
import "./header.css";
import { BiSearchAlt, BiUser, BiLogInCircle } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  // let fixScroll = document.querySelector("div #scroll");
  // window.addEventListener("scroll", function(){
  //   let scrollTop = window.scrollY;
  //   let AllHeight = document.body.clientHeight;
  //   let inerHeight = window.innerHeight;
  //   let scrollPercent = scrollTop / (AllHeight - inerHeight)
  //   let scrollPercentRound = Math.ceil(scrollPercent * 99.5)
  //   fixScroll.style.width= scrollPercentRound + "%";
  // })

  return (
    <>
      <header className="index-header">
        {/* Custom Scrool */}
        <div id="scroll"></div>

        <div className="header_backgruond"></div>

        <section className="navbar">
          <button
            class="offcanvas-btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"
          >
            <AiOutlineMenu />
          </button>

          <button className="hambur-menu">
            <img src="images/hambur-menu.png" alt="hamber-menu" />
          </button>

          <ul className="list-right">
            <li>
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link to="/category">فروشگاه</Link>
            </li>
            <li>
              <Link to="/login">ورود</Link>
            </li>
            <li>
              <Link to="/signup">ثبت نام</Link>
            </li>
          </ul>

          <div className="logo-div">
            <img
              className="logo"
              src="images/header-image3.png"
              alt="Site Logo"
            />
          </div>
          <ul className="list-left">
            <li>
              <a href="#">
                <BiUser />
              </a>
            </li>
            <span>|</span>
            <li>
              <a href="#">
                <AiOutlineShoppingCart />
              </a>
            </li>
            <span>|</span>
            <li>
              <a href="#">
                <AiOutlineHeart />
              </a>
            </li>
            <span>|</span>
            <li>
              <a href="#">
                <BiSearchAlt />
              </a>
            </li>
          </ul>
          <div className="shop-icon-mibile-size">
            <a href="#">
              <AiOutlineShoppingCart />
            </a>
            <a href="#">
              <AiOutlineHeart />
            </a>
          </div>
        </section>
        <div
          class="offcanvas offcanvas-top"
          tabIndex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
        >
          <div class="offcanvas-header">
            <h5 id="offcanvasTopLabel">مانند الماس درخشان باش!</h5>
            <AiOutlineClose
              class="btn-close-icon"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div class="offcanvas-body">
            <ul>
              <a href="">
                {" "}
                <li>
                  {" "}
                  تماس با ما <FiPhoneCall className="offcanvas-icon" />
                </li>
              </a>
              <a href="#">
                {" "}
                <li>
                  ورود / ثبت نام <BiLogInCircle className="offcanvas-icon" />
                </li>
              </a>
              <a href="#">
                {" "}
                <li>
                  سبد خرید <AiOutlineShoppingCart className="offcanvas-icon" />
                </li>
              </a>
              <a href="#">
                {" "}
                <li>
                  علاقه مندی ها <AiOutlineHeart className="offcanvas-icon" />{" "}
                </li>
              </a>
              <a href="">
                {" "}
                <li>
                  {" "}
                  درباره ما <AiOutlineInfoCircle className="offcanvas-icon" />
                </li>
              </a>
              <a href="">
                {" "}
                <li>
                  {" "}
                  محصولات{" "}
                  <MdProductionQuantityLimits className="offcanvas-icon" />
                </li>
              </a>
              <a href="">
                {" "}
                <li>
                  {" "}
                  صفحه اصلی <AiOutlineHome className="offcanvas-icon" />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
