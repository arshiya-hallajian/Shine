import React, { useState } from 'react';
import ProductPage_general from '../../components/ProductPage-header-general/ProductPage_general';
import ProductTopbar from '../../components/ProductTopbar/ProductTopbar';
import './SignUp.css';
import { Formik, Form, Field } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
    const [showRepeatPassword, setShowRepeatPassword] = useState(false)

    const passIconHandler = () => {
        setShowPassword(prev => !prev)
    }
    const repeatPassIconHandler = () => {
        setShowRepeatPassword(prev => !prev)
    }

    return (

        <div className="Login_SignUp SignUp">
            <ProductTopbar />
            <ProductPage_general />

            <Formik
                validate={(values) => {
                    const errors = {};

                    if (values.name === "") {
                        errors.name = "وارد کردن نام اجباری می‌باشد";
                    } else if (values.name.length < 4) {
                        errors.name = "طول نام حداقل باید ۴ کاراکتر باشد";
                    }

                    if (values.pass === "") {
                        errors.pass = "وارد کردن نام اجباری می‌باشد";
                    } else if (values.pass.length < 4) {
                        errors.pass = "طول نام حداقل باید ۴ کاراکتر باشد";
                    }

                    if (values.repeatPass === "") {
                        errors.repeatPass = "وارد کردن نام اجباری می‌باشد";
                    } else if (values.repeatPass.length < 4) {
                        errors.repeatPass = "طول نام حداقل باید ۴ کاراکتر باشد";
                    }


                    if (values.email === "") {
                        errors.email = "وارد کردن ایمیل اجباری می‌باشد";
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = "ایمیل وارد شده معتبر نیست";
                    }


                    return errors;
                }}
                initialValues={{ name: "", email: "", pass: "", repeatPass: "" }}
                onSubmit={(values) => {
                    console.log("Form Inputs Data =>", values);
                }} >

                {({ values, handleChange, handleSubmit, errors, touched }) => (
                    <Form >

                        <p className='SignUp-title'>ایجاد به حساب کاربری</p>
                        <div className="hr"></div>
                        <main >
                            <div className="group">
                                <label className="label">نام کاربری</label>
                                <Field placeholder='عرشیا' name="name" type="text" />

                            </div>
                            <div className="group">
                                <label className="label">رمز عبور</label>
                                <Field placeholder='arshiya@gmail.com' name="pass" type={!showPassword ? "password" : "text"} />
                                {!showPassword ? (
                                    <AiOutlineEyeInvisible onClick={passIconHandler} className='pass-icon' />

                                ) : (
                                    <AiOutlineEye onClick={passIconHandler} className='pass-icon' />
                                )}
                            </div>
                            <div className="group">
                                <label className="label">تکرار رمز عبور</label>
                                <Field placeholder='arshiya@gmail.com' name="repeatPass" type={!showRepeatPassword ? "password" : "text"} />
                                {!showRepeatPassword ? (
                                    <AiOutlineEyeInvisible onClick={repeatPassIconHandler} className='pass-icon' />

                                ) : (
                                    <AiOutlineEye onClick={repeatPassIconHandler} className='pass-icon' />
                                )}
                            </div>

                            <div className="group">
                                <label className="label">ایمیل</label>
                                <Field placeholder='arshiya@gmail.com' name="email" type="email" />
                            </div>



                            <button type='submit' className="SignUp-btn mt-5" >
                                ورود به حساب کاربری
                            </button>

                            <div className="hr mt-5"></div>

                            <a id='forgot' href="#forgot">گذرواژه را فراموش کرده اید ؟</a>

                        </main>




                        <div className="drops">

                            <div className="drop drop-1"></div>
                            <div className="drop drop-2"></div>
                            <div className="drop drop-3"></div>
                            <div className="drop drop-4"></div>
                            <div className="drop drop-5"></div>

                        </div>



                    </Form>
                )}
            </Formik>
        </div>
    )
}
