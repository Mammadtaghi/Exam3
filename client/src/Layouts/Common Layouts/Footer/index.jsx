import React from 'react'
import style from "./index.module.scss";

function Footer() {
    return (
        <>
            <div id={style.Footer}>
                <div className={style.container}>
                    <div className={style.topPart}>
                        <div className={style.list}>
                            <div className={style.imgBox}>
                                <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
                            </div>
                            <ul className={style.footList}>
                                <li><p>
                                    Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.
                                </p></li>
                            </ul>
                        </div>

                        <div className={style.list}>
                            <h1 className={style.listTitle}>Quick Links</h1>
                            <ul className={style.footList}>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Blog</li>
                                <li>Pages</li>
                            </ul>
                        </div>
                        
                        <div className={style.list}>
                            <h1 className={style.listTitle}>New Products</h1>
                            <ul className={style.footList}>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Blog</li>
                                <li>Pages</li>
                            </ul>
                        </div>
                        
                        <div className={style.list}>
                            <h1 className={style.listTitle}>Support</h1>
                            <ul className={style.footList}>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Blog</li>
                                <li>Pages</li>
                            </ul>
                        </div>
                    </div>

                    <div className={style.bottomPart}>
                        <p>Copyright ©2024 All rights reserved | This template is made with <i className="fa-solid fa-heart" style={{ color: '#ff0000' }}></i> by Colorlib</p>
                        <div className={style.icons}>
                            <i style={{ cursor: 'pointer' }} className="fa-brands fa-twitter"></i>
                            <i style={{ cursor: 'pointer' }} className="fa-brands fa-facebook-f"></i>
                            <i style={{ cursor: 'pointer' }} className="fa-brands fa-behance"></i>
                            <i style={{ cursor: 'pointer' }} className="fa-solid fa-globe"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer