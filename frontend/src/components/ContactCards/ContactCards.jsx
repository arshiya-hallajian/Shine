import React from 'react';
import "./ContactCards.css";
import ContactCard from "./ContactCard"

const ContactCards = () => {
    return (
        <div className='Cards'>
            <ContactCard U_img='images/Arta.jpg' name = "Arta" city = "Shiraz" title="Blockchain Programmer" title2="Front-end Developer"/>
            <ContactCard U_img='images/Arshiya.jpg' name = "Arshya" city = "Ramsar" title="Back-end Developer" title2="Programmer"/>
            <ContactCard U_img='images/Shahin.jpg' name = "Shahin" city = "Shiraz" title="Front-end Developer" title2="Programmer"/>
            <ContactCard U_img='images/meti.jpg' name = "Mehdi" city = "Ardabil" title="Back-end Developer" title2="Programmer"/>

        </div>
    );
};

export default ContactCards;