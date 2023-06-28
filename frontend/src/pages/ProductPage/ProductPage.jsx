import React from 'react';
import './ProductPage.css';
import ProductTopbar from '../../components/ProductTopbar/ProductTopbar';
import ProductPage_general from '../../components/ProductPage-header-general/ProductPage_general';
import Comments from '../../components/Comments/Comments';
import Suggests from '../../components/Suggested Products/Suggests';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { AiFillYoutube, AiOutlineHeart, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { ImFacebook } from 'react-icons/im';
import { BsPinterest } from 'react-icons/bs';
export default function ProductPage() {
    return (
        <div className='ProductPage'>
            <ProductTopbar />
            <ProductPage_general />

            <Breadcrumb
                links={[
                    { id: 1, title: "خانه", to: "/", isThisEnd: false },
                    {
                        id: 2,
                        title: "گردنبند",
                        to: "/",
                        isThisEnd: false
                    },
                    {
                        id: 3,
                        title: "گردنبند طرح ستاره",
                        to: "/"
                        , isThisEnd: true
                    },
                ]}
            />

            <main>
                <div className='product-page-parent'>
                    <div className="ProductPage-img">
                        <img src="https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/9-min.jpg" alt="image" />
                    </div>


                    <div className="ProductPage-detail">
                        <p className="ProductPage-detail-title">گردن بند طرح ستاره</p>
                        <span>معمولا انتخاب هدیه در روز ولنتاین یکی از سخت ترین انتخاب های ممکن برای جوانان است. ما در پست قبلی به کادوهای ولنتاین پرداختیم. در این پست نیز خرسهای ولنتاین را معرفی می‌کنیم.</span>

                        <ul>
                            <li>عطر :خنک</li>
                            <li>مخصوص: آقایان</li>
                            <li>سایز :200 گرم</li>
                        </ul>

                        <p className='ProductPage-price'>250.000 تومان</p>

                        <section>
                            <button>افزودن به سبد خرید</button>
                            <div className='ProductPage-number'>
                                <div>-</div>
                                <p>1</p>
                                <div>+</div>
                            </div>
                        </section>

                        <button className='add-to-favorite'>افزودن به علاقه مندی <AiOutlineHeart /></button>

                        <hr />
                        <p className='vazirlight'>دسته: گردنبند</p>
                        <div className="share">
                            <p>اشتراک گذاری :</p>
                            <a href=""><AiOutlineTwitter /></a>
                            <a href=""><AiOutlineInstagram /></a>
                            <a href=""><ImFacebook /></a>
                            <a href=""><AiFillYoutube /></a>
                            <a href=""><BsPinterest /></a>
                        </div>
                    </div>
                </div>



                <div className="ProductPage-feature">
                    <p className="ProductPage-feature-title">ویژگی های محصول</p>
                    <hr />
                    <ul>
                        <li>کاملا ضد حساسیت برای پوست</li>
                        <li>حاوی 70 درصد الکل خالص</li>
                        <li>رنگ ماندگار و دایمی</li>
                        <li>جنس مرغوب و ضخیم</li>
                        <li>قابل حمل و سبک</li>
                        <li>آنتی باکتریال و ضدعفونی شده</li>
                        <li>گیره محکم و مرغوب</li>
                        <li>قابل تنظیم برای اندازه مختلف</li>
                        <li>قابل شستشو</li>

                    </ul>
                </div>

            </main>

            <Comments />
            <Suggests />



        </div>
    )
}
