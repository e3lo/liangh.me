import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import ProjectBanner from '../../components/parts/projectPage/ProjectBanner'
import cover from '../../assets/HackMelbourne/thumbnail.png'
import coverMobile from '../../assets/HackMelbourne/coverMobile.png'
import { ANIMATIONSETTINGS as anim } from './constants'

import img1 from '../../assets/HackMelbourne/img1.jpg'
import img2 from '../../assets/HackMelbourne/img2.jpg'
import img3 from '../../assets/HackMelbourne/img3.jpg'
import img4 from '../../assets/HackMelbourne/img4.jpg'
import img5 from '../../assets/HackMelbourne/img5.jpg'
import img6 from '../../assets/HackMelbourne/img6.jpg'
import snapshot from '../../assets/HackMelbourne/HMSnapshot.jpg'
import SkillCard from '../../components/parts/skillCard/SkillCard'

import {
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiJira,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

const HackMelbourne = () => {
  const headerRef = useRef<HTMLDivElement>(null)

  let { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ['start start', 'end start'],
  })

  let headerOpacity = useTransform(scrollYProgress, [0, 0.7], ['100%', '0%'])
  let headerScale = useTransform(scrollYProgress, [0, 0.7], ['100%', '90%'])

  return (
    <>
      {/* Cover */}
      <motion.div
        className="fixed w-full -z-10"
        ref={headerRef}
        style={{ opacity: headerOpacity, scale: headerScale }}
      >
        <ProjectBanner
          title="HackMelbourne"
          description="Role: Website Director"
          srcDesktop={cover}
          srcMobile={coverMobile}
          alt="Home page of Hackmelbourne website"
        ></ProjectBanner>
      </motion.div>
      <div className="w-full h-[90vh]"></div>

      {/* Content */}
      <div className="flex flex-col max-w-screen-lg p-8 mx-auto gap-32 bg-neutral-50 z-10">
        <div className="flex flex-col gap-32 max-w-screen-md mx-auto">
          {/* Prologue */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">Summary</h2>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: anim.delay, duration: anim.duration }}
              viewport={{ once: true }}
              className=" text-lg flex flex-col gap-4"
            >
              <p>
                I was incharge of the website team for HackMelbourne, our team
                size grew to 7 people and I led the development and design
                process to create our club's new website.
              </p>

              <p>
                During this time I refined my design style and learnt a lot of
                practical lessons:
              </p>
              <SkillCard
                className="border-[#F24E1E] bg-[#F24E1E]/5"
                title="Figma"
                subtitle={[
                  'Effective developer handoff',
                  'Responsive Design',
                  'Reusable Components',
                  'Design Collaboration',
                ]}
              >
                <SiFigma className="text-[#F24E1E] h-12 w-12"></SiFigma>
              </SkillCard>
              <br />
              <p>
                Additionally I also became very proficient in the following:
              </p>

              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <SkillCard
                  className="border-[#61DAFB] bg-[#61DAFB]/5"
                  title="React 18"
                >
                  <SiReact className="text-[#61DAFB] h-12 w-12"></SiReact>
                </SkillCard>
                <SkillCard
                  className="border-[#3178C6] bg-[#3178C6]/5"
                  title="Typescript"
                >
                  <SiTypescript className="text-[#3178C6] h-12 w-12"></SiTypescript>
                </SkillCard>
                <SkillCard
                  className="border-[#06B6D4] bg-[#06B6D4]/5"
                  title="TailwindCSS"
                >
                  <SiTailwindcss className="text-[#06B6D4] h-12 w-12"></SiTailwindcss>
                </SkillCard>
                <SkillCard
                  className="border-[#DD2C00] bg-[#DD2C00]/5"
                  title="Firebase"
                >
                  <SiFirebase className="text-[#DD2C00] h-12 w-12"></SiFirebase>
                </SkillCard>
                <SkillCard
                  className="border-[#F05032] bg-[#F05032]/5"
                  title="Git"
                >
                  <SiGit className="text-[#F05032] h-12 w-12"></SiGit>
                </SkillCard>
                <SkillCard
                  className="border-[#181717] bg-[#181717]/5"
                  title="GitHub"
                >
                  <SiGithub className="text-[#181717] h-12 w-12"></SiGithub>
                </SkillCard>
                <SkillCard
                  className="border-[#0052CC] bg-[#0052CC]/5"
                  title="Jira"
                >
                  <SiJira className="text-[#0052CC] h-12 w-12"></SiJira>
                </SkillCard>
                <SkillCard
                  className="border-[#0055FF] bg-[#0055FF]/5"
                  title="Framer Motion"
                >
                  <SiFramer className="text-[#0055FF] h-12 w-12"></SiFramer>
                </SkillCard>
              </ul>

              <br />
              <p>Finally, our results:</p>

              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <SkillCard
                  className="border-orange-400 bg-orange-100 "
                  title="2,000+"
                  subtitle={['Unique Users']}
                ></SkillCard>
                <SkillCard
                  className="border-orange-400 bg-orange-100"
                  title="127%"
                  subtitle={['Increase in 7 Day Average Traffic']}
                ></SkillCard>
                <SkillCard
                  className="border-orange-400 bg-orange-100"
                  title="150+"
                  subtitle={['Daily Users Peak Traffic']}
                ></SkillCard>
                <SkillCard
                  className="border-orange-400 bg-orange-100"
                  title="500+"
                  subtitle={['Monthly Users Peak Traffic']}
                ></SkillCard>
                <SkillCard
                  className="border-orange-400 bg-orange-100"
                  title="190%"
                  subtitle={['Increase in average engagement time']}
                ></SkillCard>
                <SkillCard
                  className="border-orange-400 bg-orange-100"
                  title="6,800+"
                  subtitle={['Total Page Views']}
                ></SkillCard>
              </ul>
            </motion.div>
          </section>

          {/* Defining the Issues */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              Defining the issues
            </h2>
            <img className="w-full" src={img1}></img>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: anim.delay, duration: anim.duration }}
              viewport={{ once: true }}
              className="text-lg"
            >
              <motion.p className="">
                During the start of my days as the Website Director I first
                wanted to know what the biggest problems were with the current
                website. I asked around my friends and the other club directors
                for feedback and advice for what they wanted in the website.
              </motion.p>
              <br />
              <p>The results of this inquiry showed that:</p>
              <ul className="list-disc list-inside">
                <li>A majority said it “looked plain”</li>
                <li>The mobile view was not well optimised</li>
                <li>There was very little reason to go to the website</li>
              </ul>
            </motion.div>
          </section>

          {/* Finding Solutions */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              Finding solutions
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: anim.delay, duration: anim.duration }}
              viewport={{ once: true }}
              className="text-lg"
            >
              The website looking plain was to be expected and mobile issues are
              an easy fix. The main issue in my opinion was that there was no
              reason for people to go to the website. The website was static and
              only had a brief description of the 3 major events that our club
              was hosting, but all that information was also posted on Instagram
              and Facebook as well.
              <br />
              <br />
              In a brainstorming session with me and few other directors of the
              club, we listed a bunch of ideas that we could add to the website
              to enable more “purpose”. After all, there isn’t much point to
              developing a website without a goal in mind.
              <br />
              <br />
              Some of these ideas were crazy, others were insanely difficult to
              implement, however we wanted ideas and thus we just listed out
              whatever ones we could think of.
              <br />
              <br />
              Ultimately our long term solutions to drive more traffic came down
              to:
              <ul className="list-disc list-inside">
                <li>A meet the team page to boost team identity</li>
                <li>
                  An updated calendar/events list to show what events are coming
                  soon
                </li>
                <li>
                  A free educational blog section for Hackathons as it aligns
                  with our clubs goal of making hackathons more accessible
                </li>
              </ul>
            </motion.div>
            <img className="w-full" src={img2}></img>
          </section>

          {/* Figma */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              Experimenting
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: anim.delay, duration: anim.duration }}
              viewport={{ once: true }}
              className="text-lg"
            >
              Utilising Figma, I created small mock-ups of the website and what
              kind of visual style I wanted to create. I knew I wanted to go
              with a dark theme as it matched the black background of our clubs
              logo, but I wasn’t too sure how I would design my landing page.
              <br />
              <br />I experimented with different layouts, grids and colours. I
              had a lot of really fancy animations that I wanted to utilise to
              create these landing pages, however after taking a break from
              designing and revisiting the designs, I realised I needed
              something that would not make my new developers cry and getting a
              product out there would be more important.
            </motion.div>
            <img className="w-full" src={img3}></img>
          </section>

          {/* Assembling a team */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              Assembling a team
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: anim.delay, duration: anim.duration }}
              viewport={{ once: true }}
              className="text-lg"
            >
              Whilst I was creating the Figma drawings, I was also hosting
              interviews with our student engagement director to build my team
              of website officers. With very little experience in building a
              team, the interviews were more of a “vibe check” where as long as
              they seemed willing to communicate and had some sort of prior
              experience in React they would be welcomed to the team.
              <br />
              <br />
              In order to make sure that our team would work together
              efficiently, I had also
              <ul className="list-disc list-inside">
                <li>
                  <strong>Changed to codebase to use Typescript </strong>
                  as this would make connecting props between components much
                  easier
                </li>
                <li>
                  <strong>Added TailwindCSS </strong>
                  to avoid enforcing CSS class naming conventions
                </li>
                <li>
                  <strong>Added CI/CD pipelines with Netlify </strong>
                  so every pull request will build the website to avoid major
                  bugs being merged to our dev branch
                </li>
                <li>
                  <strong>Implemented a 2 week sprint cycle </strong>
                  to assign tasks and make sure everyone is on the same page
                </li>
              </ul>
            </motion.div>
            <img className="w-full" src={img4}></img>
          </section>

          {/* The beginning of development */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              The beginning of development
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: anim.delay, duration: anim.duration }}
              viewport={{ once: true }}
              className="text-lg"
            >
              As we developed the website, our workflow changed accordingly to
              our needs and the lessons I learnt along the way. The main thing I
              realised was how{' '}
              <strong>
                important communicating the design was to my teammates{' '}
              </strong>{' '}
              as their interpretation would often be different to how I
              envisioned it.
              <br />
              <br />
              Because of this, I learnt to give lots of comments and
              explanations for my team members on the figma files detailing
              behaviour for edge cases and responsiveness.
            </motion.div>
            <img className="w-full" src={img5}></img>
          </section>

          {/* Our first release */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              Our first release
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: anim.delay, duration: anim.duration }}
              viewport={{ once: true }}
              className="text-lg"
            >
              After the holidays we had scaled back quite a few ideas and
              features in order to get the website deployed before University
              started.
              <br />
              <br />
              Thinking back,<strong> setting realistic goals</strong> is
              definitely something that I would need to work on. However,
              despite all the setbacks we were able to release on time and
              receive <strong>over 100 site visits on our opening day!</strong>
            </motion.div>
            <img className="w-full" src={img6}></img>
          </section>

          {/* Lessons and now */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              Lessons and now
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: anim.delay, duration: anim.duration }}
              viewport={{ once: true }}
              className="text-lg"
            >
              <p>
                Through this experience, I have learnt a lot about the{' '}
                <b>whole lifecycle of website development</b>, from a single
                idea to desiging, to developing and finally deploying.
              </p>
              <br />
              <p>
                I learnt a lot about{' '}
                <b>working effectively as a team and as a leader</b> :
                especially assiging tasks that are both challenging and do-able
                for team members.
              </p>
              <br />
              <p>
                Finally, I also saw the importance of{' '}
                <b>good communication within my design </b> , making sure any
                developer would be able to develop what I had envisioned. I
                think my technical background also helps as I am able to
                effectively communicate the important details
              </p>
            </motion.div>
            <img className="w-full" src={snapshot}></img>
          </section>
        </div>
      </div>
    </>
  )
}

export default HackMelbourne
