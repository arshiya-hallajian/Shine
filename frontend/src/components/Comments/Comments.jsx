import React from 'react';
import "./Comments.css";

const Comments = () => {
    return (
        <div className='container product-page-comments'>
            <h4>دیدگاه ها</h4>

            <p>اولین نفری باشید که برای این محصول دیدگاهی را ثبت میکنید..</p>

            <label>نظر خود را وارد کنید :</label>

            <form action="">
                <textarea className='user-comment' name="User-comment" id="User-comment" ></textarea>

                <div className="inputs">
                    <label htmlFor="">نام:</label>
                    <input id='name' type="text" />

                    <label htmlFor="">ایمیل<span className='red-star'>*</span>:</label>
                    <input id='email' type="email" />
                </div>
                <div className="radio-btn">
                    <input id='check' type="checkbox" value="اطلاعات من ذخیره شود ." />
                    <label htmlFor="check">اطلاعات من ذخیره شود .</label>
                <input className='submit-btn' type="submit" value="ارسال" />
                </div>

                <br /><br />
            </form>


        </div>
    );
};

export default Comments;