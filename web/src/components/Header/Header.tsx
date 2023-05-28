import * as React from 'react'

import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { routes, Link } from '@redwoodjs/router'

const Header = ({ title }: { title: string }) => {
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{ bgcolor: 'transparent', boxShadow: 'none' }}
          position="static"
        >
          <Toolbar>
            <Box display="flex" flexGrow={1}>
              <Link to={routes.home()}>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                  {title}
                </Typography>
              </Link>
            </Box>
            <Avatar
              alt="logo"
              src="/logo_ufcg.png"
              sx={{ bgcolor: 'transparent', width: 56, height: 56 }}
            >
              UFCG
            </Avatar>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  )
}

export default Header
