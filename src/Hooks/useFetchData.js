import { useEffect, useState } from "react"
import { getData } from "../Helpers/fetchData"


export const useFetchData = (endpoint) => {

    const [Data, setData] = useState([])

    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {

        const getDatos = async () => {

            const { data, isLoading } = await getData(endpoint)
            setData(data)
            setIsLoading(isLoading)
        }
        getDatos()

        // getData(endpoint).then(res => {
        //     setData(res.data),
        //     setIsLoading(res.isLoading)
        // })

    }, [endpoint])

    return {
        Data,
        isLoading
    }
}
