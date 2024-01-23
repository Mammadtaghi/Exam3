import React from 'react'
import { Helmet } from 'react-helmet-async'
import style from "./index.module.scss";

function Home() {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div id={style.Home}>
                Home
            </div>
        </>
    )
}

export default Home