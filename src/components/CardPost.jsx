
import { DataList, Flex, Badge, Code, IconButton ,Box, Card } from "@radix-ui/themes"

import propTypes from 'prop-types'

export const CardUser = ({id, title, body}) => {
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

CardUser.propTypes = {

  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
}
