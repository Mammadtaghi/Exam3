import React from 'react'
import { Helmet } from 'react-helmet-async'
import style from "./index.module.scss";
import { useWishlist } from '../../Context/wishlistContext';
import { Link } from 'react-router-dom';

function WishlistPage() {

    const { Wishlist, setWishlist, UpdateWishlist, isIn } = useWishlist()

    return (
        <>
            <Helmet>
                <title>WishlistPage</title>
            </Helmet>
            <div id={style.WishlistPage}>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>title</th>
                            <th>Price</th>
                            <th>Buttons</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!Wishlist.length ? <tr><td><Link to={"/"}>Go Home</Link></td></tr> :
                            Wishlist.map(item => (
                                <tr key={item._id}>
                                    <td>
                                        <div className={style.imgBox}>
                                            <img src={item.image} alt="" />
                                        </div>
                                    </td>
                                    <td>{item.title}</td>
                                    <td>${item.price}</td>
                                    <td><button onClick={() => UpdateWishlist(item)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default WishlistPage