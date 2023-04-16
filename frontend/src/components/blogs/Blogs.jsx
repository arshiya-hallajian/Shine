import React from 'react';
import styles from "./Blogs.module.css";

const Blogs = ({ image, title, parag }) => {
    return (<>
        <div className={styles.container}>
            <div className={styles.header_blog}></div>
            <img src={image} alt='blog image' />

            <div className={styles.card_body}>
                <strong><h4 className={styles.title}>{title}</h4></strong>
                <p className={styles.paragraph}>{parag}</p>
                <div className={styles.continiue}>
                    <a href="#">ادامه مطلب</a>
                </div>
            </div>

        </div>
    </>
    );
};

export default Blogs;