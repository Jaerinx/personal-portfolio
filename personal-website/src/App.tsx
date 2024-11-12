import "./Styles/App.css";
import FirstPage from "./Components/FirstPage";
import Content from "./Components/Content";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Nav from "./Components/Nav";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<FirstPage />} />
          <Route element={<Nav />}>
            <Route path="/content" element={<Content />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
