import React from 'react';
import "./footer.css"

const footer = () => {
  return (
    <div>

      <footer class="main_footer">
        <div class="container">
          <div class="footer_kenar">
            <div class="footer_card">
              <h4>_ درباره ما</h4>
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحانگرافیک است. چاپگرها و متون بلکه روزنامه و مجله درستون و سطرآنچنان که لازماست و برای..</p>
            </div>
          </div>


          <div class="footer_vasat">
            <div class="footer_card">
              <h4> دسته بندی ها</h4>
              <ul>
                <li><a href="#"> گوشواره</a> </li>
                <li><a href="#"> ساعت</a> </li>
                <li><a href="#"> گردنبند</a> </li>
                <li><a href="#"> انگشتر</a> </li>
                <li><a href="#"> دستبند</a> </li>
              </ul>
            </div>
          </div>

          <div class="footer_vasat">
            <div class="footer_card">
              <h4>راه های ارتباطی</h4>
              <ul>
                <li><span>تماس:09178376279</span> </li>
                <li><span>تلفن:XXX-XXXXX</span> </li>
                <li><span> ایمیل:arta.dev21@gmail.com</span></li>
                <li><span>آدرس:لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.</span> </li>
              </ul>
            </div>
          </div>

          <div class="footer_kenar">
            <div class="footer_card">

              <div class="footer_namad">
                <img src="images/enamad.png" alt="E-nemad" />
                <img src="images/neshan_meli.jpg" alt="neshan-melli" />
              </div>
            </div>
          </div>

          <div class="clearfix"></div>

          <hr class="border-hr" />

          <div class="under_footer">
            <p>تمامی حقوق سایت محفوظ میباشد.</p>

            <div class="under_footer_icons">
              <a href=""><img src="assets/image/icon/instagram.svg" alt="" /></a>

              <a href=""><img src="assets/image/icon/telegram.svg" alt="" /></a>

              <a href=""><img src="assets/image/icon/twitter.svg" alt="" /></a>


            </div>

          </div>

        </div>
      </footer>

    </div>
  )
}

export default footer