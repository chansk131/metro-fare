import React from "react"
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { useDrawerContext } from "../../contexts/DrawerProvider"
import { canShowSideMenuDrawer } from "../../config/featureToggle"

export const AppHeaderBar = () => {
  const { setSideMenu } = useDrawerContext()

  return (
    <AppBar position="static">
      <Toolbar className={"toolbar"}>
        <Grid container justifyContent="space-between" alignItems="center">
          <img
            height="32"
            width="32"
            src="metro-fare-logo.jpg"
            alt="Metro Fare logo"
          />
          <Typography variant="h6" style={{ marginLeft: "8px", flexGrow: 1 }}>
            MetroFare
          </Typography>
          {canShowSideMenuDrawer() && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setSideMenu(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
