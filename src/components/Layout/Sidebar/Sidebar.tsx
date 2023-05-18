import { useAuth } from '@hooks/useAuth'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  useTheme,
} from '@mui/material'
import { Link } from 'react-router-dom'

import { DrawerHeader } from './style'

import { menuRoutes } from '../../../routes/MenuRoutes'

export interface SidebarProps {
  drawer: boolean
  toggleDrawer: () => void
}

export function Sidebar({ drawer, toggleDrawer }: SidebarProps) {
  const { isAuthenticated } = useAuth()
  const theme = useTheme()
  const drawerWidth = 240

  console.log(menuRoutes)

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      anchor="left"
      open={drawer}
    >
      <DrawerHeader>
        <IconButton onClick={toggleDrawer}>
          {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List disablePadding>
        {menuRoutes.map((route) => {
          if (route.privateRoute && !isAuthenticated) return

          if (route.onlyToRegister && isAuthenticated) return

          return (
            <Link
              key={route.id}
              to={route.path}
              style={{ textDecoration: 'none', color: '#000', fontWeight: 500 }}
              onClick={toggleDrawer}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText sx={{ whiteSpace: 'break-spaces' }} primary={route.label} />
              </ListItemButton>
            </Link>
          )
        })}
      </List>
    </Drawer>
  )
}
