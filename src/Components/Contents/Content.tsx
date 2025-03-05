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
import { useMediaQuery } from "usehooks-ts";
import bis from "../../Static/contents_statics/bis.png";
import ucsd from "../../Static/contents_statics/UCSD.png";
import { GithubFilled, LinkedinFilled, MailFilled } from "@ant-design/icons";
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
      <div className="w-max grid grid-cols-4 ml-auto md:gap-x-10">
        {icons.map((Icon) => {
          return (
            <Icon className="lg:text-[7vw] text-[4rem] bg-inherit text-white hover:text-dark_beige" />
          );
        })}
      </div>
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
  },
  {
    title: "Education",
    content: [
      <div className="flex flex-col w-full">
        <img src={bis} className="w-auto"></img>
        <img src={ucsd} className="w-1/5"></img>
      </div>
    ]
  }
];

export default function Content() {
  const wave = useRef<HTMLImageElement>(null);
  const media = useMediaQuery("(min-width:768px)");
  return (
    <AnimationContainer className="flex items-center z-0 md:pl-[3rem] justify-center md:justify-normal cursor-default">
      <div className="absolute md:top-[2.5rem] top-0 grid grid-cols-1 grid-rows-[1fr_auto] md:w-[calc(100vw-6.5rem)] w-[calc(100vw-1rem)] ">
        {media && <ProfessionsCycle />}
        {!media && (
          <>
            <div className="h-16 flex items-center text-dark_green">
              !!! Please use a computer for more content
            </div>
          </>
        )}
        <AnimationContainer className="md:h-[calc(100vh-12rem)] h-[calc(100vh-5rem)] border-t-0 rounded-b-lg p-4 md:p-5 overflow-y-auto">
          <div className="w-full xl:w-[90%] 2xl:w-[70%] grid lg:grid-cols-[0.8fr_1.4fr] md:grid-cols-2 grid-cols-1 gap-10 text-white text-paragraph mx-auto">
            <div className="cursor-text max-w-[700px]">
              Hi! My name is Hieu. Welcome to my corner of the internet. I love
              making stuff and learning, and learning to make stuff. My journey
              into web development began in 2017 when my club needed a website
              built, and with neither any alternate options nor adequate
              experience, I stepped up. Who knew having a deadline and...
              mounting expectations would be the best motivator to learn how to
              center a div.
            </div>
            <div className="w-full flex justify-start  overflow-hidden items-start col-start-1 md:col-start-2 ">
              <span className="relative w-full lg:w-[400px] 2xl:w-[80%] max-w-[450px] cursor-pointer group ">
                <img
                  src={Hieu}
                  alt=""
                  className="aspect-square  object-[40%_40%] w-full object-cover  rounded-xl "
                />
                <div className="w-full absolute bottom-0 right-0 backdrop-brightness-75 px-5 flex justify-start items-end">
                  <a href="https://www.linkedin.com/in/vietminhhieunguyen/">
                    <LinkedinFilled className="text-white mx-1  duration-200 text-[3rem] hover:text-green" />
                  </a>
                  <a href="mailto:vin028@ucsd.edu">
                    <MailFilled className="text-white   mx-1  duration-200 text-[2.7rem] hover:text-green" />
                  </a>
                  <a href="https://github.com/Jaerinx">
                    <GithubFilled className="text-white   mx-1  duration-200 text-[3rem] hover:text-green" />
                  </a>
                </div>
              </span>
            </div>
            <div className="md:col-span-2 w-full lg:w-3/4 cursor-text">
              Ever since, my interest in various subjects and fields has never
              ended. From genetic algorithms, to wave function collapse, to
              dynamic and interactive web apps, I have been and will forever be
              looking to learn something new.
            </div>
          </div>

          {/* Quickfire info */}

          <div className="w-full h-[50vh] flex items-center flex-col justify-center">
            <div className="w-full h-1 bg-white mt-10"></div>
            <h1 className="text-header m-5 cursor-text">Some Info</h1>
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
            title="TESC WEBSITE REDESIGN | Full-Stack Developer | 2025"
            width="75%"
            link="https://tescucsd.org/"
            left_margin="auto"
          >
            <div className="grid grid-rows-[max-content_1fr] lg:grid-cols-[0.6fr_0.4fr]">
              <ul className=" list-disc text-white p-5">
                <li className="text-white ">
                  Leveraged Vite HMR, Lazy loading and SEO optimization
                  strategies to halve LCP load times
                </li>
                <li className="text-white ">
                  Utilised Git version control to streamline team operation
                </li>
                {media && (
                  <li className="text-white ">
                    Hover on the image for a surprise :) →
                  </li>
                )}
              </ul>
              <div className="lg:aspect-square lg:overflow-y-hidden h-fit relative group rounded-lg">
                <img
                  src={tescWebsite}
                  alt=""
                  className="lg:absolute lg:hover:translate-y-[-45%] rounded-xl hover:filter-none  lg:[filter:grayscale(100%)] duration-1000 "
                />
              </div>
            </div>
          </ContentContainer>
          <ContentContainer
            title="ECOCOINS | Full-Stack Developer | 2021"
            width="75%"
            link="https://ecocoin-5ecb6.web.app/"
          >
            <div className="grid grid-rows-[max-content_1fr] lg:grid-cols-2">
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
                className="hover:filter-none lg:[filter:grayscale(100%)] duration-1000 rounded-xl"
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
            title="MODEL SYNTHESIS AND WAVE FUNCTION COLLAPSE VISUALISER FOR 2-D TERRAIN GENERATION | 2024"
            width="90%"
            link="https://jaerinx.github.io/2dterrain/"
          >
            <div className="grid lg:grid-cols-[0.6fr_0.4fr] justify-between grid-rows-[max-content_1fr]">
              <ul className="ml-5 list-disc p-5 ">
                <li className="text-white">React.JS, NEXT.JS, TailwindCSS</li>
                <li>
                  interactive visualizer tool for simulating operation of 2-D
                  Wave Function Collapse (WFC) and Model Synthesis for terrain
                  generation
                </li>
              </ul>
              <div className="flex justify-end w-full">
                <img
                  src={terrain}
                  ref={wave}
                  alt=""
                  className="hover:filter-none [filter:grayscale(100%)] max-w-[400px] w-full duration-1000 z-0 rounded-xl"
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
