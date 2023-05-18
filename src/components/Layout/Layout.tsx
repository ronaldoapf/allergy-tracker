import { Topbar } from "./Topbar";
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export function Layout() {
  
  const [drawer, setDrawer] = useState(false)
  
  const toggleDrawer = () => {
    setDrawer(prevState => !prevState)
  }

  return (
    <>
      <Topbar toggleDrawer={toggleDrawer}/>
      <Sidebar drawer={drawer} toggleDrawer={toggleDrawer}/>
      <Outlet />
    </>
  )
}