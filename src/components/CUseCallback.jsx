import { useCallback, useState } from "react"
import {CButtonIncrementar} from "./CButtonIncrementar"

export const CUseCallback = () => {


    const [counter, setCounter] = useState(0)

    const incrementar = useCallback((val) => {
        setCounter(counter => counter +val)
    }, [])
    
    return (
        <>
            <h1>Contador {counter}</h1>
            <CButtonIncrementar incrementar={incrementar}></CButtonIncrementar>
        </>
    )
}
