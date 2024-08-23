import { Outlet, ScrollRestoration } from 'react-router-dom'
import NavigationBar from '../components/parts/NavigationBar'

const Layout = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Outlet />
      <ScrollRestoration/>
    </>
  )
}

export default Layout
