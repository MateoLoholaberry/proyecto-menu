import { Box, Stack } from '@mui/material'
import React from 'react'

export const Main = () => {
  return (
    <Stack direction={"row"} spacing={1} mt={3}>
        <Box flex={3}>

        </Box>
        <Box flex={1} sx={{xs:"none", md:"block"}}>

        </Box>
    </Stack>
  )
}
