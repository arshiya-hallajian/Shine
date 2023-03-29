import React, { useRef, useState } from "react";
import './Home.css'
import WhyThisShop from '../../components/whyThisShop/WhyThisShop'
import HomeIntroProducts from '../../components/HomeIntroProducts/HomeIntroProducts'

import OnSaleCart from '../../components/OnSaleCart/OnSaleCart'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import { Pagination } from "swiper";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { RxPinTop } from "react-icons/rx"

export default function Home() {
  window.addEventListener('scroll', function () {
    const toTop = document.querySelector('.to-top');
    if (window.pageYOffset > 400) {
      toTop.classList.add('active');
    } else {
      toTop.classList.remove('active');
    }
  })
  return (
    <div className='Home'>

      <div className='home-section-top'>
        <video autoplay muted playsinline loop >
          <source src="../../Home_video.mp4" type='video/mp4' />
        </video>

        <div className="home-title">
          <h4>shine bright like a diamond</h4>

          <p className='vazir'>( مانند الماس درخشان باش )</p>
        </div>

        <div className="ring">
          <img src="../Mask-Group-10-min.png" alt="" />
        </div>

        <div className="scrollButton">
          <span className="loader"></span>
        </div>
      </div>

      <div className='why-this-shop'>
        <p className='why-this-shop-title'>چرا جواهری وودمارت</p>
        <img src="https://dev-wp.ir/goldpluss/wp-content/uploads/2022/12/Group-158.png" alt="" />
        <section>
          <WhyThisShop />
          <WhyThisShop />
          <WhyThisShop />
        </section>
      </div>

      <main>


        <HomeIntroProducts PersianName={'گوشواره'} EnglishName={'Earrings'} Img={'https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/Group-158.png'} Intro={'برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'} />
        <HomeIntroProducts PersianName={'ساعت'} EnglishName={'Watch'} Img={'https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/Group-157.png'} Intro={'برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'} />
        <HomeIntroProducts PersianName={'گردنبند'} EnglishName={'Necklaces'} Img={'https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/1.png'} Intro={'برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'} />
        <HomeIntroProducts PersianName={'گوشواره'} EnglishName={'Ring'} Img={'https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/Group-159.png'} Intro={'برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'} />

      </main>

      <div className="on-sale">

        <section>
          <p className="on-sale-title mb-2 mt-3">طلا را در حراج بخرید !!!</p>
          <span className='vazirlight'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحانگرافیک است. چاپگرها و متون بلکه روزنامه و مجلهدرستون و سطرآنچنان که لازماست و برای.شرایط فعلی تکنولوژی مورد نیاز بزارهای کاربردی می باشد</span>
        </section>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },


            1364: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]} className="mySwiper Home-swiper">
          <SwiperSlide>
            <OnSaleCart />
          </SwiperSlide>
          <SwiperSlide>
            <OnSaleCart />
          </SwiperSlide>
          <SwiperSlide>
            <OnSaleCart />
          </SwiperSlide>
          <SwiperSlide>
            <OnSaleCart />
          </SwiperSlide>
          <SwiperSlide>
            <OnSaleCart />
          </SwiperSlide>

        </Swiper>
      </div>
      {/* Back to Top Button  */}
      <a href="#" className="to-top">
        <i className="btn-icon"><img src="images/backtotop2.png" alt="" /></i>
      </a>
    </div>
  )
}