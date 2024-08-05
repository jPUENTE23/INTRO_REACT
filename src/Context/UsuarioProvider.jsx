import { useState } from "react"
import { UsuarioContext } from "./UsuarioContext"
import propTypes from 'prop-types'

// const usuarios = {
//     nombre: 'Jorge Luie',
//     apellidos: 'Puente Muñiz',
//     ciudad: 'Monterret',
//     framework: 'React'
// }

export const UsuarioProvider = ({children}) => {

    const [usuario, setUsuario] = useState({})

  return (
    <UsuarioContext.Provider value={{usuario, setUsuario}}>
        {children}
    </UsuarioContext.Provider>
  )
}


UsuarioProvider.propTypes = {
    children: propTypes.any
}