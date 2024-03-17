import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <nav className="w-screen max-w-full flex justify-center p-4">
      <Link to={'/'} className=" font-display text-4xl">
        <h1>LIANG HENG</h1>
      </Link>
    </nav>
  )
}

export default NavigationBar
