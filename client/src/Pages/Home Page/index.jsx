import React from 'react'
import { Helmet } from 'react-helmet-async'
import style from "./index.module.scss";
import Hero from '../../Layouts/Home Layouts/Hero';
import Arrivals from '../../Layouts/Home Layouts/Arrivals';
import PopularItems from '../../Layouts/Home Layouts/Popular Items';
import Chioce1 from '../../Layouts/Home Layouts/Choice1';
import Chioce2 from '../../Layouts/Home Layouts/Choice2';

function Home() {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div id={style.Home}>
                <Hero />
                <Arrivals />
                <PopularItems />
                <Chioce1 />
                <Chioce2 />
            </div>
        </>
    )
}

export default Home