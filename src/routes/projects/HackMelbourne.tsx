import cover from '../../assets/HackMelbourne/thumbnail.png'

const HackMelbourne = () => {
  return (
    <>
      <div className="flex flex-col max-w-screen-lg p-8 mx-auto gap-32">
        {/* Cover */}
        <section className="flex flex-col gap-2">
          <div className="flex flex-row justify-between font-display items-end">
            <h1 className=" text-3xl">HackMelbourne</h1>
            <p className=" text-xl">Role: Website Director</p>
          </div>
          <img className="w-full object-cover" src={cover}></img>
        </section>

        {/* Content */}
        <div className="flex flex-col gap-32 max-w-screen-md mx-auto">
          {/* Prologue */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">Prologue</h2>
            <p className=" text-lg">
              After recklessly (in a good way of course) volunteering to be the
              website director of a Hackathon club, I was left with the redesign
              and development of the club’s website with very little technical
              knowledge of react and zero team members.
              <br /> <br />
              As there was 2 more weeks before my official handover. In those
              two weeks I spent every single waking hour* dedicated to learning
              the ways of React.
              <br /> <br />
              *Exaggerated for literary effect
            </p>
          </section>

          {/* Defining the Issues */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              Defining the issues
            </h2>
            <img className="w-full h-64"></img>
            <div className="text-lg">
              <p className="">
                During the start of my days as the Website Director I first
                wanted to know what the biggest problems were with the current
                website. I asked around my friends and the other club directors
                for feedback and advice for what they wanted in the website.
              </p>
              <br />
              <p>The results of this inquiry showed that:</p>
              <ul className="list-disc list-inside">
                <li>A majority said it “looked plain”</li>
                <li>The mobile view was not well optimised</li>
                <li>There was very little reason to go to the website</li>
              </ul>
            </div>
          </section>

          {/* Finding Solutions */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              Finding solutions
            </h2>
            <div className="text-lg">
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
            </div>
            <img className="w-full h-64"></img>
          </section>

          {/* Finding Solutions */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              Experimenting
            </h2>
            <div className="text-lg">
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
            </div>
            <img className="w-full h-64"></img>
          </section>

          {/* Assembling a team */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              Assembling a team
            </h2>
            <div className="text-lg">
              Whilst I was creating the Figma drawings, I was also hosting
              interviews with our student engagement director to build my team
              of website officers. With very little experience in building a
              team, the interviews were more of a “vibe check” where as long as
              they seemed willing to communicate and had some sort of prior
              experience in React they would be welcomed to the team.
              <br />
              <br />
              In order to make sure that our team would work together
              efficiently, I had also:
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
            </div>
            <img className="w-full h-64"></img>
          </section>

          {/* Assembling a team */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              The beginning of development
            </h2>
            <div className="text-lg">
              At the start our teams workflow usually involved me creating the
              designs of a new component, then I would present it during our
              sprint meetings and then we would decide who is developing which
              component.
              <br />
              <br />
              After the first sprint cycle I quickly realised that I couldn’t
              just give my team members a static drawing with a desktop view and
              a mobile view as they would often code it differently to what I
              had envisioned.
              <br />
              <br />
              Most of the time it was fine as the end result was the same,
              however sometimes because of their altered approach, the
              responsive nature of the design would be altered, causing slight
              errors in edge cases.
              <br />
              <br />
              To solve this communication issue, I would simply make more
              comments on my designs detailing how the components should
              interact such as having the max width to 1028px. Other times, I
              would message them individually to know that there has been a
              misunderstanding in the task and how we can fix it.
            </div>
            <img className="w-full h-64"></img>
          </section>

          {/* Our first release */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              Our first release
            </h2>
            <div className="text-lg">
              After the holidays we had scaled back quite a few ideas and
              features in order to get the website deployed before University
              started. All the back-end functions were put on hold in order to
              make sure there is simply content that any new club members could
              see.
              <br />
              <br />
              Thinking back, setting realistic goals is definitely something
              that I would need to work on. However, despite all the setbacks
              and some late nights fixing bugs and implementing a simple leader
              board type game for orientation week (that got hacked by my friend
              in half an hour - I’m a designer not a cyber security specialist)
              we relaunched our website and got over 81 site visits on our first
              day!
            </div>
            <img className="w-full h-64"></img>
          </section>

          {/* Lessons and now */}
          <section className="flex flex-col gap-4">
            <h2 className=" text-5xl font-display text-center">
              Lessons and now
            </h2>
            <div className="text-lg">
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
            </div>
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
