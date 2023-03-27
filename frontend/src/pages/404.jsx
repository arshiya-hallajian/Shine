import React from 'react';
import "./404.css";

const PageNotFound = () => {

    const container = document.querySelector('#container');
   
    
    window.onmousemove = function(e){
        let x = e.clientX / 5; 
        let y = e.clientY / 5;
        
        container.style.backgroundPositionX = x + "px";
        container.style.backgroundPositionY = y + "px";
    
    }

    return (
        <div>
            
         <div id="container">

                 <div className="content">
            <h2>404</h2>
            <h4>Oops .! Page not found</h4>
            <p>صفحه مورد نظر شما پیدا نشد لطفا بعدا دوباره تلاش کنید ..!</p>
            <a href="#">برگشت به خانه</a>
                  </div>
          </div>
    
        </div>
    );
};

export default PageNotFound;