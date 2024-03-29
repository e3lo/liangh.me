import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <nav className="fixed w-screen max-w-full flex justify-center p-4 bg-neutral-50">
      <Link to={'/'} className=" font-display text-4xl">
        <h1>LIANG HENG</h1>
      </Link>
    </nav>
  )
}

export default NavigationBar
