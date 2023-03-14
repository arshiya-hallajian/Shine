import React from 'react';
import "./header.css";


const Header = () => {
  return (
    <>

      <header className='header'>
        <div className='header_backgruond'>

        </div>

        <section className='navbar'>
          <img className='logo' src="images/header-image.png" alt="Site Logo" />

          {/* <ul className='list'>
          <li><a href="#">صفحه اصلی</a></li>
          <li><a href="#">محصولات</a></li>
          <li><a href="#">درباره ما</a></li>

          </ul> */}

        </section>

      </header>

    </>
  )
}

export default Header;