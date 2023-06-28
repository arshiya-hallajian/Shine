import React from 'react';
import "./ContactCard.css"

const ContactCard = ({ U_img, name, city, title, title2, Skills, Github }) => {
    return (
        <div className='contact_card_body'>
            <div class="card-container">
                <img class="round" src={U_img} alt="user" />
                <h3>{name}</h3>
                <h6>{city}</h6>
                <p>{title}<br /> {title2}</p>
                <div class="buttons">
                    <button class="button type1">
                        <span class="btn-txt">Message</span>
                    </button>
                    <a href={Github}><button class="button type1">
                        <span class="btn-txt">Github</span>
                    </button></a>
                </div>
                <div class="skills">
                    <h6>: Skills</h6>
                    <ul>
                        <li>{Skills[0]}</li>
                        <li>{Skills[1]} </li>
                        <li>{Skills[2]}</li>
                        <li>{Skills[3]}</li>
                        <li>{Skills[4]}</li>
                        <li>{Skills[5]}</li>
                        <li>{Skills[6]}</li>


                    </ul>
                </div>
            </div>

        </div>
    );
};

export default ContactCard;