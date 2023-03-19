
import React from 'react'
import './Home.css'
import WhyThisShop from '../../components/whyThisShop/WhyThisShop'
import HomeIntroProducts from '../../components/HomeIntroProducts/HomeIntroProducts'
export default function Home() {
  return (
    <div className='Home'>

      <div className='home-section-top'>
        <video  autoplay muted playsinline loop >
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
<span class="loader"></span>
</div>
      </div>

      <div className='why-this-shop'>
        <p className='why-this-shop-title'>چرا جواهری وودمارت</p>
        <img src="https://dev-wp.ir/goldpluss/wp-content/uploads/2022/12/Group-158.png" alt="" />
        <section>
          <WhyThisShop/>
          <WhyThisShop/>
          <WhyThisShop/>
        </section>
      </div>

    <main>
   

        <HomeIntroProducts PersianName={'گوشواره'} EnglishName={'Earrings'} Img={'https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/Group-158.png'} Intro={'برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'} />
        <HomeIntroProducts PersianName={'ساعت'}    EnglishName={'Watch'} Img={'https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/Group-157.png'} Intro={'برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'}/>
        <HomeIntroProducts PersianName={'گردنبند'} EnglishName={'Necklaces'} Img={'https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/1.png'} Intro={'برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'}/>
        <HomeIntroProducts PersianName={'گوشواره'} EnglishName={'Ring'} Img={'https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/Group-159.png'} Intro={'برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'}/>
  
    </main>
    </div>
  )
}
