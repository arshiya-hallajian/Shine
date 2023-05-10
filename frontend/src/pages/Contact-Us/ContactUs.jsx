import React from 'react';
import "./ContactUs.css"
import ProductTopbar from '../../components/ProductTopbar/ProductTopbar';
import ProductPage_general from '../../components/ProductPage-header-general/ProductPage_general';

const ContactUs = () => {
    return (
        <div className='ContactUs_Page'>
            <ProductTopbar />
            <ProductPage_general />

            <hr className='hr_Line' />

            <div className="aboutUs">
                <h3>درباره ما</h3>
                <p className='about_text'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و و  </p>
                <img src="https://cdn.seeklearning.com.au/media/images/career-guide/module/programmer.jpg" alt="aboutUs" />
            </div>
<br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default ContactUs;