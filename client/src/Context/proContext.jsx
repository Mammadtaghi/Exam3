import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";

const proContext = createContext()

export const ProProvider = ({ children }) => {

    const [Pro, setPro] = useState([])

    async function GetPros() {
        try {
            const res = await axios("http://localhost:3000/pro")
            console.log(res.data);
            setPro(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        GetPros()
    }, [])

    const data = { Pro, setPro, GetPros }

    return (
        <proContext.Provider value={data}>
            {children}
        </proContext.Provider>
    )
}

export const usePro=()=>useContext(proContext)