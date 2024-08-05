
import { useContext } from 'react'
import {useForm} from '../Hooks/useForm'
import { UsuarioContext } from '../Context/UsuarioContext'


export const LoginRoute = () => {



    const formUsuarios = {
        nombre: '',
        apellidos: '',
        ciudad: '',
        framework: ''
    }


    const { setUsuario} = useContext(UsuarioContext)

    const {FormState, onInput, nombre, apellidos, ciudad, framework} = useForm(formUsuarios)

    const onSaveData = (event) => {
        event.preventDefault()
        console.log(FormState)
        setUsuario(FormState)
    }

    return (
        <form className="max-w-sm mx-auto my-10" onSubmit={onSaveData} >
            <div className="mb-5">
                <label  className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                <input 
                    type="text" 
                    name="nombre" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="name@flowbite.com" 
                    required
                    value={nombre}
                    onChange={onInput} />
            </div>
            <div className="mb-5">
                <label  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Apellidos</label>
                <input 
                    type="text" 
                    name="apellidos" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    required
                    value={apellidos}
                    onChange={onInput} />
            </div>
            <div className="mb-5">
                <label  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Ciudad</label>
                <input 
                    type="text" 
                    name="ciudad" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    required
                    value={ciudad}
                    onChange={onInput} />
            </div>
            <div className="mb-5">
                <label  className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Framework</label>
                <input 
                    type="text" 
                    name="framework" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    required
                    value={framework}
                    onChange={onInput} />
            </div>

            <button type="submit" className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar</button>
        </form>
    )
}
