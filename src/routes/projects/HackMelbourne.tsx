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
            <h2 className=" text-5xl font-display text-center">Prologue</h2>
            <motion.p
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: anim.delay, duration: anim.duration }}
              viewport={{ once: true }}
              className=" text-lg"
            >
              After volunteering to be the website director of a Hackathon club,
              I was left with the redesign and development of the club’s website
              with very little technical knowledge of react and zero team
              members.
              <br /> <br />
              As there was 2 more weeks before my official handover. In those
              two weeks I spent every single waking hour* dedicated to learning
              the ways of React.
              <br /> <br />
              *Exaggerated for literary effect
            </motion.p>
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
            <img className="w-full h-64"></img>
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
              As I will be the website director for the whole of 2024, we are
              still all learning and continuously improving the website. One
              thing I learnt was that it is so useful having more participation
              in the ideation phase during our meetings rather than me
              presenting an idea to my team. Sometimes I have to call on my team
              mates for their opinions but even when their ideas might not be
              the best I try my best to note them down as who knows what can
              develop from an unsuspecting idea.
              <br />
              <br />
              As we are a club it is also difficult to make sure everyone is
              balancing their uni work and any actual jobs with our club
              responsibilities. I am now trying to have a better understanding
              of everyones work loads in order to make sure my team isn’t burnt
              out aswell.
              <br />
              <br />
              Currently, our website is steadily increasing in traffic. From an
              average of only 5 visitors a day before the website redesign to
              over 20 visitors daily and that number is still growing! Obviously
              these metrics are not the most important, but it is still nice
              seeing that quantified success :)
            </motion.div>
            <img className="w-full h-64"></img>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              A snapshop of Hack.Melbourne (March 2024)
            </h2>
            <img className="w-full h-64"></img>
          </section>
        </div>
      </div>
    </>
  )
}

export default HackMelbourne
