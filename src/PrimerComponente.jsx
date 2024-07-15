import propTypes from 'prop-types'
import { useState } from 'react'
import { Button } from '@radix-ui/themes'

const string = "Lauren Mayberry"
const number = 37
const bool = true
const array = ["Lauren", "Eve", "Mayberry"]
const object = {

  nombre: "Lauren Eve",
  appellidos: "Mayberry",
  edad: 35
}


export const PrimerComponente = ({ nombre, appellidos, valor = 0 }) => {

  // Hook - useStare
  const [contador, setContador] = useState(valor)

  const eventoClick = () => {
    setContador(contador + 10)
  }


  return (
    <>
      <h1>Listado de datos</h1>
      <h4>{string}</h4>
      <h4>{number}</h4>
      <h4>{bool}</h4>
      <h4>{array}</h4>
      <h4>{JSON.stringify(object)}</h4>


      <h1>Datos personales</h1>
      <ul>
        <li>{nombre}</li>
        <li>{appellidos}</li>
      </ul>

      <p>{contador}</p>
      <Button onClick={eventoClick} variant='soft' color='indigo'>
        Acumular
      </Button>
    </>
  )
}



// Asiganar un tipo de datos a las propiedaddes de un componente
PrimerComponente.propTypes = {

  nombre: propTypes.string.isRequired,
  appellidos: propTypes.string.isRequired,
  valor: propTypes.number.isRequired

}


// Asignar valores por defecto en las propiedades de un componente
PrimerComponente.defaultProps = {

  nombre: "Lauren",
  appellidos: "Mayberry"
}