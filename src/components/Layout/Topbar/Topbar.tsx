import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { Menu } from "@mui/icons-material";

export interface TopbarProps {
  toggleDrawer: () => void
}

export function Topbar({ toggleDrawer }: TopbarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <IconButton onClick={toggleDrawer} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}