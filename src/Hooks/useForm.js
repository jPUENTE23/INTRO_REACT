
import { useState } from "react"

export const useForm = (formInicial = {}) => {

    const [FormState, setFormState] = useState(formInicial)

    const onInput = ({ target }) => {
        const { name, value } = target

        setFormState({
            ...FormState,
            [name]: value
        })
    }
    return {
        ...FormState,
        FormState,
        onInput
    }
}
