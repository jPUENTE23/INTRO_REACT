import {useState} from 'react'

export const useContador = (valorInicial) => {

    const [contador, setContador] = useState(valorInicial)
    const incrementar = (valor) => {
        setContador(contador + valor)
    }

    const resetear = () => {
        setContador(0)
    }

    const disminuir = (valor) => {
        setContador(contador - valor)
    }

    return {
        contador,
        incrementar,
        disminuir,
        resetear

    }
}
