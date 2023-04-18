import React from 'react';
import  './blogs.css'
import {MdOutlineTextsms} from 'react-icons/md'
import {AiOutlineShareAlt} from 'react-icons/ai'
const Blogs = ({ image, title, parag,date }) => {
    return (<>
        <div className='blogs-container'>
            <div className='header_blog'></div>
            <img src={image} className='blogs-avatar' alt='blog image' />
            
            <div className='blogs-card_body'>
                
                <strong><h4 className='blogs-card-title'>{title}</h4></strong>
                <div className='blogs-card-details'>
                    <p className='mb-0'>منتشر شده توسط</p>
                    <img src="https://secure.gravatar.com/avatar/315874c5f7a60aa9b79a1f41bf5a959b?s=32&d=mm&r=g" alt="bg-image" />
                    <a href="">Admina</a>
                    <MdOutlineTextsms className='blogs-icons'/>
                    <AiOutlineShareAlt className='blogs-icons'/>
                </div>
                <p className='blogs-card-paragraph'>{parag}</p>
                <div className='blogs-card-continiue mt-4'>
                    <a href="#">ادامه مطلب</a>
                </div>
            </div>

            <div className='blogs-date'>
                <p>{date} <span >آذر</span></p>
            </div>

        </div>
    </>
    );
};

export default Blogs;