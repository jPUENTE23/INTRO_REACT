
import { Flex, TextField } from '@radix-ui/themes'
import { useState } from 'react'
import propTypes from 'prop-types'


export const AgregarTarea = ({agregarNombre}) => {

    const [valorInput, setValorInput] = useState('')

    const onChangeInput = (valor) => {

        setValorInput(valor.target.value)
    }

    const capturarInformacion = (event) => {

        // const nuevoNombre = {

        //     nombre: valorInput,
        //     valor: false
        // }

        event.preventDefault();

        // agregarNombre(nombres => [...nombres, nuevoNombre])
        
        agregarNombre(valorInput)
    }

    return (
        <>
            <form onSubmit={capturarInformacion} >
                <Flex direction="column" maxWidth="250px">
                    <TextField.Root
                        color='indigo'
                        variant='soft'
                        placeholder='Nombre'
                        value={valorInput}

                        onChange={onChangeInput}
                    >
                    </TextField.Root>

                </Flex>
            </form>
        </>
    )
}


AgregarTarea.propTypes = {

    agregarNombre: propTypes.func.isRequired
}