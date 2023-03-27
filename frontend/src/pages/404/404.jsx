import React from 'react';
import "./404.css";
import { Link } from 'react-router-dom';

const PageNotFound = () => {

    window.onmousemove = function(ev){
    let Container = document.getElementById("container");
        let x = ev.clientX / 5;
        let y = ev.clientY / 5;
        Container.style.backgroundPositionX = x + "px";
        Container.style.backgroundPositionY = y + "px";

    }

    return (
        <div>

            <div id="container">
                <div className="content">
                    <h2>404</h2>
                    <h4>Oops .! Page not found</h4>
                    <p>صفحه مورد نظر شما پیدا نشد لطفا بعدا دوباره تلاش کنید ..!</p>
                    <Link to="/">برگشت به خانه</Link>
                </div>
            </div>

        </div>
    );

};

export default PageNotFound;