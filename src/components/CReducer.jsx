
import { useReducer } from 'react';
import { useForm } from '../Hooks/useForm';
import { Badge, Button } from '@radix-ui/themes';


const estadoInicial = [
    {
        id: 1,
        tarea: 'explicar reducer',
        finallizado: false

    }
]

// const tarea = {
//     id: new Date().getTime(),
//     tarea: 'Explicar reducer',
//     finallizado: false
// }


// const agregarTarea = {
//     type: '[TAREAS] Agregar Tareas',
//     payload: tarea
// }

// const editarTarea = {
//     type: '[TAREAS] Editar Tareas',
//     payload: ""
// }

// const eliminarTarea = {
//     type: '[TAREAS] Eliminar Tareas',
//     payload: ""
// }

// const eliminarTareas = {
//     type: '[TAREAS] Eliminar todas las Tareas',
//     payload: ""
// }


const tareaReducer = (estado = estadoInicial, action = {}) => {


    // if (action.type == '[TAREAS] Agregar Tareas'){
    //     return [...estado, action.payload]
    // }

    switch (action.type) {
        case '[TAREAS] Agregar Tareas':
            return [...estado, action.payload]
        case '[TAREAS] Editar Tareas':
            return estado.map(tarea => {
                if (tarea.id == action.payload) {
                    return {
                        ...tarea,
                        finallizado: !tarea.finallizado
                    }
                }
                return tarea
            })
        case '[TAREAS] Eliminar Tareas':
            return estado.filter(tarea => tarea.id !== action.payload)
        case '[TAREAS] Eliminar todas las Tareas':
            return []
        default:
            return estado
    }



}

// console.log(tareaReducer(estadoInicial, agregarTarea))


export const CReducer = () => {


    const [estado, dispatch] = useReducer(tareaReducer, estadoInicial)
    const { tarea, FormState, onInput } = useForm({ tarea: '' });


    const agregarTareaForm = (event) => {
        event.preventDefault()
        console.log(FormState)

        if (FormState.tarea == '') return

        const $tarea = {
            id: new Date().getTime(),
            tarea: FormState.tarea,
            finallizado: false
        }

        const agregarTarea = {
            type: '[TAREAS] Agregar Tareas',
            payload: $tarea
        }

        dispatch(agregarTarea)

        console.log(estado)
    }

    const finalizarTarea = ({ id }) => {

        const action = {
            type: '[TAREAS] Editar Tareas',
            payload: id
        }

        dispatch(action)
    }

    const borrarTarea = ({ id }) => {

        const action = {
            type: '[TAREAS] Eliminar Tareas',
            payload: id
        }

        dispatch(action)
    }

    const borrarTareas = () => {

        const action = {
            type: '[TAREAS] Eliminar todas las Tareas',
            payload: ''
        }

        dispatch(action)
    }


    return (
        <>
            <h1 className="text-3xl text-center p-5 font-bold" >Lista de tareas</h1>

            <form className="max-w-sm mx-auto" onSubmit={agregarTareaForm} >
                <div className="mb-5">
                    <label htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Nueva tarea</label>

                    <input type="text"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        name="tarea"
                        value={tarea}
                        onChange={onInput} />
                </div>

                <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Agregar</button>

                <button type="button" onClick={borrarTareas}
                    className="text-white bg-red-700 mx-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Eliminar tareas</button>
            </form>

            <div className='max-w-7xl mx-auto px-6 md:px-12 py-12 xl:px-6'>

                <ul className="col-span-2 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {estado.map(item => <li className='flex justify-between w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600' key={item.id}>{item.tarea}
                        <span className='px-5'>
                            {item.finallizado ? <Badge color='green'>Realizado</Badge> : <Badge color='red'>Sin realizar</Badge>}
                        </span>

                        <input id="default-checkbox"
                            type="checkbox"
                            value={item.finallizado}
                            className="h-4 w-4 text-right text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onChange={() => finalizarTarea(item)} />

                        <Button variant='indigo' color='red' onClick={() => borrarTarea(item)}>Eliminar</Button>



                    </li>)}

                </ul>
            </div>

        </>
    )
}
