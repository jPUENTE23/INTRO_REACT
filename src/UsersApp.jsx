import { useState } from "react"
import { Button  } from "@radix-ui/themes"
import { Cards } from "./components/Cards"

// const CardUser = ({ id, name, username, email }) => {
//     return (

//         <>

//             <Box maxWidth="350px">
//                 <Card asChild>
//                     <DataList.Root>
//                         <DataList.Item align="center">
//                             <DataList.Label minWidth="88px">Status</DataList.Label>
//                             <DataList.Value>
//                                 <Badge color="jade" variant="soft" radius="full">
//                                     Authorized
//                                 </Badge>
//                             </DataList.Value>
//                         </DataList.Item>
//                         <DataList.Item>
//                             <DataList.Label minWidth="88px">ID</DataList.Label>
//                             <DataList.Value>
//                                 <Flex align="center" gap="2">
//                                     <Code variant="ghost">{id}</Code>
//                                     <IconButton
//                                         size="1"
//                                         aria-label="Copy value"
//                                         color="gray"
//                                         variant="ghost"
//                                     >
//                                     </IconButton>
//                                 </Flex>
//                             </DataList.Value>
//                         </DataList.Item>
//                         <DataList.Item>
//                             <DataList.Label minWidth="88px">Name</DataList.Label>
//                             <DataList.Value>{name}</DataList.Value>
//                         </DataList.Item>
//                         <DataList.Item>
//                             <DataList.Label minWidth="88px">Username</DataList.Label>
//                             <DataList.Value>
//                                 <Link href="mailto:vlad@workos.com">{username}</Link>
//                             </DataList.Value>
//                         </DataList.Item>
//                         <DataList.Item>
//                             <DataList.Label minWidth="88px">Email</DataList.Label>
//                             <DataList.Value>
//                                 <Link target="_blank" href="https://workos.com">
//                                     {email}
//                                 </Link>
//                             </DataList.Value>
//                         </DataList.Item>
//                     </DataList.Root>
//                 </Card>
//             </Box>


//         </>
//     )
// }



export const UsersApp = () => {

    const [endpoit, setendpoint] = useState('users')

    

    // useEffect(() => {
    //     getUsuarios()
    // }, [])

    // const handleUsuarios = () => {

    //     getUsuarios();
    // }


    const handleButton = () => {
        setendpoint('posts')
    }

    return (
        <>
            <h1>Lista de Usuarios:</h1>
            <Button variant="soft" color="indigo" onClick={handleButton}>Mostrar posts</Button>

            <Cards endpoint={endpoit}></Cards>

        </>
    )
}
