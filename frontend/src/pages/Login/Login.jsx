import React,{useState} from 'react'
import "./Login.css"
import ProductPage_general from '../../components/ProductPage-header-general/ProductPage_general'
import ProductTopbar from '../../components/ProductTopbar/ProductTopbar'
import { Formik, Form, Field,   } from "formik";
import {AiOutlineEye,AiOutlineEyeInvisible}from 'react-icons/ai'
const Login = () => {
const [showPassword,setShowPassword]=useState(false)
const [error,setError]=useState(false)

	const passIconHandler=()=>{
		setShowPassword(prev=>!prev)
	}

	return (

		<div className="Login_SignUp login">
			<ProductTopbar />
			<ProductPage_general />

			<Formik
				validate={(values) => {
					const errors = {};

					if (values.name == "") {
						errors.name = "وارد کردن نام اجباری می‌باشد";
						setError(true)
					} else if (values.name.length < 4){
						errors.name = "طول نام حداقل باید ۴ کاراکتر باشد";
						setError(true)
					}else{
						setError(false)
					}

				    if (values.pass === "") {
                        errors.pass = "وارد کردن نام اجباری می‌باشد";
						setError(true)
                    } else if (values.pass.length < 4) {
                        errors.pass = "طول نام حداقل باید ۴ کاراکتر باشد";
						setError(true)
                    }
                     if (error) {
						return errors
					 }
				}}
				initialValues={{ name: "", pass: "" }}
				onSubmit={(values) => {
					console.log("Form Inputs Data =>", values);
				}} >

				{({ values, handleChange, handleSubmit, errors, touched }) => ( 
					<Form onSubmit={handleSubmit}>

						<p className='login-title'>ورود به حساب کاربری</p>
						<div className="hr"></div>
						<main >
							<div className="group">
								<label className="label">نام کاربری</label>

								<Field name="name" placeholder='ارشیا'  type="text"  />
								
								{errors.name && touched.name && errors.name}
							</div>
							<div className="group">
								<label className="label">رمز عبور</label>
								<Field name="pass" placeholder='arshiya@8585'  type={!showPassword?"password":"text"} />
								{errors.pass && touched.pass && errors.pass}
								{!showPassword ?(
										<AiOutlineEyeInvisible  onClick={passIconHandler}   className='pass-icon'/>
								):( 
									<AiOutlineEye onClick={passIconHandler} className='pass-icon'/>
								)}
							
							</div>
							<div className="group group-checkBox mt-4">
								<input id="check" type="checkbox" />
								<label className='mx-2' > من را عضو نگه دار</label>
							</div>
							 
							<button type="submit" className=' login-btn mt-5' >
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

export default Login