import React from 'react'
import "./Login.css"
import ProductPage_general from '../../components/ProductPage-header-general/ProductPage_general'
import ProductTopbar from '../../components/ProductTopbar/ProductTopbar'
const Login = () => {

	return (

		<div className="Login_SignUp">
			<ProductTopbar/>
			<ProductPage_general/>
			<form action="">
				<div className="login-wrap">
					<div className="login-html">
						
							<input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label htmlFor="tab-1" className="tab tab1">ورود</label>
						<input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab tab2">ثبت نام</label>
						
						
						<div className="login-form">
							<div className="sign-in-htm">
								<div className="group">
									<label htmlFor="user" className="label">نام کاربری</label>
									<input autoComplete='off' id="user" type="text" className="input" />
								</div>
								<div className="group">
									<label htmlFor="pass" className="label">رمز عبور</label>
									<input id="pass1" type="password" className="input" data-type="password" />
								</div>
								<div className="group group-checkBox">
									<input id="check"   type="checkbox" className="check span-checkBox" />
									<label className='mx-2' htmlFor="check"> من را عضو نگه دار</label>
								</div>
								<div className="group">
									<input type="submit" className="button" value="ورود به حساب کاربری" />
								</div>
								<div className="hr"></div>
								<div className="foot-lnk">
									<a href="#forgot">گذرواژه را فراموش کرده اید ؟</a>
								</div>
							</div>
							<div className="sign-up-htm">
								<div className="group">
									<label htmlFor="user" className="label">نام کاربری</label>
									<input autoComplete='off' id="user1" type="text" className="input" />
								</div>
								<div className="group">
									<label htmlFor="pass" className="label">رمز عبور</label>
									<input id="pass2" type="password" className="input" data-type="password" />
								</div>
								<div className="group">
									<label htmlFor="pass" className="label">تکرار رمز عبور</label>
									<input id="pass3" type="password" className="input" data-type="password" />
								</div>
								<div className="group">
									<label htmlFor="pass" className="label">آدرس ایمیل</label>
									<input id="email" type="email" className="input" />
								</div><br />
								<div className="group">
									<input type="submit" className="button" value=" ثبت نام" />
								</div>
								<div className="hr"></div>
								<div className="foot-lnk">
									<label htmlFor="tab-1"> عضو هستید ؟</label>
								</div>
							</div>
						</div>
					</div>
					<div class="drops">

					<div class="drop drop-1"></div>
					<div class="drop drop-2"></div>
					<div class="drop drop-3"></div>
					<div class="drop drop-4"></div>
					<div class="drop drop-5"></div>

				</div>
				</div>

				
			</form>
		 
		</div>

	)
}

export default Login