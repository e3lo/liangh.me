import profile from '../assets/profilePic.jpg'

import FeaturedProject from '../components/parts/featuredProject/FeaturedProject'
import { FeaturedProps } from '../components/parts/featuredProject/FeaturedProject'

import HMPhoto from '../assets/HackMelbourne/thumbnail.png'
import AFPhoto from '../assets/AuyeaFarm/thumbnail.png'
import GSPhoto from '../assets/GroupSpace/thumbnail.png'

function Home() {
  const projectList: FeaturedProps[] = [
    {
      title: 'HackMelbourne',
      body: 'After volunteering to be the website director of a Hackathon club, I was left with the redesign and development of the club’s website with very little technical knowledge of react and zero team members...',
      image: HMPhoto,
      alt: 'HackMelbourne home page',
      role: 'Website Director',
      link: '/project/HackMelbourne',
      date: 'NOV 2023 - Present',
    },
    {
      title: 'Auyea Farm',
      body: 'Entering a small start-up I was tasked to help redesign and redevelop their landing page utilising Angular. Being my first official employment this is how I navigated these challenges',
      image: AFPhoto,
      alt: 'Auyea Farm home page',
      role: 'UI/UX Designer + Front End Developer',
      link: '/project/AuyeaFarm',
      date: 'FEB 2024 - Present',
    },
    {
      title: 'GroupSpace',
      body: 'A 48hr hackathon, a total of 6 hours of sleep, and a team of 5 motivated individuals. We started off with a brilliant idea that we quickly realised was not so brilliant... ',
      image: GSPhoto,
      alt: 'GroupSpace home page',
      role: 'Project Manager + Front End Developer',
      link: '/project/GroupSpace',
      date: 'FEB 2024',
    },
  ]

  return (
    <>
      <div className="flex flex-col max-w-screen-lg mx-auto px-4 gap-24 pb-8 pt-32">
        {/* Introduction */}
        <section className="w-full bg-orange-100 flex flex-col md:flex-row p-16 md:items-center gap-8 items-start">
          <img
            className="h-32 w-32 rounded-full object-cover"
            src={profile}
          ></img>
          <p className="font-display text-2xl">
            Hi I’m Liang! Welcome to my portfolio :) I enjoy designing and
            creating fun and unique ideas. I'm a UI/UX designer that is also
            proficient in front-end development, this website is designed and
            made by me in React.
          </p>
        </section>

        {/* Featured projects */}
        <section>
          <h2 className=" font-display text-5xl">Featured Projects</h2>
          <div className="mt-8 flex flex-col gap-32">
            {projectList.map((value, index) => (
              <FeaturedProject {...value} key={index}></FeaturedProject>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
