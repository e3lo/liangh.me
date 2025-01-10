interface props {
  title: string
  children?: React.ReactNode
  subtitle?: string[]
  className?: string
}

export default function SkillCard({
  title,
  children,
  className,
  subtitle,
}: props) {
  return (
    <div
      className={`p-8 border rounded w-full flex flex-col items-center justify-center gap-2 ${className}`}
    >
      {children}
      {children ? (
        <strong className="font-semibold text-center text-xl">{title}</strong>
      ) : (
        <strong className="font-bold text-center text-4xl">{title}</strong>
      )}

      {subtitle && (
        <ul className=" list-disc list-inside">
          {subtitle.length == 1 ? (
            <p className="font-semibold text-neutral-600 text-center text-sm">
              {subtitle[0]}
            </p>
          ) : (
            subtitle.map((value) => (
              <li className=" text-neutral-800">{value}</li>
            ))
          )}
        </ul>
      )}
    </div>
  )
}
