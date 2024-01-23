import React from 'react'
import { Helmet } from 'react-helmet-async'
import style from "./index.module.scss";

function DetailPage() {
    return (
        <>
            <Helmet>
                <title>DetailPage</title>
            </Helmet>
            <div id={style.DetailPage}>
                DetailPage
            </div>
        </>
    )
}

export default DetailPage