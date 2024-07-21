

import { Button, TextField, Box } from "@radix-ui/themes"
import { useForm } from "../Hooks/useForm"

export const CFormulario = () => {

    const form = {
        username: '',
        email: '',
        password: ''

    }

    const {FormState, username , email, password, onInput } = useForm(form)

    const envairFormulario = (event) => {
        event.preventDefault()
        console.log(FormState)
    }

    return (
        <>
            <h1>Formulario</h1>
            <Box maxWidth="350px" >
                <form onSubmit={envairFormulario}>
                    <TextField.Root placeholder="Usuario" gap="3"
                        name="username"
                        type="text"
                        value={username}
                        onChange={onInput}>
                        
                    </TextField.Root>

                    <TextField.Root placeholder="Correo" gap="3"
                        name="email"
                        type="email"
                        value={email}
                        onChange={onInput}>

                    </TextField.Root>

                    <TextField.Root placeholder="Contraseña" gap="3"
                        name="password"
                        type="password"
                        value={password}
                        onChange={onInput}>

                    </TextField.Root>

                    <Button type="submit" variant="soft" color="indigo">
                        Enviar
                    </Button>
                </form>
            </Box>
        </>
    )
}
