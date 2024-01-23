import { createContext, useContext } from "react";
import useLocalstorage from "../Hooks/useLocalstorage";

const basketContext = createContext()

export const BasketProvider = ({ children }) => {

    const [Basket, setBasket] = useLocalstorage('basket')

    function AddBasket(item) {
        const index = Basket.findIndex(x => x._id === item._id)
        if (index === -1) {
            item.count = 1
            setBasket([...Basket, item])
            return
        }
        let BasketCopy = [...Basket]
        BasketCopy[index].count++
        setBasket(BasketCopy)
    }

    function RemoveBasket(item) {
        const index = Basket.findIndex(x => x._id === item._id)
        if (index === -1) {
            return
        }
        setBasket(Basket.filter(x => x._id !== item._id))
    }

    function Increase(item) {
        const index = Basket.findIndex(x => x._id === item._id)
        if (index === -1) {
            return
        }
        let BasketCopy = [...Basket]
        BasketCopy[index].count++
        setBasket(BasketCopy)
    }

    function Decrease(item) {
        const index = Basket.findIndex(x => x._id === item._id)
        if (index === -1) {
            return
        }
        let BasketCopy = [...Basket]
        BasketCopy[index].count++
        setBasket(BasketCopy)
    }

    const data = { Basket, setBasket, AddBasket, RemoveBasket, Increase, Decrease }

    return (
        <basketContext.Provider value={data}>
            {children}
        </basketContext.Provider>
    )
}

export const useBasket = () => useContext(basketContext)