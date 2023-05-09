import React from 'react';
import Suggest from './Suggest';
import "./Suggests.css"
import { Swiper,SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "swiper/css/navigation";

const Suggests = () => {
    return (
        <div className='container'>
            <h4><span className='pipe'>|</span>محصولات پیشنهادی</h4>

            <div className="components">

                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        450:{
                            slidesPerView: 2,
                            spaceBetween: 8,
                        },
                        800: {
                            slidesPerView: 3,
                            spaceBetween: 7,
                        },
                        
                        1364: {
                            slidesPerView: 5,
                            spaceBetween: 9,
                        },
                    }}

                    modules={[Pagination]}
                    className="mySwiperBlogs"
                >
                    <SwiperSlide>
                        <Suggest img="https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/5-min.jpg" title="دستبند ستاره" price="000'25 تومان" />

                    </SwiperSlide>
                    <SwiperSlide>
                        <Suggest img="https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/3-min.jpg" title="گردن بند قلب" price="000'25 تومان" />

                    </SwiperSlide>
                    <SwiperSlide>
                        <Suggest img="https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/12-min.jpg" title="گردن بند نگین" price="000'25 تومان" />

                    </SwiperSlide>
                    <SwiperSlide>
                        <Suggest img="https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/9-min.jpg" title="گردن بند نقره" price="000'25 تومان" />

                    </SwiperSlide>
                    <SwiperSlide>
                        <Suggest img="https://dev-wp.ir/goldpluss/wp-content/uploads/2022/03/6-1-min.jpg" title="گردن بند ستاره" price="000'25 تومان" />

                    </SwiperSlide>

                </Swiper>

            </div>

        </div>
    );
};

export default Suggests;