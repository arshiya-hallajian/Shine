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

          <section>
            <div className="footer_kenar">
              <div className="footer_card">
                <h4 className='mb-2'>درباره جواهری ما</h4>
                <p className='vazirlight footer-about-text'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد </p>
              </div>
            </div>

            <div className="footer_vasat">
              <div className="footer_card mx-lg-5">
                <h4 className='fs-9'>دسترسی ها</h4>
                <ul>
                  <li><a href="we"> خانه</a> </li>
                  <li><a href="we"> فروشگاه</a> <span className='footer-span-badge'>جدید</span> </li>
                  <li><a href="ew"> درباره ما</a> </li>
                  <li><a href="we"> تماس با ما</a> </li>

                </ul>
              </div>
            </div>

            <div className="footer_vasat">
              <div className="footer_card">
                <h4 className='fs-9'>دسترسی ها</h4>
                <ul className='mt-4'>
                  <li><span className='vazirlight fs-8'><strong>تماس :</strong> 09178376279 </span> </li>
                  <li><span className='vazirlight fs-8'> <strong>تلفن :</strong> XXXXXXXX</span> </li>
                  <li id='spn3'><span className='vazirlight fs-8'> <strong> ایمیل :</strong> arta.dev21@gmail.com</span></li>
                  <li><span className='vazirlight fs-8'> <strong>آدرس :</strong>  شیراز معالی آباد کوچه ششم</span> </li>
                </ul>
              </div>
            </div>

            <div className="footer_kenar licens-1">
              <div id='namad' className="footer_card">
                <p>نماد های اعتماد به وودمارت گیفت</p>
                <div className="footer_namad">
                  <img src="images/enamad.png" alt="E-nemad" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXo2tOGrj_yyBevtlFzSTONyVYjjxH5cVmZg&usqp=CAU" alt="" />
                  <img src="images/neshan_meli.jpg" alt="neshan-melli" />
                </div>
              </div>
            </div>
          </section>
          <div className="clearfix"></div>

          <hr className="border-hr" />
          <div className="footer_kenar licens-2 mb-4">
              <div id='namad' className="footer_card">
                <p>نماد های اعتماد به وودمارت گیفت</p>
                <div className="footer_namad">
                  <img src="images/enamad.png" alt="E-nemad" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXo2tOGrj_yyBevtlFzSTONyVYjjxH5cVmZg&usqp=CAU" alt="" />
                  <img src="images/neshan_meli.jpg" alt="neshan-melli" />
                </div>
              </div>
            </div>
            <hr className="border-hr border-hr-2 w-100 " />
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