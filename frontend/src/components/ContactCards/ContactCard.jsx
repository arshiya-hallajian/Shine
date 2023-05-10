import React from 'react';
import "./ContactCard.css"

const ContactCard = ({ U_img, name, city, title, title2 }) => {
    return (
        <div className='card_body'>
            <div class="card-container">
                <img class="round" src={U_img} alt="user" />
                <h3>{name}</h3>
                <h6>{city}</h6>
                <p>{title}<br /> {title2}</p>
                <div class="buttons">
                    <button class="button type1">
                        <span class="btn-txt">Message</span>
                    </button>
                    <button class="button type1">
                        <span class="btn-txt">Github</span>
                    </button>
                </div>
                <div class="skills">
                    <h6>: Skills</h6>
                    <ul>
                        <li>Blockchain</li>
                        <li>Front End </li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Solidity</li>
                        <li>SEO</li>


                    </ul>
                </div>
            </div>

        </div>
    );
};

export default ContactCard;