import { useScroll, useTransform, motion } from 'framer-motion'

interface HeroProps {
  title: string
  description: string
  bgImage: string
}

const HeroProject = ({ title, description, bgImage }: HeroProps) => {
  const { scrollYProgress } = useScroll()
  let y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

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
      <motion.img
        style={{ y }}
        className="absolute top-0 w-screen max-w-full -z-10 object-cover"
        src={bgImage}
      ></motion.img>
    </section>
  )
}

export default HeroProject
