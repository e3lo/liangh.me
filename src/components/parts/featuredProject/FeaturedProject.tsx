import { Link } from 'react-router-dom'

export interface FeaturedProps {
  title: string
  body: string
  image: string
  alt: string
  role: string
  link: string
  date: string
}

const FeaturedProject = ({
  title,
  body,
  image,
  alt,
  role,
  link,
  date,
}: FeaturedProps) => {
  return (
    <div className="flex flex-col">
      <img className="w-full object-cover" src={image} alt={alt}></img>
      <div className="flex flex-col-reverse md:flex-row md:justify-between">
        <div className="flex flex-col gap-2 max-w-lg">
          <h3 className=" font-display text-4xl">{title}</h3>
          <p className=" ">{body}</p>
          <Link
            to={link}
            className="px-5 py-3 bg-orange-300 font-display text-xl w-fit"
          >
            Continue reading...
          </Link>
        </div>
        <div className=" flex md:flex-col justify-between md:justify-normal">
          <p className=" md:text-right font-display text-xl">Role: {role}</p>
          <p className="md:hidden font-display text-xl"> | </p>
          <p className=" md:text-right font-display text-xl">{date}</p>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProject
