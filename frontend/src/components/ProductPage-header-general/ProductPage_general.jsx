import React, { useState } from 'react';
import './ProductPage_general.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsSearch, BsPerson } from 'react-icons/bs';
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineMenu, AiOutlineTeam, AiOutlinePhone } from 'react-icons/ai';
import { BiSearch, BiHomeAlt, BiStore, BiGitCompare, BiLogIn } from 'react-icons/bi';
import { Link } from 'react-router-dom';
export default function ProductPage_general() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='ProductPage-header-general'>

        <button onClick={handleShow}>
          <AiOutlineMenu />
        </button>


        <img src=" https://dev-wp.ir/goldpluss/wp-content/themes/woodmart/images/wood-logo-dark.svg" alt="" />

        <img src="https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/Group-160-1.png" alt="" className='ProductPage-general-first-logo' />
        <section>
          <input type="text" placeholder='جستجو برای محصولات' />
          <a href="#"><BsSearch className='ProductPage-general-serarch-icon' /></a>
        </section>
        <div>
          <a href="#">
            <span>1</span>
            <AiOutlineHeart />
          </a>
          <a href="#">
            <span>1</span>
            <AiOutlineShoppingCart />
          </a>
          <a href="#">
            <BsPerson />
          </a>
        </div>



        <Offcanvas className='offcanvas-2' placement='end' show={show} onHide={handleClose}>
          <Offcanvas.Header >
            <Offcanvas.Title>
              <div className='PP_general_canvas_searchbar'>
                <form action="">
                  <input type="text" placeholder='جستجو محصولات' />
                  <button className='canvas_searchbar_submit'><BiSearch /></button>
                </form>
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className='canvas_body'>
              <ul className='canvas_body_items'>

                <li><span><BiHomeAlt /></span> <Link to="/">خانه اصلی</Link></li>
                <li><span><BiStore /></span><Link to="/Category"> فروشگاه</Link></li>
                <li> <span><AiOutlineTeam /></span><Link to="/ContactUs">درباره ما</Link> </li>
                <li><span><BiGitCompare /></span><Link to="/">مورد علاقه ها</Link> </li>
                <li className='border-0'><span><BiLogIn /></span><Link to="/Login">ورود | ثبت نام</Link> </li>


              </ul>

              <section>
                <p>Shine Like A Diamond</p>
              </section>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      <nav className="ProductPage-nav">
        <ul>
          <Link to='/'><li>خانه</li></Link>
          <Link to='/Category'> <li>فروشگاه</li></Link>
          <Link to='/ContactUs'><li>درباره ما</li></Link>
          <Link to='/Login'><li>ورود / ثبت نام</li> </Link>
        </ul>
      </nav>

    </>
  )
}
