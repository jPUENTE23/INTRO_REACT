
import { Button } from "@radix-ui/themes"
import { useContador } from "../Hooks/useContador"

export const CContador = () => {

  const {contador, incrementar, disminuir, resetear} =  useContador(0)
  return (
    <>
        <h3>Contador: {contador}</h3>

        <Button variant="soft" color="indigo" onClick={() => {incrementar(1)}}>+1</Button>
        <Button variant="soft" color="indigo" onClick={() => {resetear()}}>Reset</Button>
        <Button variant="soft" color="indigo" onClick={() => {disminuir(1)}}>-1</Button>
    </>
  )
}
