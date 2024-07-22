import { useFetch } from "../Hooks/useFetch"
import { Table } from "@radix-ui/themes"
// import { CardUser } from './Cards'

export const CUsuaeios = () => {

    const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users')

    console.log(isLoading)
    console.log(errors)
    console.log(data)

    return (
        <>
            <h1>Usuarios</h1>

            <Table.Root variant="surface">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>NAME</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>USERNAME</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>EMAIL</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {data.map((usuario) => (
                        <Table.Row key={usuario.id}>
                            <Table.RowHeaderCell>{usuario.id}</Table.RowHeaderCell>
                            <Table.Cell>{usuario.name}</Table.Cell>
                            <Table.Cell>{usuario.username}</Table.Cell>
                            <Table.Cell>{usuario.email}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>

            {/* {data.map(user => <CardUser key={user.id}
                id={user.id}
                name={user.name}
                username={user.username}
                email={user.email} ></CardUser>
            )} */}
        </>
    )
}
