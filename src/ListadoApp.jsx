
import { useState } from 'react'
import { Button, Badge} from '@radix-ui/themes'
import { AgregarTarea } from './components/AgregarTarea'


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
        {nombre: "Lauren", valor: false},
        {nombre: "Eve", valor: true},
        {nombre: "Mayberry", valor: false}
    ]

    /*El siguiente hook toma el listado con objetos de arrib y 
    lo almacena en arreglo para que se acctualice el estaso una vez que se quiera agregar
    otro registro */
    const [arreglo, setArreglo] = useState(listado)
    return (
        <>
            <AgregarTarea></AgregarTarea>
            <h1>Listado de temas</h1>
            <ol>
                {arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} valor={item.valor}></Items>)}
            </ol>

            <Button variant='soft' color='indigo'  onClick={addNombre}>Agregar</Button>
        </>
    )
}
