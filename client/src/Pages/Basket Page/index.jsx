import React from 'react'
import { Helmet } from 'react-helmet-async'
import style from "./index.module.scss";

function BasketPage() {
    return (
        <>
            <Helmet>
                <title>BasketPage</title>
            </Helmet>
            <div id={style.BasketPage}>
                BasketPage
            </div>
        </>
    )
}

export default BasketPage