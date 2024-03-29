export interface ProjectBannerProps {
  title: string
  description: string
  src: string
  alt: string
}

const ProjectBanner = ({
  title,
  description,
  src,
  alt,
}: ProjectBannerProps) => {
  return (
    <section className=" flex flex-col gap-2 h-screen justify-center max-w-screen-lg mx-auto">
      <div className="flex flex-row justify-between font-display items-end">
        <h1 className=" text-3xl">{title}</h1>
        <p className=" text-xl">{description}</p>
      </div>
      <img className="w-full object-cover" src={src} alt={alt}></img>
    </section>
  )
}

export default ProjectBanner
