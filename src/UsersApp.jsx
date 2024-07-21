import { useState } from "react"
import { Button } from "@radix-ui/themes"
import { Cards } from "./components/Cards"





export const UsersApp = () => {

    const [endpoit, setendpoint] = useState('users')



    // useEffect(() => {
    //     getUsuarios()
    // }, [])

    // const handleUsuarios = () => {

    //     getUsuarios();
    // }


    const handleButton = () => {

        (endpoit === 'users' ? setendpoint('posts') : setendpoint('users')) 
    }

    return (
        <>
            <h1>Lista de Usuarios:</h1>
            <Button variant="soft" color="indigo" onClick={handleButton}> {endpoit === 'users' ? 
                                                                                        <span>Get Posts</span>
                                                                                    :
                                                                                        <span>Get Users</span>}</Button>

            <Cards endpoint={endpoit}></Cards>

        </>
    )
}
