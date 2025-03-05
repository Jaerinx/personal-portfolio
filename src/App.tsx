import "./Styles/App.css";
import FirstPage from "./Components/Landing Page/FirstPage";
import Content from "./Components/Contents/Content";
import Error from "./Components/Error/Error";
import Computer from "./Components/All Pages/Computer";
import Resume from "./Components/Resume/Resume";
import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./Components/All Pages/Nav";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
import Contact from "./Components/ContactMe/Contact";
import Writing from "./Components/writing/Wrting";

function App() {
  const matchmedia = useMediaQuery("(min-width: 768px)");
  if (!matchmedia) {
    return (
      <AnimatePresence mode="wait">
        <Routes>
          <Route element={<Computer />}>
            <Route element={<Nav />}>
              <Route path="" element={<Content />} />
              <Route path="contact-me" element={<Contact />} />
            </Route>
            <Route path="off" element={<Error />} />
          </Route>
          <Route path="*" element={<Navigate to="/off" />} />
        </Routes>
      </AnimatePresence>
    );
  } else {
    return (
      <AnimatePresence mode="wait">
        <Routes>
          <Route element={<Computer />}>
            <Route element={<Nav />}>
              <Route path="" element={<FirstPage />} />
              <Route path="content" element={<Content />} />
              <Route path="resume" element={<Resume />} />
              <Route path="contact-me" element={<Contact />} />
              <Route path="writing/:writingId" element={<Writing />} />
            </Route>
            <Route path="off" element={<Error />} />
          </Route>
          <Route path="*" element={<Navigate to="/off" />} />
        </Routes>
      </AnimatePresence>
    );
  }
}

export default App;
