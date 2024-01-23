import React from 'react'
import style from "./index.module.scss";

function Hero() {
    return (
        <>
            <div id={style.Hero}>
                <div className={style.container}>
                    <div className={style.textBox}>
                        <h1 className={style.title}>Select Your New Perfect Style</h1>
                        <p className={style.info}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus iste aspernatur repudiandae eius consequatur. Libero!
                        </p>
                        <button className={style.show}>SHOP NOW</button>
                    </div>
                    <div className={style.imgBox}>
                        <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero