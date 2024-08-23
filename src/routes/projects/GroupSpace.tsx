import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import ProjectBanner from '../../components/parts/projectPage/ProjectBanner'
import cover from '../../assets/GroupSpace/thumbnail.png'
import coverMobile from '../../assets/GroupSpace/coverMobile.png'
import { ANIMATIONSETTINGS as anim } from './constants'

const GroupSpace = () => {
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
          title="GroupSpace"
          description="Role: Project Manager + Frontend Developer"
          srcDesktop={cover}
          srcMobile={coverMobile}
          alt="Home page of GroupSpace website"
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
              A 48hr hackathon, a total of 6 hours of sleep, and a team of 5
              motivated individuals. We started off with a brilliant idea that
              we quickly realised was not so brilliant...
              <br /> <br />
              Originally we had wanted to create a travel planner that
              implemented a pathing algorithm to maximise your time efficiency
              overseas. The idea was great, however we quickly found out that
              there was already a product that essentially did exactly what we
              were making. Furthermore, the scope of the project was also quite
              large and the 48 hour (now 44 hour) felt like we weren't going to
              finish on time.
            </motion.p>
          </section>

          {/* Defining the Issues */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              Changing directions
            </h2>
            <img className="w-full h-64"></img>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: anim.delay, duration: anim.duration }}
              viewport={{ once: true }}
              className="text-lg"
            >
              <p>
                We initially wanted to keep the idea of the travel planner and I
                quite liked the idea which may have caused us to spend a bit too
                much time trying to save the idea. After 30-40 minutes of
                discussing I had realised the travel planner idea was not going
                to work (with the help of my team convincing me! I definitely
                should have been less stubborn here).
                <br />
                <br />
                Afterwards we set our sights on our second best idea of creating
                a group matching site for students in university. Targetting the
                usually terrible experience of group projects.
              </p>
            </motion.div>
          </section>

          {/* Finding Solutions */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              The first night
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: anim.delay, duration: anim.duration }}
              viewport={{ once: true }}
              className="text-lg"
            >
              After sorting out our direction, we created our first "sprint"
              cycle of 6 hours where I divided up the tasks and made sure
              everyone knew what they were doing. During this stage we had one
              person working on the backend, two developers coding the skeleton
              of the front-end and a UI Designer and myself designing the UI of
              the front-end.
              <br />
              <br />
              My role within the team mostly included the distribution of tasks
              aswell as filling in any gaps of knowledge or manpower that we had
              at the moment. Overall though, the first day went quite smoothly
              once we had all settled in.
            </motion.div>
            <img className="w-full h-64"></img>
          </section>

          {/* Finding Solutions */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">Day 2</h2>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: anim.delay, duration: anim.duration }}
              viewport={{ once: true }}
              className="text-lg"
            >
              We continued working at the pace as last night, armed with only 3
              hours of sleep we knew we had quite a lot ahead of us. I had
              finished the authentication system using google auth and we were
              now working on the dashboard and the class creation functionality.
              <br />
              <br />
              During this time we were starting to realise that despite
              narrowing down the scope, our web application still had too many
              components. However, we had already started the project and
              therefore decided to focus on the functionality of the web
              application rather than the asthetics.
              <br />
              <br />
              Looking back, this was the correct decision, however this should
              have been how the project was to be handled from the very start.
              Due to me and the rest of our teams inexperience with the backend
              code we had placed too many resources on the front end and
              neglected the actual functionality of the web application.
            </motion.div>
            <img className="w-full h-64"></img>
          </section>

          {/* Assembling a team */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">Final day</h2>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: anim.delay, duration: anim.duration }}
              viewport={{ once: true }}
              className="text-lg"
            >
              With less than 12 hours to go, our backend was just completed and
              we were facing issues connecting the frontend with the backend
              data. Being the one with the most experience working with firebase
              I jumped over to help connect the backend with the frontend. In my
              opinion this was where I made a big mistake as the project
              Manager.
              <br />
              <br />
              As I dived into solving these critical issues, our team
              essentially felt slightly lost. Looking back I should have either
              taught my teammates how to handle these issues (though i wasn't
              too certain myself either) or delegated someone else to lead the
              project whilst I fixed the problems.
              <br />
              <br />
              Overall, when the submission time up we had submitted a project
              that had functionality and did indeed connect properly to a
              firebase backend, however its functionality was limited making it
              difficult to score highly amongst the judges.
            </motion.div>
            <img className="w-full h-64"></img>
          </section>

          {/* Assembling a team */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              Lessons learnt and final thoughts
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: anim.delay, duration: anim.duration }}
              viewport={{ once: true }}
              className="text-lg"
            >
              Overall despite not getting any prizes, I would say that this
              hackathon taught me way more than the hackathons where I had won.
              And despite the issues my team faced, we had all put our
              collaborative effort into the project and despite it not being
              finished we were all quite proud of what we had done.
              <br />
              <br />
              The main lessons I learnt during this hackathon was definitely to
              start small. Have a small scope that can then expand rather than a
              large scope that can not be done in the given time frame.
              <br />
              <br />
              Another lesson I had learnt was about effective leadership. I
              think I should have focused more on my role as the project manager
              and made sure everyone was being 100% productive than making sure
              I was always working on the code.
              <br />
              <br />
              Finally, some things me and my team did well. (Whilst
              introspecting is important I also can't end this section on a bad
              note! What if a future employer reads this!) Anyways, I think we
              did a really good job during our first day, it felt like morale
              was high, everyone knew what they were doing. The UI designs I
              made for our front page in collaboration with our other designer
              (she was more incharge of the amazing illustrations) also turned
              out stunning. I had also learnt not only soft skills in leadership
              and management but also how to use firebase better and designing
              web applications that actually connect properly to the backend :)
            </motion.div>
            <img className="w-full h-64"></img>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              A snapshop of GroupSpace (End of Hackathon)
            </h2>
            <img className="w-full h-64"></img>
          </section>
        </div>
      </div>
    </>
  )
}

export default GroupSpace
