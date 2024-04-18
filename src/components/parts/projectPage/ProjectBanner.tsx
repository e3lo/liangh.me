export interface ProjectBannerProps {
  title: string
  description: string
  srcDesktop: string
  srcMobile: string
  alt: string
}

import { motion } from 'framer-motion'

const ProjectBanner = ({
  title,
  description,
  srcDesktop,
  srcMobile,
  alt,
}: ProjectBannerProps) => {
  return (
    <section className=" flex flex-col gap-2 h-screen justify-center max-w-screen-lg mx-auto p-6 items-center">
      <div className="flex flex-col justify-between font-display items-center ">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className=" text-6xl -z-20"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className=" text-2xl -z-20 text-center"
        >
          {description}
        </motion.p>
      </div>
      <img
        className="md:hidden w-full object-cover"
        src={srcMobile}
        alt={alt}
      ></img>
      <img
        className="hidden md:block w-full object-cover"
        src={srcDesktop}
        alt={alt}
      ></img>
    </section>
  )
}

export default ProjectBanner
