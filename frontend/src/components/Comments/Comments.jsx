import React from 'react';
import "./Comments.css";

const Comments = () => {
    return (
        <div className='container'>
            <h4>دیدگاه ها</h4>

            <p>اولین نفری باشید که برای این محصول دیدگاهی را ثبت میکنید</p>

            <label>نظر خود را وارد کنید :</label>

            <form action="">
                <textarea className='user-comment' name="User-comment" id="User-comment" ></textarea>

                <div className="inputs">
                    <label htmlFor="">نام:</label>
                    <input type="text" />

                    <label htmlFor="">ایمیل:</label>
                    <input type="email" />

                </div>
                    <br /><br /><br /><br /><br /><br />
            </form>


        </div>
    );
};

export default Comments;