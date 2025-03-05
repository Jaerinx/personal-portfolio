import { motion } from "framer-motion";
import { contentVariants } from "../../Framer-Variants/variants";
import { useRef, useState } from "react";
import Arrow from "/Arrow.svg";
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const [result, setResult] = useState("");
  const navigate = useNavigate();
  const form = useRef<HTMLFormElement>(null);

  const onSubmit = async () => {
    setResult("Sending....");
    if (!form.current) {
      setResult("Error: empty form.");
      return;
    }
    const formData = new FormData(form.current);
    formData.append("access_key", "450cdfba-cb76-4252-9373-045e388eb38a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      form.current.reset();
      setTimeout(() => {
        setResult("Redirecting...");
      }, 1000);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      className="w-screen min-h-screen flex justify-center items-center "
      variants={contentVariants}
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <div className="w-[calc(100vw-6.8rem)] h-[calc(100vh-5rem)]   rounded-lg p-0 cursor-default z-0 flex justify-center items-center">
        <img
          src={Arrow}
          alt=""
          className="w-[2rem] absolute md:left-12 md:top-12 left-2 top-2 opacity-40 rotate-90 cursor-pointer hover:opacity-50"
          onClick={() => {
            navigate(-1);
          }}
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          ref={form}
          className="flex flex-col gap-5 w-full h-full py-[1rem] max-w-[500px] text-paragraph "
        >
          <h1 className="m-0">Contact me</h1>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="rounded-lg bg-[transparent] border-white border"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="rounded-lg bg-[transparent] border-white border"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="h-full rounded-lg bg-[transparent] border-white border"
          ></textarea>
          {result && <span className="text-paragraph">{result}</span>}
          <button
            type="submit"
            className="border border-green rounded-lg py-2 hover:bg-dark_green duration-200"
          >
            Submit Form
          </button>
        </form>
      </div>
    </motion.div>
  );
}
