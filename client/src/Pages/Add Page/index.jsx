import React from 'react'
import { Helmet } from 'react-helmet-async'
import style from "./index.module.scss";

function AddPage() {
    return (
        <>
            <Helmet>
                <title>AddPage</title>
            </Helmet>
            <div id={style.AddPage}>
                AddPage
            </div>
        </>
    )
}

export default AddPage