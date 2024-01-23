import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import style from "./index.module.scss";
import { useWishlist } from '../../../Context/wishlistContext';
import { useBasket } from '../../../Context/basketContext';

function Nav() {

    const [isOpen, setIsOpen] = useState(false)

    const { Wishlist, setWishlist, UpdateWishlist, isIn } = useWishlist()

    const { Basket, setBasket, AddBasket, RemoveBasket, Increase, Decrease, SubTotal } = useBasket()

    return (
        <>
            <div id={style.Nav}>
                <div className={style.container}>
                    <div className={style.logoContainer}>
                        <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
                    </div>
                    <ul className={style.NavList}>
                        <li>
                            <NavLink className={style.NavLink} to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={style.NavLink} to={"/add"}>Add</NavLink>
                        </li>
                        <li>
                            <NavLink className={style.NavLink} to={"/wishlist"}>Wishlist
                                <div className={style.count}>
                                    {Wishlist.length}
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={style.NavLink} to={"/basket"}>Basket
                                <div className={style.count}>
                                    {Basket.length}
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <Link className={style.NavLink}>Blog</Link>
                        </li>
                        <li>
                            <Link className={style.NavLink}>Pages</Link>
                        </li>
                        <li>
                            <Link className={style.NavLink}>Contact</Link>
                        </li>
                    </ul>
                    <div className={style.iconBox}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <i className="fa-regular fa-user"></i>
                        <NavLink to={"/basket"}><i className="fa-solid fa-cart-shopping"></i></NavLink>
                        <NavLink to={"/wishlist"}><i className={`fa-${Wishlist.length ? "solid" : "regular"} fa-heart`}></i></NavLink>
                    </div>
                    <div className={style.toggleBar} onClick={() => setIsOpen(!isOpen)}>
                        <i className={`fa-solid fa-${isOpen ? "xmark" : "bars"}`}></i>
                    </div>
                    <div className={style.resNav} style={isOpen ? { visibility: 'visible', opacity: '1' } : { visibility: 'hidden', opacity: '0' }}>
                        <NavLink className={style.NavLink} to={'/'}>Home</NavLink>
                        <NavLink className={style.NavLink} to={'/add'}>Add</NavLink>
                        <NavLink className={style.NavLink} to={'/wishlist'}>Wishlist
                            <div className={style.count}>
                                {Wishlist.length}
                            </div>
                        </NavLink>
                        <NavLink className={style.NavLink} to={'/basket'}>Basket
                            <div className={style.count}>
                                {Basket.length}
                            </div>
                        </NavLink>
                        <Link className={style.NavLink}>Blog</Link>
                        <Link className={style.NavLink}>Pages</Link>
                        <Link className={style.NavLink}>Contact</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav