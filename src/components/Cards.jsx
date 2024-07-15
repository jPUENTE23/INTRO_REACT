
import { DataList, Flex, Badge, Code, IconButton, Link, Box, Card } from "@radix-ui/themes"
import propTypes from 'prop-types'
import { useEffect, useState } from "react"

export const CardUser = ({ id, name, username, email }) => {
  return (
    <>

      <Box maxWidth="350px">
        <Card asChild>
          <DataList.Root>
            <DataList.Item align="center">
              <DataList.Label minWidth="88px">Status</DataList.Label>
              <DataList.Value>
                <Badge color="jade" variant="soft" radius="full">
                  Authorized
                </Badge>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">ID</DataList.Label>
              <DataList.Value>
                <Flex align="center" gap="2">
                  <Code variant="ghost">{id}</Code>
                  <IconButton
                    size="1"
                    aria-label="Copy value"
                    color="gray"
                    variant="ghost"
                  >
                  </IconButton>
                </Flex>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">Name</DataList.Label>
              <DataList.Value>{name}</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">Username</DataList.Label>
              <DataList.Value>
                <Link href="mailto:vlad@workos.com">{username}</Link>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">Email</DataList.Label>
              <DataList.Value>
                <Link target="_blank" href="https://workos.com">
                  {email}
                </Link>
              </DataList.Value>
            </DataList.Item>
          </DataList.Root>
        </Card>
      </Box>


    </>
  )
}

export const CardPost = ({ id, title, body }) => {
  return (
    <>

      <Box maxWidth="350px">
        <Card asChild>
          <DataList.Root>
            <DataList.Item align="center">
              <DataList.Label minWidth="88px">Status</DataList.Label>
              <DataList.Value>
                <Badge color="jade" variant="soft" radius="full">
                  {title}
                </Badge>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">ID</DataList.Label>
              <DataList.Value>
                <Flex align="center" gap="2">
                  <Code variant="ghost">{id}</Code>
                  <IconButton
                    size="1"
                    aria-label="Copy value"
                    color="gray"
                    variant="ghost"
                  >
                  </IconButton>
                </Flex>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">Body</DataList.Label>
              <DataList.Value>{body}</DataList.Value>
            </DataList.Item>

          </DataList.Root>
        </Card>
      </Box>


    </>
  )
}



export const Cards = ({ endpoint }) => {

  const [Data, setData] = useState([])


  useEffect(() => {

    const getUsuarios = async () => {

      try {

        const resposne = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);

        const data = await resposne.json()

        console.log(data)
        setData(data)
      }
      catch (error) {

        console.error(error)
      }

    }

    getUsuarios()
  }, [endpoint])

  return (
    <>
      {endpoint == 'users' ? Data.map(user => <CardUser key={user.id}
        id={user.id}
        name={user.name}
        username={user.username}
        email={user.email} ></CardUser>)

        : Data.map(post => <CardPost key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}></CardPost>)}
    </>
  )
}

CardPost.propTypes = {

  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
}



CardUser.propTypes = {

  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
  email: propTypes.string.isRequired
}


Cards.propTypes = {

  endpoint: propTypes.string.isRequired

}