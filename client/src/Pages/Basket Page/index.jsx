import React from 'react'
import { Helmet } from 'react-helmet-async'
import style from "./index.module.scss";
import { useBasket } from '../../Context/basketContext';
import { Link } from 'react-router-dom';

function BasketPage() {

    const { Basket, setBasket, AddBasket, RemoveBasket, Increase, Decrease, SubTotal } = useBasket()

    return (
        <>
            <Helmet>
                <title>BasketPage</title>
            </Helmet>
            <div id={style.BasketPage}>
                <h1>SubTotal: ${SubTotal()}</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>title</th>
                            <th>Price</th>
                            <th>Count</th>
                            <th>Buttons</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!Basket.length ? <tr><td><Link to={"/"}>Go Home</Link></td></tr> :
                            Basket.map(item => (
                                <tr key={item._id}>
                                    <td>
                                        <div className={style.imgBox}>
                                            <img src={item.image} alt="" />
                                        </div>
                                    </td>
                                    <td>{item.title}</td>
                                    <td>${item.price}</td>
                                    <td>{item.count}</td>
                                    <td>
                                        <button onClick={() => RemoveBasket(item)}>Remove</button>
                                        <button onClick={() => Increase(item)}>+</button>
                                        <button onClick={() => Decrease(item)}>-</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default BasketPage