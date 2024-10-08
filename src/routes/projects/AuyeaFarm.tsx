import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import ProjectBanner from '../../components/parts/projectPage/ProjectBanner'
import cover from '../../assets/AuyeaFarm/thumbnail.png'
import coverMobile from '../../assets/AuyeaFarm/coverMobile.png'

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
          srcDesktop={cover}
          srcMobile={coverMobile}
          alt="Home page of Auyea website"
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
              Entering a small start-up I was tasked to help redesign and
              redevelop their landing page utilising{' '}
              <strong> Angular 12 </strong>. Being unfamiliar with Angular, I
              found myself needing to quickly learn the Angular framework on the
              go.
              <br />
              <br />
              Auyea's home page was in need of a redesign as their shift in
              business strategy to attract more new customers{' '}
              <strong>
                {' '}
                required the bounce rate for the home page to be as low as
                possible{' '}
              </strong>
              .
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
                I first examined how the website felt through browsing around
                the website through a
                <strong> task analysis of making a purchase</strong>.
              </motion.p>
              <br />
              Additionally I utilised
              <strong> qualitative interviews from staff memebers </strong>
              regarding their experiences on the website and thoughts they had
              that could be improved
              <br />
              <br />
              <p>The results of this inquiry showed that:</p>
              <ul className="list-disc list-inside">
                <li>
                  The <strong>website lacked the brand identity</strong> that
                  was found in their promotional materials
                </li>
                <li>
                  Certain buttons were fancy, but the{' '}
                  <strong>
                    user may find it difficult to associate it as a button
                  </strong>
                </li>
                <li>
                  The{' '}
                  <strong>
                    main target audience are moms in their 40s-60s
                  </strong>{' '}
                  which meant they were not very technologically literate
                </li>
              </ul>
            </motion.div>
          </section>

          {/* Finding Solutions */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              Finding solutions through Figma
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: anim.delay, duration: anim.duration }}
              viewport={{ once: true }}
              className="text-lg"
            >
              First I wanted to <strong> simplify the home page </strong> to
              make getting to the online store the main focus.
              <br />
              <br />
              Additionally, I decided to continue and extend Auyea's flat 2D art
              style from its packaging graphics to build more
              <strong>
                {' '}
                coherence between the physical and digital branding
              </strong>
              <br />
              <br />I also simplified the button design to be{' '}
              <strong> simple yet still represent Auyea's colour scheme</strong>
            </motion.div>
            <img className="w-full h-64"></img>
          </section>

          {/* Finding Solutions */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              First iteration
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
                However, during one of our daily standups, we realised we wanted
                to promote both the events aswell as the online shop that Auyea
                was creating.
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
              Second Iteration
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
