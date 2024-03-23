import React from 'react';
import "./ContactCards.css";
import ContactCard from "./ContactCard"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "swiper/css/navigation";


const ContactCards = () => {
    return (
        <div className='Cards'>


            <ContactCard U_img='images/Arta.jpg' name="Arta" city="Shiraz" title="Blockchain Programmer" title2="Front-end Developer" Skills={["Frontend", "Blockchain", "JavaScript", "React", "Solidity", "SEO", "Marketing", "Flexbox"]} Github="https://github.com/arta-01" />
            <ContactCard U_img='images/Arshiya.jpg' name="Arshiya" city="Ramsar" title="Back-end Developer" title2="Fullstack Developer" Skills={["Backend", "Node.js", "JS", "React", "Tailwind", "mySql", "PHP"]} Github="https://github.com/arshiya-hallajian" />
            <ContactCard U_img='images/Shahin.jpg' name="Shahin" city="Shiraz" title="Front-end Developer" title2="sabzlearn" Skills={["Frontend", "JavaScript", "React", "Tailwind", "Flexbox", "PWA", "Bootstrap"]} Github="https://github.com/KasraMg" />
            <ContactCard U_img='images/meti.jpg' name="Mehdi" city="tehran" title="Back-end Developer" title2="DevOps" Skills={["Backend", "Node.js", "JS", "React", "python", "noSql", "typescript", "devops"]} Github="https://github.com/elliotWoas" />

        </div>
    );
};

export default ContactCards;