import "./Styles/App.css";
import FirstPage from "./Components/Landing Page/FirstPage";
import Content from "./Components/Contents/Content";
import Error from "./Components/Error/Error";
import Computer from "./Components/All Pages/Computer";
import Resume from "./Components/Resume/Resume";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Nav from "./Components/All Pages/Nav";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route element={<Computer />}>
            <Route path="" element={<FirstPage />} />
            <Route element={<Nav />}>
              <Route path="content" element={<Content />} />
              <Route path="resume" element={<Resume />} />
            </Route>
            <Route path="off" element={<Error />} />
          </Route>
          <Route path="*" element={<Navigate to="/off" />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
