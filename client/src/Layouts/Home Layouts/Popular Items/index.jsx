import React from 'react'
import style from "./index.module.scss";
import { usePro } from '../../../Context/ProContext';
import Product from '../../../Components/Product';

function PopularItems() {

    const { Pro, setPro, GetPros, isLoading } = usePro()



    return (
        <>
            <div id={style.PopularItems}>
                <div className={style.container}>
                    <h1 className={style.secTitle}>Popular Items</h1>
                    <p className={style.secInfo}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    <div className={style.grid}>
                        {isLoading ? <h2>Loading. . .</h2> :
                            Pro.map((item, i) => (
                                <div key={item._id} style={{ gridArea: `grid${i + 1}` }}>
                                    <Product item={item} />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularItems