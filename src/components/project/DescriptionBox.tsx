interface description {
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
  style?: 'normal' | 'reverse'
}

const DescriptionBox = ({ title, description, image, style }: description) => {
  const direction = style == 'reverse' ? 'flex-row-reverse' : ''
  const translation = style == 'reverse' ? 'translate-x-16' : '-translate-x-16'

  return (
    <section
      className={`mx-auto mt-12 flex flex-row ${direction} justify-center gap-8 max-w-3xl`}
    >
      <div className="w-1/2">
        <img className=" rounded object-cover border" src={image.src}></img>
      </div>

      <div className="w-1/2 flex flex-col justify-center">
        <div
          className={`bg-neutral-100 p-8 rounded text-neutral-900 ${translation}`}
        >
          <h2 className="text-4xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </section>
  )
}

export default DescriptionBox
