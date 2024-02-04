import { Progress, Typography } from "@material-tailwind/react";

const Skills = () => {
  return (
    <div id="skill" className="my-20">
      <h1 className="text-center font-bold text-3xl md:text-4xl mb-8">
        Skills
      </h1>
      <div className="w-full md:w-4/5 lg:w-1/2 mx-auto">
        <h1 className="text-xl font-semibold text-gray-700 text-center my-4">
          Front-End
        </h1>
        <div className="w-full mx-auto mb-3">
          <Typography color="red-gray" variant="h6">
            React JS
          </Typography>
          <Progress color="red" value={90} />
        </div>
        <div className="w-full mx-auto mb-3">
          <Typography color="red-gray" variant="h6">
            JavaScript
          </Typography>
          <Progress color="red" value={90} />
        </div>
        <div className="w-full mx-auto mb-3">
          <Typography color="red-gray" variant="h6">
            Tailwind CSS
          </Typography>
          <Progress color="red" value={90} />
        </div>
        <div className="w-full mx-auto mb-3">
          <Typography color="red-gray" variant="h6">
            NEXT JS
          </Typography>
          <Progress color="red" value={40} />
        </div>
        <div className="pt-5">
          <p className="flex flex-wrap md:flex-row items-center text-sm gap-6 justify-center">
            <a>
              <div className="text-center">
                <img
                  src="https://skillicons.dev/icons?i=html"
                  alt="Html Icon"
                />
                <div className="mt-1">
                  <p>HTML</p>
                </div>
              </div>
            </a>
            <a>
              <div className="text-center">
                <img src="https://skillicons.dev/icons?i=css" alt="CSS Icon" />
                <div className="mt-1">
                  <p>CSS</p>
                </div>
              </div>
            </a>
            <a>
              <div className="text-center">
                <img
                  src="https://skillicons.dev/icons?i=react"
                  alt="React Icon"
                />
                <div className="mt-1">
                  <p>React</p>
                </div>
              </div>
            </a>

            <a>
              <div className="text-center">
                <img
                  src="https://skillicons.dev/icons?i=js"
                  alt="JavaScript Icon"
                />
                <div className="mt-1">
                  <p>JavaScript</p>
                </div>
              </div>
            </a>

            <a>
              <div className="text-center">
                <img
                  src="https://skillicons.dev/icons?i=tailwind"
                  alt="Tailwind CSS Icon"
                />
                <div className="mt-1">
                  <p>TailwindCSS</p>
                </div>
              </div>
            </a>

            <a>
              <div className="text-center">
                <img
                  src="https://skillicons.dev/icons?i=nextjs"
                  alt="Next.js Icon"
                />
                <div className="mt-1">
                  <p>Next.js</p>
                </div>
              </div>
            </a>
          </p>
        </div>
      </div>
      <div className="w-full md:w-4/5 lg:w-1/2 mx-auto mt-10 lg:mt-16">
        <h1 className="text-xl font-semibold text-gray-700 text-center my-4">
          Back-End
        </h1>
        <div className="w-full mx-auto mb-3">
          <Typography color="red-gray" variant="h6">
            MongoDB
          </Typography>
          <Progress color="red" value={80} />
        </div>
        <div className="w-full mx-auto mb-3">
          <Typography color="red-gray" variant="h6">
            Express JS
          </Typography>
          <Progress color="red" value={70} />
        </div>
        <div className="w-full mx-auto mb-3">
          <Typography color="red-gray" variant="h6">
            Node JS
          </Typography>
          <Progress color="red" value={40} />
        </div>
        <div className="pt-5">
          <p className="flex flex-wrap md:flex-row items-center text-sm gap-6 justify-center">
            <a>
              <div className="text-center">
                <img
                  src="https://skillicons.dev/icons?i=mongodb"
                  alt="MongoDB Icon"
                />
                <div className="mt-1">
                  <p>MongoDB</p>
                </div>
              </div>
            </a>

            <a>
              <div className="text-center">
                <img
                  src="https://skillicons.dev/icons?i=expressjs"
                  alt="Express.js Icon"
                />
                <div className="mt-1">
                  <p>Express.js</p>
                </div>
              </div>
            </a>

            <a>
              <div className="text-center">
                <img
                  src="https://skillicons.dev/icons?i=nodejs"
                  alt="Node.js Icon"
                />
                <div className="mt-1">
                  <p>Node.js</p>
                </div>
              </div>
            </a>
          </p>
        </div>
      </div>
      <div className="w-full md:w-4/5 lg:w-1/2 mx-auto mt-10 lg:mt-16">
        <h1 className="text-xl font-semibold text-gray-700 text-center my-4">
          Tools
        </h1>
        <div className="pt-5">
          <p className="flex flex-wrap md:flex-row items-center text-sm gap-5 justify-center">
            <a>
              <div className="text-center">
                <img
                  src="https://skillicons.dev/icons?i=firebase"
                  alt="Firebase Icon"
                />
                <div className="mt-1">
                  <p>Firebase</p>
                </div>
              </div>
            </a>

            <a>
              <div className="text-center">
                <img
                  src="https://skillicons.dev/icons?i=vercel"
                  alt="Vercel Icon"
                />
                <div className="mt-1">
                  <p>Vercel</p>
                </div>
              </div>
            </a>

            <a>
              <div className="text-center">
                <img
                  src="https://skillicons.dev/icons?i=figma"
                  alt="Figma Icon"
                />
                <div className="mt-1">
                  <p>Figma</p>
                </div>
              </div>
            </a>

            <a>
              <div className="text-center">
                <img src="https://skillicons.dev/icons?i=git" alt="Git Icon" />
                <div className="mt-1">
                  <p>Git</p>
                </div>
              </div>
            </a>

            <a>
              <div className="text-center">
                <img
                  src="https://skillicons.dev/icons?i=github"
                  alt="GitHub Icon"
                />
                <div className="mt-1">
                  <p>GitHub</p>
                </div>
              </div>
            </a>

            <a>
              <div className="text-center">
                <img
                  src="https://skillicons.dev/icons?i=vite"
                  alt="Vite Icon"
                />
                <div className="mt-1">
                  <p>Vite</p>
                </div>
              </div>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
