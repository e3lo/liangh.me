import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import ProjectBanner from '../../components/parts/projectPage/ProjectBanner'
import cover from '../../assets/HackMelbourne/thumbnail.png'
import { ANIMATIONSETTINGS as anim } from './constants'

const AuyeaFarm = () => {
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
          title="Auyea Farm"
          description="Role: UI/UX Designer + Front End Developer"
          src={cover}
          alt="Home page of Auyea website"
        ></ProjectBanner>
      </motion.div>
      <div className="w-full h-screen"></div>

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
              Entering a small start-up I was tasked to help redesign and
              redevelop their landing page utilising Angular. Being unfamiliar
              with Angular, I found myself needing to quickly learn the Angular
              framework on the go.
              <br />
              <br />
              Auyea's home page was in dire need of a redesign as their shift in
              business strategy to attract more new customers required the
              bounce rate for the home page to be as low as possible.
            </motion.p>
          </section>

          {/* Defining the Issues */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              Defining the issues
            </h2>
            <img className="w-full h-64"></img>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: anim.delay, duration: anim.duration }}
              viewport={{ once: true }}
              className="text-lg"
            >
              <motion.p className="">
                From the start I first examined how the website felt through
                browsing around the website. Then I got feedback and thoughts
                from the workers and founders as to what issues they feel like
                are present what they operate the home page. I wanted to do more
                research, however as we were in a time crunch and I needed to
                present an initial design within a week, the majority of
                problems were what I thought may have been present.
              </motion.p>
              <br />
              <p>The results of this "inquiry" showed that:</p>
              <ul className="list-disc list-inside">
                <li>
                  The website lacked the brand identity that was found in their
                  promotional materials
                </li>
                <li>
                  Certain buttons were fancy, but the user would not know it was
                  a button
                </li>
                <li>
                  The main target audience are moms in their 40s-60s which meant
                  they were not very technologically literate
                </li>
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
              Initially, my approach seeked to simplify the home page as the
              majority of customers were there to make a purchase for Auyea's
              webstore. I decided to continue and extend Auyea's flat 2D art
              style to build more coherence between the branding of the printed
              materials.
              <br />
              <br />
              To make the website easier to use, I decided to use the standard
              buttons with simple rounded edges, I added an on hover and on
              press effect for extra feedback to the users.
            </motion.div>
            <img className="w-full h-64"></img>
          </section>

          {/* Finding Solutions */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              Second iteration
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: anim.delay, duration: anim.duration }}
              viewport={{ once: true }}
              className="text-lg flex flex-col gap-4"
            >
              <img className="w-full h-64"></img>
              <p>
                The feedback from the initial designs where recieved quite
                positively, everyone was quite pleased with the new 2D
                "silhouette" aesthetic and thus I began implementing the design
                within Angular
              </p>
              <p>
                In order to make the components more reusable, I had made the
                components all take in props (or the angular equivalent) so that
                ideally each page would be made up of multiple Angular
                components which made maintaining the contents much easier.
              </p>
              <p>
                However, after another strategy meeting, we decided that the
                hero section needed to be reworked as Auyea wished to promote
                their two areas equally. This was quite a design challenge as
                Auyea wanted to essentially display two "cards" on the hero
                screen simultaneously.
              </p>
              <p>
                This was quite a challenge as on the mobile screen it was
                difficult to fit in both cards especially on smaller screen
                sizes. After quite a bit of experimenting with the layout I
                settled on a 2x2 grid layout.
              </p>
            </motion.div>
            <img className="w-full h-64"></img>
          </section>

          {/* Assembling a team */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              Third iteration
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: anim.delay, duration: anim.duration }}
              viewport={{ once: true }}
              className="text-lg flex flex-col gap-4"
            >
              <p>
                After designing the 2x2 grid layout for the hero banner, I
                showed it to the team and we quickly realised that because we
                needed to squeeze the content in the mobile viewport, the
                desktop view felt a little too empty.
              </p>
              <p>
                To address this I had considered using a series of parallax
                effects such that the hero page is a lake that when the user
                scrolls down, the lake opens up to them. However, I quickly
                realised I didn't have the artistic skills to first draw the
                lake in the Auyea's visual style and the implementation would
                take a lot longer than the time the project provided.
              </p>
              <img className="w-full h-64"></img>
              <p>
                Thus I settled with using a parallax image background that
                featured a gradient to lead the user into the next portion of
                the website.
              </p>
            </motion.div>
            <img className="w-full h-64"></img>
          </section>

          {/* Assembling a team */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              Fourth iteration!
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: anim.delay, duration: anim.duration }}
              viewport={{ once: true }}
              className="text-lg flex flex-col gap-4"
            >
              <p>
                After implementing the new 2x2 grid design within the website,
                we were testing the new home page when we realised the hero
                banner isn't particularly attention grabbing. It functioned more
                as a type of menu rather than the hero of a landing page. As
                much as it frustrated me, I agreed that the hero would likely
                not grab the attention of new visitors.
              </p>
              <p>
                Ultimately we decided to put the old hero banner underneath the
                new hero banner as the user experience still made sense. Thus
                the new landing page would follow this structure:
                <ol className=" list-decimal list-inside font-semibold">
                  <li>Attention grabbing Hero section with "Wow" factor</li>
                  <li>
                    A choice for the user to go to the online store or farm
                    experiences
                  </li>
                  <li>Content introducing Auyea Farm</li>
                </ol>
              </p>
              <p>
                After another series of experimenting, testing and developing
                more refined prototypes to ensure I don't code something and{' '}
                <i>then</i> figure out that there is an issue, I had arrived at
                a design that incorporates that lake-parallax idea I had
                initially.
              </p>
              <img className="w-full h-64"></img>
              <p>
                Initially this design concept utilises scroll hijacking to
                showcase a side-scrolling mountain silhouette with the different
                areas Auyea is invovled in. However, after some testing the
                scroll hijacking felt too unnatural to the users expectation of
                content going up when scrolling down. Thus I made all the moving
                elements in the hero move upwards to help the avoid feeling
                "lost". This included:
                <ol className=" list-disc list-inside">
                  <li>
                    Making the sun rise instead of set as the user scrolls
                  </li>
                  <li>Removing the sidescrolling ground part</li>
                  <li>Having the title text scroll upwards</li>
                </ol>
              </p>
            </motion.div>
            <img className="w-full h-64"></img>
          </section>

          {/* Our first release */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              First major release!
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: anim.delay, duration: anim.duration }}
              viewport={{ once: true }}
              className="text-lg"
            >
              <p>
                After a few more bug fixes, updating image selections, and
                implementing the Angular translation pipes as the Auyea catered
                towards both English and Chinese speaking customers, my redesign
                of the home page was finally deployed!
              </p>
              <p>
                Whilst there is still a mountain of work ahead, I think its
                always good to appreciate what has been accomplished aswell. As
                of writing (APR 2024) there has not been a meaningful amount of
                data to draw any conclusions about the effectiveness of the
                redesign, however internally, everyone seems to quite like the
                new designs!
              </p>
            </motion.div>
            <img className="w-full h-64"></img>
          </section>

          {/* Lessons and now */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              Lessons learnt
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: anim.delay, duration: anim.duration }}
              viewport={{ once: true }}
              className="text-lg"
            >
              <p>
                I would be lying if I said the repeated revisions did not
                frustrate me. Even though I understand it is a crucial part of
                the design process, the changing targets and requirements often
                did make me feel a little annoyed. That said, this section is to
                focus on what could have been done and what should be done in
                the future!
              </p>
              <br></br>
              <p>
                To avoid revisions - especially those that require recoding the
                entire page, I learnt just how important it is to have a high
                fidelity mockup that can be tested. It is a lot more difficult
                for those in non-technical roles to visualise how things may
                work and having a good interactive mockup should minimise
                scenarios where pages have to be recoded.
              </p>
              <br></br>
              <p>
                Scope creep! The most important thing I also learnt was to make
                everything work first before adding all the fancy animations and
                perfectly reusable components. Auyea is a small company and
                whilst hard coding isn't ideal, deadlines aren't ideal either.
                Sometimes, its better to just hard code a page in 30 minutes
                than create a list of reusable components that fetch data from a
                backend and implementing CRUD functionality which might take 3-4
                hours when its unlikely to save any meaningful time in the next
                5 years.
              </p>
            </motion.div>
            <img className="w-full h-64"></img>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              A snapshop of Auyea.com.au (April 2024)
            </h2>
            <img className="w-full h-64"></img>
          </section>
        </div>
      </div>
    </>
  )
}

export default AuyeaFarm
