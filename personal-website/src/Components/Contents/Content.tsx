// import { motion } from "framer-motion";
// import { contentVariants } from "../../Framer-Variants/variants";
import ProfessionsCycle from "./ProfessionsCycle";
import GridCard from "./GridCard";
import AnimationContainer from "./AnimationContainer";
import ContentContainer from "./ContentContainer";
import ecocoins from "../../Static/contents_statics/image.png";
import terrain from "../../Static/contents_statics/2dTerrain.png";
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbFileTypeSql } from "react-icons/tb";
import ds3 from "../../Static/contents_statics/DS3-logo-light.png";
import tesc from "../../Static/contents_statics/TESC.png";
import tescWebsite from "../../Static/contents_statics/tescucsd.org.png";
import waveFunction from "../../Static/contents_statics/wavefunction.gif";
import { useRef } from "react";
import Hieu from "../../Static/contents_statics/Hieu.jpg";
const icons = [
  FaReact,
  SiTypescript,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  IoLogoJavascript,
  FaJava,
  TbFileTypeSql
];
const information = [
  {
    title: "Tools",
    content: [
      <div className="grid grid-cols-4 w-full gap-10">
        {icons.map((Icon) => {
          return (
            <Icon className="text-[7vw] bg-inherit text-white hover:text-dark_beige" />
          );
        })}
      </div>
    ],
    nothing: [
      "react",
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
    title: "Current Affiliations",
    content: [
      <div className="flex w-full">
        <img src={tesc} className="w-1/2"></img>
        <img src={ds3} className="w-1/3"></img>
      </div>
    ]
  }
];

export default function Content() {
  const wave = useRef<HTMLImageElement>(null);
  return (
    <AnimationContainer className="flex items-center z-0 pl-[4vw] [scroll-behavior:smooth]">
      <div className="absolute top-[3vw] grid grid-cols-1 grid-rows-[1fr_auto] w-[calc(85vw)] ">
        <div className="h-[calc(2vw+5rem)] border-white border-2 rounded-t-lg p-5 cursor-pointer z-0 overflow-hidden ">
          <ProfessionsCycle />
        </div>
        <AnimationContainer className=" h-[calc(100vh-13vw)] border-white border-2 border-t-0 rounded-b-lg p-5 overflow-y-auto">
          <div className="w-full grid grid-cols-[0.4fr_0.6fr] gap-10">
            <ContentContainer width="100%">
              Hi! My name is Hieu. I love making stuff and learning, and
              learning to make stuff. My journey into web development began in
              2017 when my club needed a website built. And with neither any
              competition nor adequate experience, I stepped up. Who knew having
              a deadline and..expectations would be the best motivator to learn.
            </ContentContainer>
            <div className=" w-full flex ">
              <img
                src={Hieu}
                alt=""
                className="aspect-square object-cover w-1/2 border-white border-2 p-5 rounded-lg"
              />
            </div>
          </div>

          <ContentContainer width="90%">
            Ever since, my interest in various subjects and fields has never
            ended. From genetic algorithms, to wave function collapse, to
            dynamic and interactive web apps, I have been and will forever be
            thirsting to learn something new. Some very quick info about me:
          </ContentContainer>

          {/* Quickfire info */}

          <div className="w-full h-[50vh] flex items-center flex-col justify-center">
            <div className="w-full h-1 bg-white mt-10"></div>
            <h1 className="text-[2vw] m-5">Quickfire Info</h1>
            <div className="w-full h-1 bg-white mb-10"></div>
          </div>

          {information.map((item, index) => {
            return (
              <ContentContainer
                title={item.title}
                left_margin={index % 2 == 0 ? "auto" : ""}
              >
                <GridCard contents={item.content} delay={0.2 + index * 0.1} />
              </ContentContainer>
            );
          })}

          {/* projects */}

          <div className="w-full h-[50vh] flex items-center flex-col justify-center">
            <div className="w-full h-1 bg-white mt-10"></div>
            <h1 className="text-[2vw] m-5">Projects</h1>
            <div className="w-full h-1 bg-white mb-10"></div>
          </div>
          <ContentContainer
            title="TESC website redesign | Full-Stack Developer | 2025"
            width="75%"
            link="https://tescucsd.org/"
            left_margin="auto"
          >
            <div className="grid grid-cols-[0.6fr_0.4fr]">
              <ul className="ml-5 list-disc text-white">
                <li className="text-white">
                  HTML,CSS, TypeScript, React.JS, Tailwind, Supabase, PostgreSQL
                </li>

                <li>
                  <a
                    href="https://tescucsd.org/"
                    className="hover:text-dark_beige "
                  >
                    https://tescucsd.org/
                  </a>
                </li>
              </ul>
              <div className="aspect-square overflow-y-hidden relative group rounded-lg">
                <img
                  src={tescWebsite}
                  alt=""
                  className="absolute hover:translate-y-[-45%]  hover:filter-none [filter:grayscale(100%)] duration-1000 "
                />
              </div>
            </div>
          </ContentContainer>
          <ContentContainer
            title="Currency Management App | Full-Stack Developer | 2021"
            width="75%"
            link="https://ecocoin-5ecb6.web.app/"
          >
            <div className="grid grid-cols-2">
              <ul className="ml-5 list-disc text-white">
                <li className="text-white">
                  HTML,CSS, TypeScript, React.JS, Firestore, Firestore auth
                </li>

                <li>
                  <a
                    href="https://ecocoin-5ecb6.web.app/"
                    className="hover:text-dark_beige "
                  >
                    https://ecocoin-5ecb6.web.app/
                  </a>
                </li>
              </ul>
              <img
                src={ecocoins}
                alt=""
                className="hover:filter-none [filter:grayscale(100%)] duration-1000"
              />
            </div>
          </ContentContainer>

          <ContentContainer
            left_margin="auto"
            width="75%"
            title="2-D TERRAIN GENERATOR AND PATH-FINDING SIMULATOR | Research Project | 2023"
          >
            <ul className="ml-5 list-disc">
              <li className="text-white">Python</li>
              <li>procedural 2-D terrain generator</li>
              <li>Visualises popular algorithms like A*, Dijkstra, BFS, DFS</li>
              <li>
                Applied reinforced learning algorithms (genetic algorithms) to
                further optimize agent performance
              </li>
            </ul>
          </ContentContainer>
          <ContentContainer
            title="Model Synthesis and Wave Function Collapse Visualizer for 2-D terrain Generation | 2024"
            width="90%"
            link="https://jaerinx.github.io/2dterrain/"
          >
            <div className="grid grid-cols-[0.7fr_0.3fr]">
              <ul className="ml-5 list-disc ">
                <li className="text-white">React.JS, NEXT.JS, TailwindCSS</li>
                <li>
                  interactive visualizer tool for simulating operation of 2-D
                  Wave Function Collapse (WFC) and Model Synthesis for terrain
                  generation
                </li>
                <li>
                  <a
                    href="https://jaerinx.github.io/2dterrain/"
                    className="hover:text-dark_beige"
                  >
                    https://jaerinx.github.io/2dterrain/
                  </a>
                </li>
              </ul>
              <div className="relative">
                <img
                  src={terrain}
                  ref={wave}
                  alt=""
                  className="hover:filter-none [filter:grayscale(100%)] duration-1000 z-0"
                  onMouseEnter={() => {
                    if (wave.current) {
                      wave.current.src = waveFunction;
                    }
                  }}
                  onMouseLeave={() => {
                    if (wave.current) {
                      wave.current.src = terrain;
                    }
                  }}
                />
              </div>
            </div>
          </ContentContainer>
        </AnimationContainer>
      </div>
    </AnimationContainer>
  );
}
