import { useContext } from "react"
import { UsuarioContext } from "../Context/UsuarioContext"

export const HomeRoute = () => {
  
  // const { usuarios } = useContext( UsuarioContext )

  const {usuario} = useContext(UsuarioContext)
  
  return (
    <>
      <h1 className="my-10">Inicio</h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Apellidos
              </th>
              <th scope="col" className="px-6 py-3">
                Ciudad
              </th>
              <th scope="col" className="px-6 py-3">
                Framework
              </th>

            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {usuario.nombre}
              </th>
              <td className="px-6 py-4">
                {usuario.apellidos}
              </td>
              <td className="px-6 py-4">
                {usuario.ciudad}
              </td>
              <td className="px-6 py-4">
                {usuario.framework}
              </td>

            </tr>
            
          </tbody>
        </table>
      </div>

    </>
  )
}
