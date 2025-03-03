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
import Hieu from "../../Static/contents_statics/Hieu.png";
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
            <Icon className="text-[10rem] bg-inherit text-white hover:text-dark_beige" />
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
    <AnimationContainer className="flex items-center z-0 pl-[3.4rem] cursor-default">
      <div className="absolute top-[4rem] grid grid-cols-1 grid-rows-[1fr_auto] w-[calc(100vw-7.8rem)] ">
        <ProfessionsCycle />
        <AnimationContainer className=" h-[calc(100vh-15rem)] border-t-0 rounded-b-lg p-0 lg:p-5 overflow-y-auto">
          <div className="w-full lg:w-3/4 grid grid-cols-[0.9fr_1.1fr] gap-10 text-white text-paragraph mx-auto ">
            <div className="px-20 cursor-text">
              Hi! My name is Hieu. Welcome to my corner of the internet. I love
              making stuff and learning, and learning to make stuff. My journey
              into web development began in 2017 when my club needed a website
              built, and with neither any alternate options nor adequate
              experience, I stepped up. Who knew having a deadline and...
              mounting expectations would be the best motivator to learn how to
              center a div.
            </div>
            <div className="w-full flex justify-center items-center overflow-hidden">
              <img
                src={Hieu}
                alt=""
                className="aspect-square object-[40%_40%] object-cover w-full max-w-[700px] max-h-[80vh] rounded-xl"
              />
            </div>
            <div className="col-span-2 w-full px-20 cursor-text">
              Ever since, my interest in various subjects and fields has never
              ended. From genetic algorithms, to wave function collapse, to
              dynamic and interactive web apps, I have been and will forever be
              looking to learn something new.
            </div>
          </div>

          {/* Quickfire info */}

          <div className="w-full h-[50vh] flex items-center flex-col justify-center">
            <div className="w-full h-1 bg-white mt-10"></div>
            <h1 className="text-header m-5 cursor-text">Some Info about me</h1>
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
            <h1 className="text-header m-5 cursor-text">Projects</h1>
            <div className="w-full h-1 bg-white mb-10"></div>
          </div>
          <ContentContainer
            title="TESC website redesign | Full-Stack Developer | 2025"
            width="75%"
            link="https://tescucsd.org/"
            left_margin="auto"
          >
            <div className="grid grid-cols-[0.6fr_0.4fr]">
              <ul className=" list-disc text-white p-5">
                <li className="text-white ">
                  Leveraged Vite HMR, Lazy loading strategies and SEO
                  optimization strategies to half LCP load times
                </li>
                <li className="text-white ">
                  Utilised Git version control to streamline team operation
                </li>
                <li className="text-white ">
                  Hover on the image for a surprise :) →
                </li>
              </ul>
              <div className="aspect-square overflow-y-hidden relative group rounded-lg">
                <img
                  src={tescWebsite}
                  alt=""
                  className="absolute hover:translate-y-[-45%] rounded-xl hover:filter-none [filter:grayscale(100%)] duration-1000 "
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
              <ul className="ml-5 list-disc text-white p-5">
                <li className="text-white ">
                  User coupon management system complete with admin and user
                  side utilisiing Firestore database and Firebase Auth to secure
                  user data
                </li>
                <li className="text-white ">
                  Developed in cooperation with school vice principal to improve
                  plastic bottle recycling program
                </li>
              </ul>
              <img
                src={ecocoins}
                alt=""
                className="hover:filter-none [filter:grayscale(100%)] duration-1000 rounded-xl"
              />
            </div>
          </ContentContainer>

          <ContentContainer
            left_margin="auto"
            width="75%"
            title="2-D TERRAIN GENERATOR AND PATH-FINDING SIMULATOR | Research Project | 2023"
          >
            <ul className="ml-5 list-disc p-5 ">
              <li className="text-white ">Python</li>
              <li className="">procedural 2-D terrain generator</li>
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
              <ul className="ml-5 list-disc p-5 ">
                <li className="text-white">React.JS, NEXT.JS, TailwindCSS</li>
                <li>
                  interactive visualizer tool for simulating operation of 2-D
                  Wave Function Collapse (WFC) and Model Synthesis for terrain
                  generation
                </li>
              </ul>
              <div className="relative">
                <img
                  src={terrain}
                  ref={wave}
                  alt=""
                  className="hover:filter-none [filter:grayscale(100%)] duration-1000 z-0 rounded-xl"
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
