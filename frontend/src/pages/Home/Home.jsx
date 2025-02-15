import React, { useEffect, useState } from "react";
import './Home.css'
import WhyThisShop from '../../components/whyThisShop/WhyThisShop'
import HomeIntroProducts from '../../components/HomeIntroProducts/HomeIntroProducts'
import OnSaleCart from '../../components/OnSaleCart/OnSaleCart'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "swiper/css/navigation";
 
//import images 
import Necklaces1 from '../../assets/images/Necklaces-one.jpg'
import Necklaces2 from "../../assets/images/Necklaces-tow.jpg"

import Blogs from "../../components/blogs/Blogs"
import Header from '../../components/IndexHeader/Header'

export default function Home() {
  const [onSale, setOnSale] = useState()
  // window.addEventListener('scroll', function () {
  //   const toTop = document.querySelector('.to-top');
  //   if (window.pageYOffset > 400) {
  //     toTop.classList.add('active');
  //   } else {
  //     toTop.classList.remove('active');
  //   }
  // })

  let video = document.querySelector("#video-back")
  window.addEventListener("load", () => {
    video.play()
  })


  useEffect(() => {
    fetch('https://shine-back.vercel.app/api/product')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setOnSale(data.data)
      })
  }, [])


  return (
    <>
      <Header />
      <div className='Home'>
        <div className='home-section-top'>
          <video id="video-back" autoPlay muted playsInline loop >
            <source src="../../Home_video.mp4" type='video/mp4' />
            Your browser does not support the video tag..!!
          </video>

          <div className="home-title">
            <h4>Shine bright like a diamond</h4>

            <p className='vazir'>( مانند الماس درخشان باش )</p>
          </div>

          <div className="ring">
            <img src="../Mask-Group-10-min.png" alt="mask-group" />
          </div>

          <div className="scrollButton">
            <span className="loader"></span>
          </div>
        </div>

        <div className='why-this-shop'>
          <p className='why-this-shop-title'>چرا جواهری وودمارت</p>
          <img src="https://demoes.aramis-co.ir/goldplus3/wp-content/uploads/2022/07/Group-158.png" alt="why-image" />
          <section>
            <WhyThisShop />
            <WhyThisShop />
            <WhyThisShop />
          </section>
        </div>

        <main>


          <HomeIntroProducts PersianName={'گوشواره'} EnglishName={'Earrings'} Img={'https://demoes.aramis-co.ir/goldplus3/wp-content/uploads/2022/03/Group-158.png'} Intro={'برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'} />
          <HomeIntroProducts PersianName={'ساعت'} EnglishName={'Watch'} Img={'https://demoes.aramis-co.ir/goldplus3/wp-content/uploads/2022/03/Group-157.png'} Intro={'برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'} />
          <HomeIntroProducts PersianName={'گردنبند'} EnglishName={'Necklaces'} Img={"https://demoes.aramis-co.ir/goldplus3/wp-content/uploads/2022/03/Group-158.png"} Intro={'برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'} />
          <HomeIntroProducts PersianName={'گوشواره'} EnglishName={'Ring'} Img={'https://demoes.aramis-co.ir/goldplus3/wp-content/uploads/2022/03/Group-159.png'} Intro={'برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'} />

        </main>

        {onSale && (

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
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1800: {
                  slidesPerView: 2,
                  spaceBetween: 2,
                }
              }}
              modules={[Pagination]} className="mySwiper Home-swiper">
              {onSale.slice(0, 6).map(data => (
                <SwiperSlide>
                  <OnSaleCart {...data} />
                </SwiperSlide>
              ))}


            </Swiper>
          </div>
        )
        }

        <div className="order">
          <div className="order-bg"> </div>
          <section>
            <div>
              <p className="vazir mt-1">خاص بودن برازنده <span style={{ color: '#f0cc80' }}>شما</span>ست ....</p>
              <p className="mt-3" style={{ color: ' #FFFFFF21' }}>Being unique is your graceunique</p>
              <p className="vazirlight">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،  <br></br>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>

              <div className="order-btns">
                <button>ثبت سفارش طراحی</button>
                <button>درخواست مشاوره و راهنمایی</button>
              </div>
            </div>
            <img width={322} height={408} src="images/Group-168-min (1).png" alt="image" />

          </section>
        </div>

        {/* Back to Top Button  */}
        <a href="#" className="to-top">
          <i className="btn-icon"><img src="images/backtotop2.png" alt="icon" /></i>
        </a>


        {/* Blogs */}

        <hr className="hr-line" />
        <div className="blogs-content mt-5">

          <h4 className="con-h4">مطالب وبلاگ</h4>
          <p>Blog content</p>

          <section className="blog_card">






            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                800: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },


                1364: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
              }}

              modules={[Pagination]}
              className="mySwiperBlogs"
            >
              <SwiperSlide>
                <Blogs date='10 ' image={Necklaces1} title="قصد هدیه گرفتن دارید ؟" parag="
					
به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا حذف کنید، سپس نو..." />
              </SwiperSlide>
              <SwiperSlide>
                <Blogs date='10 ' image={Necklaces2} title="خرید هدیه ارزان و کاربردی" parag="
					
          به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا حذف کنید، سپس نو..." />
              </SwiperSlide>
              <SwiperSlide>
                <Blogs date='10 ' image={Necklaces1} title="به سلایق و علایق توجه کنید!" parag="
					
به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا حذف کنید، سپس نو..." />
              </SwiperSlide>
              <SwiperSlide>
                <Blogs date='10 ' image={Necklaces2} title="قصد هدیه گرفتن دارید ؟" parag="
					
          به وردپرس خوش آمدید. این اولین نوشتهٔ شماست. این را ویرایش یا حذف کنید، سپس نو..." />
              </SwiperSlide>

            </Swiper>






          </section>
        </div>



      </div>
    </>

  )
}


