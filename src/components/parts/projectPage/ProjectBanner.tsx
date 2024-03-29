export interface ProjectBannerProps {
  title: string
  description: string
  src: string
  alt: string
}

import { motion } from 'framer-motion'

const ProjectBanner = ({
  title,
  description,
  src,
  alt,
}: ProjectBannerProps) => {
  return (
    <section className=" flex flex-col gap-2 h-screen justify-center max-w-screen-lg mx-auto">
      <div className="flex flex-row justify-between font-display items-end">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className=" text-3xl -z-20"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className=" text-xl -z-20"
        >
          {description}
        </motion.p>
      </div>
      <img className="w-full object-cover" src={src} alt={alt}></img>
    </section>
  )
}

export default ProjectBanner
