import React from "react";
import { Link } from "react-router-dom";

import "./Breadcrumb.css";

export default function Breadcrumb({ links }) {
  return (
    <section className="breadcrumb">
  
        <div className="breadcrumb__content">
          <ul className="breadcrumb__list">
            {links.map((link) => (
              <li className="breadcrumb__item" key={link._id}>
                <Link to={`/${link.to}`} className="breadcrumb__link">
                  <div className={link.isThisEnd ? 'mx-2 active-breadcrumb' : 'mx-2'}>{link.title}  {link.isThisEnd ? '' : <div>/</div>}    </div>
                
                </Link>
              </li>
            ))}
          </ul>
        </div>

    </section>
  );
}
