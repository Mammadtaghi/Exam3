import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import style from "./index.module.scss";
import Product from '../../Components/Product';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DetailPage() {

    const { id } = useParams()

    const [Prod, setProd] = useState(null)

    async function GetPro() {
        try {
            const res = await axios(`http://localhost:3000/pro/${id}`)
            setProd(res.data)
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      GetPro()
    }, [])

    return (
        <>
            <Helmet>
                <title>DetailPage</title>
            </Helmet>
            <div id={style.DetailPage}>
                <Product item={Prod ? Prod : ''} />
            </div>
        </>
    )
}

export default DetailPage