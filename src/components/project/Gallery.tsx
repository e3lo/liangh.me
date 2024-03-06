import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

interface props {
  itemData: {
    img: string
    title: string
  }[]
}

export default function Gallery({ itemData }: props) {
  console.log(itemData)

  return (
    <div className="w-full flex flex-col gap-8 p-4 pt-12 items-center bg-neutral-900">
      <div>
        <h2 className=" text-4xl font-bold">Gallery</h2>
      </div>
      <div className=" max-w-4xl flex flex-col items-center">
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  )
}
