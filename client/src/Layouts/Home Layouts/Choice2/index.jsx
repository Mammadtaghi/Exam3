import React from 'react'
import style from "./index.module.scss";

function Chioce2() {
    return (
        <>
            <div id={style.Chioce2}>
                <div className={style.container}>
                    <div className={style.rightSide}>
                        <div className={style.imgBox}>
                            <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch2.png" alt="" />
                        </div>
                    </div>

                    <div className={style.leftSide}>
                        <h1 className={style.title}>Watch of Choice</h1>
                        <p className={style.info}>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                        <button className={style.show}>SHOW WATCHES</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chioce2