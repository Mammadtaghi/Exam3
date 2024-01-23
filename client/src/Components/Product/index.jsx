import React from 'react'
import style from "./index.module.scss";
import { useWishlist } from '../../Context/wishlistContext';
import { useBasket } from '../../Context/basketContext';

function Product({ item }) {

    const { Wishlist, setWishlist, UpdateWishlist, isIn } = useWishlist()

    const { Basket, setBasket, AddBasket, RemoveBasket, Increase, Decrease } = useBasket()

    return (
        <>
            <div id={style.Product}>
                <div className={style.imgBox}>
                    <img src={item.image} alt="" />
                    <button onClick={()=>AddBasket(item)} className={style.addBtn}>Add To Cart</button>
                </div>
                <div className={style.textBox}>
                    <h3 className={style.title}>{item.title}</h3>
                    <span className={style.price}>${item.price}</span>
                </div>
                <div className={style.positions}>
                    <div className={style.icon} onClick={()=>UpdateWishlist(item)}>
                        <i className={`fa-${isIn(item) ? "solid" : "regular"} fa-heart`}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product