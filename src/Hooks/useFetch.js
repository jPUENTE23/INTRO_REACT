import { useEffect, useState } from "react"
// import { getFetch } from "../Helpers/fetchData"



export const useFetch = (url) => {

    console.log(url)
    const [state, setState] = useState({
        data: [],
        isLoading: true,
        errors: null,
    })



    useEffect(() => {

        const getFetch = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();

                setState({
                    data,
                    isLoading: false,
                    errors: null,
                });
            } catch (error) {
                setState({
                    data: null,
                    isLoading: false,
                    errors: error,
                });
            }
        };
        getFetch()
    }, [url])
    console.log(state)

    return {
        data: state.data,
        isLoading: state.isLoading,
        errors: state.errors

    }
}
