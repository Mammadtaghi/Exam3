import React from 'react'
import style from "./index.module.scss";

function Arrivals() {
    return (
        <>
            <div id={style.Arrivals}>
                <div className={style.container}>
                    <h1 className={style.secTitle}>New Arrivals</h1>
                    <div className={style.grid}>
                        <div id={style.Product}>
                            <div className={style.imgBox}>
                                <img src={'https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png'} alt="" />
                            </div>
                            <div className={style.textBox}>
                                <h3 className={style.title}>Thermo Ball Etip Gloves</h3>
                                <span className={style.price}>$45.732</span>
                            </div>
                        </div>

                        <div id={style.Product}>
                            <div className={style.imgBox}>
                                <img src={'https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png'} alt="" />
                            </div>
                            <div className={style.textBox}>
                                <h3 className={style.title}>Thermo Ball Etip Gloves</h3>
                                <span className={style.price}>$45.732</span>
                            </div>
                        </div>

                        <div id={style.Product}>
                            <div className={style.imgBox}>
                                <img src={'https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png'} alt="" />
                            </div>
                            <div className={style.textBox}>
                                <h3 className={style.title}>Thermo Ball Etip Gloves</h3>
                                <span className={style.price}>$45.732</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Arrivals