import ProfessionsCycle from "./ProfessionsCycle";
import GridCard from "./GridCard";
import AnimationContainer from "./AnimationContainer";
import ContentContainer from "./ContentContainer";
import SectionHeader from "./SectionHeader";
import ecocoins from "../../Static/contents_statics/image.png";
import terrain from "../../Static/contents_statics/2dTerrain.png";
import ds3 from "../../Static/contents_statics/DS3-logo-light.png";
import tesc from "../../Static/contents_statics/TESC.png";
import tescWebsite from "../../Static/contents_statics/tescucsd.org.png";
import tescPortal from "../../Static/contents_statics/tesc-portal.png";
import lolAnalysis from "../../Static/contents_statics/lol-analysis.png";
import waveFunction from "../../Static/contents_statics/wavefunction.gif";
import { useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import Hieu from "../../Static/contents_statics/Hieu.png";
import bis from "../../Static/contents_statics/bis.png";
import ucsd from "../../Static/contents_statics/UCSD.png";
import {
  CaptionedShot,
  CountUp,
  DecisionTrace,
  SplitMeter,
  TinyMulti
} from "../Viz/CrtInstruments";

const information = [
  {
    title: "Tools",
    content: [
      <p className="font-['DOS'] text-green" style={{ fontFamily: "DOS" }}>
        React · TypeScript · Python · HTML · CSS · JavaScript · Java · SQL ·
        Supabase
      </p>
    ]
  },
  {
    title: "Current Affiliations",
    content: [
      <div className="flex w-full gap-4">
        <CaptionedShot
          src={tesc}
          alt="Triton Engineering Student Council"
          caption="TESC"
          width={640}
          height={320}
          className="w-1/2"
        />
        <CaptionedShot
          src={ds3}
          alt="Data Science Student Society"
          caption="DS3"
          width={640}
          height={320}
          className="w-1/3"
        />
      </div>
    ]
  },
  {
    title: "Education",
    content: [
      <div className="flex w-full flex-col gap-4">
        <CaptionedShot
          src={bis}
          alt="British International School"
          caption="BIS Hanoi"
          width={800}
          height={240}
        />
        <CaptionedShot
          src={ucsd}
          alt="UC San Diego"
          caption="UCSD · DS + Applied Math ’28"
          width={400}
          height={400}
          className="w-1/5"
        />
      </div>
    ]
  }
];

export default function Content() {
  const wave = useRef<HTMLImageElement>(null);
  const media = useMediaQuery("(min-width:768px)");
  return (
    <AnimationContainer className="relative z-10 h-[100dvh] max-h-[100dvh] overflow-hidden cursor-default">
      <div className="absolute inset-[var(--crt-gutter)] bottom-[var(--crt-gutter-bottom)] grid grid-cols-1 grid-rows-[auto_minmax(0,1fr)]">
        <ProfessionsCycle />
        <AnimationContainer
          id="main"
          className="min-h-0 overflow-y-auto border-t-0 p-3 pb-16 text-left outline-none md:p-8 md:pb-20"
        >
          <div className="mx-auto max-w-6xl text-[1.05rem] text-white md:text-paragraph">
            <figure className="crt-tube relative mx-auto mb-6 w-[min(100%,14rem)] max-w-full md:float-right md:mb-4 md:ml-8 md:w-[min(26%,16rem)]">
              <div className="crt-tube-face relative aspect-square overflow-hidden border border-green bg-blue p-2 shadow-[0_0_56px_rgba(130,192,92,0.4)]">
                <img
                  src={Hieu}
                  alt="Hieu Nguyen"
                  width={640}
                  height={640}
                  fetchPriority="high"
                  className="h-full w-full max-w-none origin-[64%_34%] scale-[4.2] object-cover object-[64%_34%] [filter:grayscale(1)_sepia(0.28)_hue-rotate(62deg)_saturate(1.15)_brightness(1.12)]"
                />
                <div className="pointer-events-none absolute inset-2 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(4,0,28,0.28)_3px)]" />
                <div className="pointer-events-none absolute inset-2 bg-gradient-to-tl from-[#04001c] from-[8%] via-[#04001c]/70 via-[22%] to-transparent to-[42%]" />
                <div className="pointer-events-none absolute inset-2 bg-gradient-to-l from-[#04001c] via-[#04001c]/85 via-[18%] to-transparent to-[26%]" />
              </div>
              <figcaption
                className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] leading-4 text-green"
                style={{ fontFamily: "DOS" }}
              >
                <a
                  href="https://www.linkedin.com/in/vietminhhieunguyen/"
                  className="inline-flex min-h-11 items-center px-1 text-green transition-colors duration-150 hover:bg-green hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-blue active:translate-y-px"
                >
                  linkedin
                </a>
                <a
                  href="mailto:vin028@ucsd.edu"
                  className="inline-flex min-h-11 items-center px-1 text-green transition-colors duration-150 hover:bg-green hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-blue active:translate-y-px"
                >
                  mail
                </a>
                <a
                  href="https://github.com/Jaerinx"
                  className="inline-flex min-h-11 items-center px-1 text-green transition-colors duration-150 hover:bg-green hover:text-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-blue active:translate-y-px"
                >
                  github
                </a>
              </figcaption>
            </figure>
            <div className="cursor-text text-pretty">
              <p>
                Hi! My name is Hieu. Welcome to my corner of the internet. I
                love making stuff and learning, and learning to make stuff. I'm
                a Data Science and Applied Math student at UC San Diego. My
                journey into web development began in 2017 when my club needed a
                website built, and with neither any alternate options nor
                adequate experience, I stepped up. Who knew having a deadline
                and... mounting expectations would be the best motivator to
                learn how to center a div.
              </p>
              <p className="mt-5">
                Ever since, my interest in various subjects and fields has never
                ended. From genetic algorithms, to wave function collapse, to
                dynamic web apps, to deep learning on noisy physical signals — I
                have been and will forever be looking to learn something new.
              </p>
              <p className="mt-5">
                These days that looks like keeping a portal up for 1,000+ users
                across 50 orgs and cutting tescucsd.org LCP in half, poking at a
                LoL win model until Decision Tree F1 0.62 became Random Forest
                F1 0.85 on 150k rows, helping out in the UCSD ITS Office of the
                CIO, and poking at fully-connected nets, U-Nets, WaveNet, and
                RNNs to pull faint dark-matter signals out of noisy detector
                data.
              </p>
            </div>
            <div className="clear-both" />
          </div>

          <SectionHeader title="Experience" />
          <ContentContainer
            title="TRITON ENGINEERING STUDENT COUNCIL | Tech Lead & Co-president | Sep 2024 – Present"
            width="75%"
          >
            <div className="space-y-4 p-2">
              <ul className="ml-5 list-disc p-5 text-white">
                <li>
                  I built the in-house events portal — memberships, attendance,
                  bulletin, and a resume database (the 1,000+ / 50 orgs live on
                  the project below)
                </li>
                <li>
                  I also helped run UCSD’s largest engineering club fair — 500+
                  people, 60+ orgs
                </li>
              </ul>
              <TinyMulti
                ariaLabel="UCSD engineering club fair, 500+ attendees, 60+ organizations"
                cells={[
                  { value: 500, suffix: "+", label: "attendees" },
                  { value: 60, suffix: "+", label: "orgs" }
                ]}
              />
            </div>
          </ContentContainer>
          <ContentContainer
            title="UCSD ITS — OFFICE OF THE CIO | Student Assistant | Jun 2025 – Present"
            width="75%"
            left_margin="auto"
          >
            <div className="space-y-4 p-2">
              <CountUp value={20} suffix="+" label="dashboards" />
              <ul className="list-disc p-5 text-white">
                <li>
                  Built the Service Owner Checklist so campus IT teams know who
                  owns what
                </li>
                <li>
                  Put up 20+ ServiceNow dashboards for campus IT
                </li>
                <li>
                  Wrote process-review reports and helped plan Process Palooza
                </li>
              </ul>
            </div>
          </ContentContainer>
          <ContentContainer
            title="DATA SCIENCE STUDENT SOCIETY | Front-end Software Engineer | Sep 2024 – Present"
            width="75%"
            left_margin="auto"
          >
            <ul className="list-disc p-5 text-white">
              <li>
                I built the student membership portal — a different one from
                TESC’s — so club signups weren’t stuck in spreadsheets
              </li>
            </ul>
          </ContentContainer>

          <SectionHeader title="Research" />
          <ContentContainer
            title="DEEP LEARNING FOR DARK MATTER SIGNAL DENOISING | Ongoing"
            width="80%"
          >
            <div className="space-y-4 p-2">
              <DecisionTrace
                ariaLabel="Independent dark-matter denoising comparison: fully-connected, positional U-Net, WaveNet, RNN, ongoing"
                steps={["FC", "positional U-Net", "WaveNet", "RNN"]}
              />
              <ul className="ml-5 list-disc text-white">
                <li>
                  Exploring neural denoising architectures for the discovery of
                  dark matter — recovering faint physical signals from noisy
                  detector data. Independent work; no lab affiliation.
                </li>
              </ul>
            </div>
          </ContentContainer>

          <SectionHeader title="Projects" />
          <ContentContainer
            title="TESC PORTAL | React.js, Supabase, PostgreSQL | 2024 – Present"
            width="85%"
            link="https://portal.tescatucsd.org/bulletin/-1"
            left_margin="auto"
          >
            <div className="grid grid-rows-[max-content_1fr] gap-4 lg:grid-cols-[0.55fr_0.45fr]">
              <ul className="list-disc p-5 text-white">
                <li>
                  I built this so 50 clubs could share memberships, attendance,
                  and a bulletin — 1,000+ users
                </li>
                <li>
                  Role-based access with separate views for members, club
                  leaders, and the public — plus a bulletin board with event
                  posting, RSVP tracking, and searchable listings
                </li>
                <li>
                  Student points tracking and club profile tools, running on
                  Supabase’s free plan
                </li>
              </ul>
              <CaptionedShot
                src={tescPortal}
                alt="TESC Portal bulletin board"
                caption="PORTAL.EXE · 1,000+ USERS · 50 ORGS"
                width={1200}
                height={750}
              />
            </div>
          </ContentContainer>
          <ContentContainer
            title="PREDICTING A LEGEND | League of Legends Performance Analysis | Python, scikit-learn"
            width="85%"
            link="https://github.com/Jaerinx/League_of_Legends_performance_analysis"
          >
            <div className="grid grid-rows-[max-content_1fr] gap-4 lg:grid-cols-[0.55fr_0.45fr]">
              <div className="space-y-4 p-2">
                <TinyMulti
                  ariaLabel="10,000+ 2022 pro matches, 150k rows"
                  cells={[
                    { value: 10000, suffix: "+", label: "matches" },
                    { value: 150, suffix: "k", label: "rows" }
                  ]}
                />
                <DecisionTrace
                  ariaLabel="How it was decided: first-dragon hypothesis, permutation missingness, Decision Tree F1 0.62, Random Forest F1 0.85, league fairness audit"
                  steps={[
                    "H0: first-dragon advantage",
                    "permutation: 25-min gold missingness",
                    "DT F1 0.62",
                    "tuned RF F1 0.85",
                    "league-level fairness audit"
                  ]}
                />
                <ul className="ml-5 list-disc text-white">
                  <li>
                    2022 pro matches from Oracle's Elixir; 25-minute gold, XP,
                    CS, and KDA features
                  </li>
                </ul>
              </div>
              <CaptionedShot
                src={lolAnalysis}
                alt="Win rate against gold spent scatter plot"
                caption="F1 0.62 → 0.85"
                width={1200}
                height={750}
                imgClassName="bg-white"
              />
            </div>
          </ContentContainer>
          <ContentContainer
            title="TESC WEBSITE REDESIGN | Full-Stack Developer | 2025"
            width="75%"
            link="https://tescucsd.org/"
            left_margin="auto"
          >
            <div className="grid grid-rows-[max-content_1fr] lg:grid-cols-[0.6fr_0.4fr]">
              <ul className="list-disc p-5 text-white">
                <li>
                  Vite HMR, lazy loading, and SEO work to halve LCP load times
                </li>
                <li>Git workflows to keep the student engineering team in sync</li>
                {media && (
                  <li>Hover on the image for a surprise :) →</li>
                )}
              </ul>
              <figure>
                <div className="relative h-fit overflow-hidden border border-green bg-blue p-2 lg:aspect-square lg:overflow-hidden">
                  <img
                    src={tescWebsite}
                    alt="TESC website"
                    width={800}
                    height={800}
                    className="h-auto w-full transition-transform duration-1000 motion-reduce:transition-none lg:absolute lg:hover:translate-y-[-45%]"
                  />
                </div>
                <SplitMeter
                  fill={0.5}
                  legend="LCP · ½"
                  ariaLabel="tescucsd.org LCP cut in half; ratio 1.0 to 0.5; milliseconds not published"
                />
              </figure>
            </div>
          </ContentContainer>
          <ContentContainer
            title="ECOCOINS | Full-Stack Developer | 2021"
            width="75%"
            link="https://ecocoin-5ecb6.web.app/"
          >
            <div className="grid grid-rows-[max-content_1fr] lg:grid-cols-2">
              <ul className="ml-5 list-disc p-5 text-white">
                <li>
                  I built the coupon admin + student side on Firestore and
                  Firebase Auth so recycling rewards stayed locked to the right
                  accounts
                </li>
                <li>
                  Worked with the school VP to poke at a real recycling program
                  instead of a toy demo
                </li>
              </ul>
              <CaptionedShot
                src={ecocoins}
                alt="EcoCoins coupon app"
                caption="ECOCOINS · VP recycling coupons"
                width={800}
                height={500}
              />
            </div>
          </ContentContainer>

          <ContentContainer
            left_margin="auto"
            width="75%"
            title="2-D TERRAIN GENERATOR AND PATH-FINDING SIMULATOR | Research Project | 2023"
          >
            <ul className="ml-5 list-disc p-5 text-white">
              <li>Python sandbox for poking at pathfinding</li>
              <li>Procedural 2-D terrain so the map is never the same twice</li>
              <li>Visualizes A*, Dijkstra, BFS, DFS on the generated map</li>
              <li>
                Tried genetic algorithms to see if the agents could get less
                lost over generations
              </li>
            </ul>
          </ContentContainer>
          <ContentContainer
            title="MODEL SYNTHESIS AND WAVE FUNCTION COLLAPSE VISUALISER FOR 2-D TERRAIN GENERATION | 2024"
            width="90%"
            link="https://jaerinx.github.io/2dterrain/"
          >
            <div className="grid grid-rows-[max-content_1fr] justify-between lg:grid-cols-[0.6fr_0.4fr]">
              <ul className="ml-5 list-disc p-5 text-white">
                <li>React + Next + Tailwind sandbox</li>
                <li>
                  I poked at Wave Function Collapse and Model Synthesis until
                  the tiles started looking like terrain instead of noise
                </li>
                <li>Hover the shot for the surprise collapse :) →</li>
              </ul>
              <div className="flex w-full justify-end">
                <figure className="w-full max-w-[400px]">
                  <div className="overflow-hidden border border-green bg-blue p-2">
                    <img
                      src={terrain}
                      ref={wave}
                      alt="2-D terrain generator"
                      width={400}
                      height={400}
                      className="z-0 h-auto w-full"
                      onMouseEnter={() => {
                        if (wave.current && media) {
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
                  <figcaption
                    className="mt-2 text-[11px] leading-4 text-green"
                    style={{ fontFamily: "DOS" }}
                  >
                    WFC.EXE · 2-D terrain
                  </figcaption>
                </figure>
              </div>
            </div>
          </ContentContainer>

          <SectionHeader title="Writing" />
          <ContentContainer
            title="Comparing the speed and accuracy of procedurally generated Genetic Algorithms  against conventional pathfinding algorithms in 2D maze-like  grid environments | 2022"
            width="40%"
            left_margin="auto"
            to="/writing/1"
          ></ContentContainer>
          <ContentContainer
            title="ARC LENGTH AGAINST TIME OF DESCENT - INTO THE BRACHISTOCHRONE | 2022"
            width="40%"
            left_margin="auto"
            to="/writing/2"
          ></ContentContainer>
          <ContentContainer
            title="PREDICTING A LEGEND — LEAGUE OF LEGENDS PERFORMANCE ANALYSIS"
            width="40%"
            left_margin="auto"
            to="/writing/4"
          ></ContentContainer>

          <SectionHeader title="Also" />
          {information.map((item, index) => {
            return (
              <ContentContainer
                key={item.title}
                title={item.title}
                left_margin={index % 2 == 0 ? "auto" : ""}
              >
                <GridCard contents={item.content} delay={0.2 + index * 0.1} />
              </ContentContainer>
            );
          })}
        </AnimationContainer>
      </div>
    </AnimationContainer>
  );
}
