import { Outlet } from 'react-router-dom'
import NavigationBar from '../components/parts/NavigationBar'

const Layout = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Outlet />
    </>
  )
}

export default Layout
