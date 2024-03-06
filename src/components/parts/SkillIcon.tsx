import { useRef } from 'react'
import { useAnimationFrame } from 'framer-motion'

interface Props {
  title: string
  body: string
  iconPath: string
  delay: number
}

function initialPos(delay: number) {
  let x = 1000
  let y = -139

  if (delay < 989) {
    x -= delay
    y = -139
  } else if (delay < 1339) {
    x = 11
    y -= delay - 989
  } else if (delay < 2328) {
    y = -489
    x = 11 + (delay - 1339)
  } else {
    y = -489 + (delay - 2328)
    x = 1000
  }

  return [x, y]
}

const SkillIcon = ({ title, delay }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  let [x, y] = initialPos(delay)

  useAnimationFrame(() => {
    if (ref.current != null) {
      if (y == -139) {
        x--
      } else if (y == -489) {
        x++
      }

      if (x == 11) {
        y--
      } else if (x == 1000) {
        y++
      }

      ref.current.style.transform = `translate(${x}px, ${y}px)`
    }
  })

  return (
    <div
      className=" bg-zinc-200 w-32 h-32 rounded-full flex items-center justify-center absolute text-neutral-950"
      ref={ref}
    >
      {title}
    </div>
  )
}

export default SkillIcon
