import { Button } from "@radix-ui/themes"
import { useMemo, useState } from "react"



export const CCalculoPesado = () => {


    const [listaNumeros, setListaNumeros] = useState([2, 3, 4, 5, 6, 7, 8, 9])
    const [show, setShow] = useState(true)


    // UseMemo lo que hace es que vita que se ejecute un proceso inecesario cuando realizmos otra accion diferente a esta
    const getCalculo = useMemo(() => {
        console.log("calculado")
        return listaNumeros.reduce((a, b) => a * b)
    }, [listaNumeros]) 

    const agregarNumeros = () => {
        setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length -1] + 1])

        console.log(listaNumeros)
    }

    return (
        <>
            <h1>Use Memo</h1>
    
            <h3>Calculo:</h3>
            <p>{getCalculo}</p>

            <Button variant="soft" color="indigo" onClick={() => {setShow(!show)}}>{show ? 'Show': 'Hide'}</Button>
            <Button variant="soft" color="indigo" onClick={() => agregarNumeros()}>Agregar</Button>
        </>
    )
}
