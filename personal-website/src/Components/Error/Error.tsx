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
      className="absolute left-20 top-16"
      wrapper="div"
      speed={25}
      repeat={Infinity}
      cursor={false}
      style={{
        whiteSpace: "pre-line",
        fontSize: "3vw",
        display: "inline-block",
        maxHeight: "fit-content"
      }}
    />
  );
}
