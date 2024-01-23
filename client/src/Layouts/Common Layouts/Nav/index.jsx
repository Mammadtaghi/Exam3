import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import style from "./index.module.scss";

function Nav() {
    return (
        <>
            <div id={style.Nav}>
                <div className={style.container}>
                    <div className={style.logoContainer}>
                        <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
                    </div>
                    <ul className={style.NavList}>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/add"}>Add</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/wishlist"}>Wishlist</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/basket"}>Basket</NavLink>
                        </li>
                        <li>
                            <Link>Blog</Link>
                        </li>
                        <li>
                            <Link>Pages</Link>
                        </li>
                        <li>
                            <Link>Contact</Link>
                        </li>
                    </ul>
                    <div className={style.iconBox}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <i className="fa-regular fa-user"></i>
                        <NavLink to={"/basket"}><i className="fa-solid fa-cart-shopping"></i></NavLink>
                        <NavLink to={"/wishlist"}><i className="fa-regular fa-heart"></i></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav