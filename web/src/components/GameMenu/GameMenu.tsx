import React from 'react'

import { Grid, Box } from '@mui/material'

import { routes } from '@redwoodjs/router'

import ButtonLink from '../ButtonLink/ButtonLink'

const GameMenu = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      minHeight="85vh"
    >
      <Grid item xs={12} sm={6} md={4}>
        <Box
          bgcolor="#6187DA"
          borderRadius={10}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid container justifyContent="center" spacing={6} mt={2} mb={5}>
            <Grid item>
              <Box sx={{ typography: 'h4' }} color="white">
                CayleyGame
              </Box>
            </Grid>
          </Grid>

          <Grid container justifyContent="center" spacing={6} mt={5} mb={5}>
            <Grid item>
              <ButtonLink route={routes.grupos()} value="Grupos" />
            </Grid>
            <Grid item>
              <ButtonLink route={routes.aneis()} value="Anéis" />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default GameMenu
