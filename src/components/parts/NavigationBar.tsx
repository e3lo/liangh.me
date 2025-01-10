import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <nav className="fixed w-screen max-w-full flex justify-center p-4 bg-neutral-50/70 backdrop-blur-lg border-b-2 border-b-white">
      <Link to={'/'} className=" font-display text-4xl">
        <h1 className=" hover:scale-105 hover:text-orange-500 transition-all">
          LIANG HENG
        </h1>
      </Link>
    </nav>
  )
}

export default NavigationBar
