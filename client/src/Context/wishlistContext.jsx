import { createContext, useContext } from "react";
import useLocalstorage from "../Hooks/useLocalstorage";

const wishlistContext = createContext()

export const WishlistProvider = ({ children }) => {

    const [Wishlist, setWishlist] = useLocalstorage('wishlist')

    function UpdateWishlist(item) {
        const index = Wishlist.findIndex(x => x._id === item._id)
        if (index === -1) {
            setWishlist([...Wishlist, item])
            return
        }
        setWishlist(Wishlist.filter(x => x._id !== item._id))
    }

    const data = { Wishlist, setWishlist, UpdateWishlist }

    return (
        <wishlistContext.Provider value={data}>
            {children}
        </wishlistContext.Provider>
    )
}

export const useWishlist = () => useContext(wishlistContext)