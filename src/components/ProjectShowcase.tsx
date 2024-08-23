import StickyProjectDisplay from './parts/StickyProjectDisplay'

// import casIndexImg1 from "../assets/CasIndex/thumbnail1.png";
// import casIndexImg2 from "../assets/CasIndex/thumbnail2.png";

import GSImg1 from '../assets/GroupSpace/Login.png'
import GSImg2 from '../assets/GroupSpace/Homepage.png'

import CCImg1 from '../assets/CulinaryCode/thumbnail1.png'
import CCImg2 from '../assets/CulinaryCode/thumbnail2.png'

import HMImg1 from '../assets/HackMelbourne/thumbnail1.png'
import HMImg2 from '../assets/HackMelbourne/thumbnail2.png'

const CardBanner = () => {
  return (
    <>
      <div className=" flex flex-col m-auto items-center max-w-sm text-center gap-2 mt-16 my-8">
        <h1 className=" text-4xl font-bold">Featured Projects</h1>
        <p>My best and most recent works. </p>
      </div>
      <StickyProjectDisplay
        title="HackMelbourne"
        urlPath="project/HackMelbourne"
        description="Website Director for HackMelbourne. Led a team of 4 to create a website using React (TSX), TailwindCSS and designed by me."
        img1={HMImg1}
        img2={HMImg2}
      />
      <StickyProjectDisplay
        title="GroupSpace"
        urlPath="project/GroupSpace"
        description="A web application aimed at simplifying the group finding process in universities. Developed for a 48Hr Hackathon with 4 other developers using React front-end and Firebase-backend"
        img1={GSImg1}
        img2={GSImg2}
      />
      <StickyProjectDisplay
        title="CulinaryCode"
        urlPath="project/CulinaryCode"
        description="First place minimalistic website for cooking recipes created for a Hackathon. Made with VUE.JS and vanilla css and designed by me "
        img1={CCImg1}
        img2={CCImg2}
      />
    </>
  )
}

export default CardBanner
