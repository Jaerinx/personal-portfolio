// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export default function Error() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/");
  //   }, 10000);
  // });
  return (
    <TypeAnimation
      sequence={["", 2000, ".", 1000, "..", 1000, "...", 1000]}
      className="absolute left-8 top-16 md:left-20"
      wrapper="div"
      speed={25}
      repeat={Infinity}
      cursor={false}
      style={{
        whiteSpace: "pre-line",
        fontSize: "clamp(1.5rem, 3vw, 3rem)",
        display: "inline-block",
        maxHeight: "fit-content"
      }}
    />
  );
}
