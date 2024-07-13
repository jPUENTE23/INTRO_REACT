
import { Flex, TextField } from '@radix-ui/themes'


import React from 'react'

export const AgregarTarea = () => {
    return (
        <>
            <Flex direction="column" maxWidth="250px">
                <TextField.Root color='indigo' variant='soft' placeholder='Nombre'></TextField.Root>

            </Flex>
        </>
    )
}
