import { useEffect, useState } from "react"

function useLocalstorage(storagename) {

    const [data, setData] = useState(localStorage.getItem(storagename) ? JSON.parse(localStorage.getItem(storagename)) : [])

    useEffect(() => {
        localStorage.setItem(storagename, JSON.stringify(data))
    }, [data])

    return [data, setData]
}

export default useLocalstorage