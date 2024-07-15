
import { useState } from 'react'
import { Button, Badge} from '@radix-ui/themes'
import { AgregarTarea } from './components/AgregarTarea'
import propTypes from 'prop-types'



const Items = ({nombre, valor}) => {
    return(
        <li>{nombre} {valor ? <Badge color='blue'>Esta activo</Badge>: <Badge color='orange'>No activo</Badge>}</li>
    )
}

export const ListadoApp = () => {


    const addNombre = () => {
        setArreglo([...arreglo, {nombre: "Courtney", valor: false}])
    }
    let listado = [
        { id: 1, nombre: "Lauren", valor: false},
        { id: 2, nombre: "Eve", valor: true},
        { id: 3, nombre: "Mayberry", valor: false}
    ]

    /*El siguiente hook toma el listado con objetos de arrib y 
    lo almacena en arreglo para que se acctualice el estaso una vez que se quiera agregar
    otro registro */
    const [arreglo, setArreglo] = useState(listado)

    const onNuevoNombre = (valNombre) => {

        let addNombre = valNombre.trim()
        
        const nuevoNombre = {
            id: arreglo.length + 1,
            nombre: addNombre,
            valor: false
        }

        setArreglo([...arreglo, nuevoNombre])

    }


    return (
        <>
            <AgregarTarea agregarNombre={onNuevoNombre}></AgregarTarea>
            <h1>Listado de temas</h1>
            <ol>
                {arreglo.map(item => <Items key={item.id} nombre={item.nombre} valor={item.valor}></Items>)}
            </ol>

            <Button variant='soft' color='indigo'  onClick={addNombre}>Agregar</Button>
        </>
    )
}


Items.propTypes = {

    nombre: propTypes.string.isRequired,
    valor: propTypes.bool.isRequired
}
