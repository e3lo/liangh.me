import HeroProject from '../../components/project/HeroProject'
import Gallery from '../../components/project/Gallery'

import bgImage from '../../assets/HackMelbourne/WideHome.png'
import DescriptionBox from '../../components/project/DescriptionBox'

import img1 from '../../assets/HackMelbourne/thumbnail1.png'

export interface ProjectProps {
  hero: {
    title: string
    description: string
    bgImage: string
  }
  gallery: {
    itemData: {
      img: string
      title: string
    }[]
  }
  description: {
    title: string
    description: string
    image: {
      src: string
      alt: string
    }
    style?: 'normal' | 'reverse'
  }[]
}

const HackMelbourne = () => {
  const props: ProjectProps = {
    hero: {
      title: 'HackMelbourne',
      description:
        'HackMelbourne is a club dedicated to providing free hackathons to all university students. As the website director for 2024 I made major design changes aswell as completely revitalised the functionality of the website leading a team of 4.',
      bgImage: bgImage,
    },
    gallery: {
      itemData: [
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
        },
        {
          img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
          title: 'Snacks',
        },
        {
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: 'Mushrooms',
        },
        {
          img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
          title: 'Tower',
        },
        {
          img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
          title: 'Sea star',
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          title: 'Basketball',
        },
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
        },
        {
          img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
          title: 'Tree',
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
        },
        {
          img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
          title: 'Camping Car',
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
        },
        {
          img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
          title: 'Tomato basil',
        },
        {
          img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
          title: 'Mountain',
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
        },
      ],
    },
    description: [
      {
        title: 'Getting started',
        description:
          'At the start the HM website had an outdated style and lacked any visual identity. With the increasing amount of youths utilising and preferring a dark themed website. I made the decision to completely redesign the website from scratch',
        image: {
          src: img1,
          alt: 'hi',
        },
        style: 'normal',
      },
      {
        title: 'Selecting which frameworks',
        description:
          'Originally the website used vanilla CSS with React using Javascript. As one of my goals was to have the project easily collaboratable aswell as providing both me and my soon-to-be teammates practical experience, I had decided to go with typescript and tailwindCSS to prevent any naming inconsistencies in CSS',
        image: {
          src: img1,
          alt: 'hi',
        },
        style: 'reverse',
      },
      {
        title: 'A collaborative environment',
        description:
          'For HackMelbourne, I had set up CI/CD pipelines for deployment aswell as simple automated tests for every PR. We initially also had to request a review before submitting the PR, however it felt unecessary for the small scale of our website so we removed the idea',
        image: {
          src: img1,
          alt: 'hi',
        },
        style: 'normal',
      },
      {
        title: 'Problems faced',
        description:
          'One of the problems I faced as the website director was maintaining the code quality across the repo, I initially just fixed the code myself when i saw an issue, however i quickly realised that...',
        image: {
          src: img1,
          alt: 'hi',
        },
        style: 'reverse',
      },
    ],
  }
  return (
    <>
      <HeroProject {...props.hero}></HeroProject>
      <Gallery {...props.gallery}></Gallery>
      {props.description.map((item, index) => (
        <DescriptionBox {...item} key={index}></DescriptionBox>
      ))}
    </>
  )
}

export default HackMelbourne
