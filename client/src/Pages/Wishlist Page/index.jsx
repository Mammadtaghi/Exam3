import React from 'react'
import { Helmet } from 'react-helmet-async'
import style from "./index.module.scss";

function WishlistPage() {
    return (
        <>
            <Helmet>
                <title>WishlistPage</title>
            </Helmet>
            <div id={style.WishlistPage}>
                WishlistPage
            </div>
        </>
    )
}

export default WishlistPage