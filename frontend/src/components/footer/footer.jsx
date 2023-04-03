import React from 'react';
import "./footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";



const footer = () => {
  return (
    <>

      <footer className="main_footer">
        <div>
          <div className="footer_kenar">
            <div className="footer_card">
              <h4>_ درباره ما</h4>
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
            </div>
          </div>

          <div className="footer_vasat">
            <div className="footer_card">
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

          <div className="footer_vasat">
            <div className="footer_card">
              <h4>راه های ارتباطی</h4>
              <ul>
                <li><span>تماس:09178376279</span> </li>
                <li><span>تلفن:XXX-XXXXX</span> </li>
                <li><span> ایمیل:arta.dev21@gmail.com</span></li>
                <li><span>آدرس:شیراز-معالی آباد کوچه 32</span> </li>
              </ul>
            </div>
          </div>

          <div className="footer_kenar">
            <div className="footer_card">

              <div className="footer_namad">
                <img src="images/enamad.png" alt="E-nemad" />
                <img src="images/neshan_meli.jpg" alt="neshan-melli" />
              </div>
            </div>
          </div>

          <div className="clearfix"></div>

          <hr className="border-hr" />

          <div className="under_footer">
            <p>تمامی حقوق سایت محفوظ میباشد.</p>

            
            <div className="footer-social-icons">
              <a href="#"><AiFillInstagram /></a>
              <a href="#"><BsTelegram /></a>
              <a href="#"><AiOutlineTwitter /></a>
              <a href="https://github.com/arshiya-hallajian/Shine"><AiFillGithub /></a>

            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default footer;