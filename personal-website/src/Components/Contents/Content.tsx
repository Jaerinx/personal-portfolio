// import { motion } from "framer-motion";
// import { contentVariants } from "../../Framer-Variants/variants";
import ProfessionsCycle from "./ProfessionsCycle";
import GridCard from "./GridCard";
import AnimationContainer from "./AnimationContainer";
import ContentContainer from "./ContentContainer";
import ecocoins from "/public/contents/image.png";
import terrain from "/public/contents/2dTerrain.png";
const information = [
  {
    title: "Tools",
    content: [
      "React.js",
      "Typescript",
      "Python",
      "HTML",
      "CSS",
      "javascript",
      "Java",
      "SQL"
    ]
  },
  {
    title: "Education",
    content: [
      <li>British International School HCMC | 2019-2023</li>,
      <ul className="pl-5 list-disc">
        <li>International Baccalaureate Diploma</li>
        <li>
          Computer Science and Information Technology in a Global Society
          subject Ambassador
        </li>
        <li>Computer Science individual subject award</li>
      </ul>,
      <li>UCSD | 2023-present</li>,
      <ul className="pl-5 list-disc">
        <li>GPA 3.868</li>
        <li>BSc Mathematics-Computer Science with minor in Data Science</li>
      </ul>
    ]
  },
  {
    title: "Affiliations",
    content: [
      "Data Science Student Society",
      "Triton Engineering Student Council"
    ]
  }
];

export default function Content() {
  return (
    <AnimationContainer className="flex items-center z-[0] pl-[4vw]">
      <div className="absolute top-[7vw] grid grid-cols-1 grid-rows-[1fr_auto] w-[calc(85vw)] ">
        <div className="h-[calc(2vw+5rem)] border-white border-2 rounded-t-lg p-5 cursor-pointer z-50 overflow-hidden ">
          <ProfessionsCycle />
        </div>
        <AnimationContainer className=" h-[calc(100vh-17vw)] border-white border-2 border-t-0 rounded-b-lg p-5 overflow-y-auto">
          <ContentContainer>
            Hi! My name is Hieu Nguyen. I love making stuff and learning, and
            learning to make stuff. My journey into web development began in
            2017 when my club needed a website built. And with neither any
            competition nor adequate experience, I stepped up. Who knew having a
            deadline and..expectations would be the best motivator to learn.
          </ContentContainer>
          <ContentContainer width="90%">
            Ever since, my interest in various subjects and fields has never
            ended. From genetic algorithms, to wave function collapse, to
            dynamic and interactive web apps, I have been and will forever be
            thirsting to learn something new. Some very quick info about me:
          </ContentContainer>

          {information.map((item, index) => {
            return (
              <GridCard
                title={item.title}
                contents={item.content}
                delay={0.2 + index * 0.1}
              />
            );
          })}

          <ContentContainer
            title="Currency Management App | Full-Stack Developer | 2021"
            width="75%"
          >
            <div className="grid grid-cols-2">
              <ul className="ml-5 list-disc">
                <li className="text-white">
                  HTML,CSS, TypeScript, React.JS, Firestore, Firestore auth
                </li>
                <li>
                  Designed and implemented a React App with full CRUD
                  functionality
                </li>
                <li>
                  leveraged firebase NoSQL database and authentication to ensure
                  quick and easy register and log in of users
                </li>
                <li>
                  <a href="https://ecocoin-5ecb6.web.app/">
                    https://ecocoin-5ecb6.web.app/
                  </a>
                </li>
              </ul>
              <img src={ecocoins} alt="" />
            </div>
          </ContentContainer>

          <ContentContainer
            left_margin="auto"
            width="75%"
            title="2-D TERRAIN GENERATOR AND PATH-FINDING SIMULATOR | Research Project | 2023"
          >
            <ul className="ml-5 list-disc">
              <li className="text-white">Python</li>
              <li>
                Designed and implemented a procedural 2-D terrain generator that
                creates dynamic, randomized landscapes
              </li>
              <li>
                Integrated popular pathfinding algorithms, including A* and
                Dijkstra, to simulate the movement of agents across terrain
                while avoiding obstacles and selecting optimal paths.
              </li>
              <li>
                Applied reinforced learning algorithms such as genetic
                algorithms to further optimize agent performance
              </li>
            </ul>
          </ContentContainer>

          <ContentContainer
            title="Model Synthesis and Wave Function Collapse Visualizer for 2-D terrain Generation | 2024"
            width="90%"
          >
            <div className="grid grid-cols-2">
              <ul className="ml-5 list-disc">
                <li className="text-white">React.JS, NEXT.JS, TailwindCSS</li>
                <li>
                  Engineered an interactive visualizer tool for simulating the
                  operation of 2-D terrain generation algorithms Wave Function
                  Collapse (WFC) and Model Synthesis.
                </li>
                <li>
                  Designed an intuitive interface to visualize the process of
                  terrain generation, enabling real-time updates and seamless
                  interaction with the model’s state.
                </li>
                <li>
                  leveraged Next.js components and TailwindCSS for efficient,
                  responsive design.
                </li>
                <li>
                  <a href="https://jaerinx.github.io/2dterrain/">
                    https://jaerinx.github.io/2dterrain/
                  </a>
                </li>
              </ul>
              <img src={terrain} alt="" />
            </div>
          </ContentContainer>
        </AnimationContainer>
      </div>
    </AnimationContainer>
  );
}
