interface HeroProps {
  title: string
  description: string
  bgImage: string
}

const HeroProject = ({ title, description, bgImage }: HeroProps) => {
  return (
    <section className="w-full h-screen overflow-hidden">
      <div
        className="w-screen max-w-full flex flex-col items-center h-screen justify-center
         bg-gradient-to-tr from-indigo-950/90 to-gray-950/90"
      >
        <div className="flex flex-col gap-4">
          <h1 className=" text-6xl font-bold">{title}</h1>
          <p className="max-w-md">{description}</p>
        </div>
      </div>
      <img
        className="absolute top-0 w-screen max-w-full h-[150vh] -z-10 object-cover"
        src={bgImage}
      ></img>
    </section>
  )
}

export default HeroProject
