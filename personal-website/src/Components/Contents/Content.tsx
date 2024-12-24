// import { motion } from "framer-motion";
// import { contentVariants } from "../../Framer-Variants/variants";
import ProfessionsCycle from "./ProfessionsCycle";
import GridCard from "./GridCard";
import AnimationContainer from "./AnimationContainer";
import ContentContainer from "./ContentContainer";
const information = [
  {
    title: "Skills",
    content: [
      "React.js",
      "Typescript",
      "Python",
      "HTML",
      "CSS",
      "javascript",
      "Java",
      "SQL",
    ],
  },
  {
    title: "Education",
    content: ["British International School HCMC", "UCSD"],
  },
  {
    title: "Affiliations",
    content: [
      "Data Science Student Society",
      "Triton Engineering Student Council",
    ],
  },
];

export default function Content() {
  return (
    <AnimationContainer>
      <div className="absolute top-[7vw] grid grid-cols-1 grid-rows-[1fr_auto] w-[calc(100vw-12rem)] ">
        <div className="h-[calc(2vw+5rem)] border-white border-2 rounded-t-lg p-5 cursor-pointer z-50 overflow-hidden ">
          <ProfessionsCycle />
        </div>
        <div className=" h-[calc(100vh-17vw)] border-white border-2 border-t-0 rounded-b-lg p-5 overflow-y-auto">
          <ContentContainer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            perferendis deserunt molestiae unde ipsa consectetur nesciunt
            excepturi debitis dolores veritatis distinctio saepe ad dolor,
            dolorum eveniet autem tenetur nihil impedit nisi cumque provident?
            Deserunt, in ipsum nisi est enim explicabo eveniet sit nobis facere.
            Magni aliquid eos quae quod deleniti quas rem at molestiae, ea
            sapiente repellat repellendus numquam, perferendis repudiandae
            accusantium. Sit, obcaecati placeat! Harum impedit reiciendis ad! Ea
            laboriosam repellat illum, error architecto quidem consequuntur quae
            quo, tenetur cumque labore. Modi eveniet consectetur, delectus amet,
            ratione, ut laudantium blanditiis tempore aliquid eligendi
            voluptatibus inventore reiciendis ea dolor. Magni.
          </ContentContainer>
          <ContentContainer width="95%">Hello</ContentContainer>
          <div className="grid grid-cols-3 w-[95%] gap-2 mx-auto">
            {information.map((item, index) => {
              return (
                <GridCard
                  title={item.title}
                  contents={item.content}
                  delay={0.2 + index * 0.2}
                />
              );
            })}
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
}
