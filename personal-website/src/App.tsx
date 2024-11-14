import "./Styles/App.css";
import FirstPage from "./Components/Landing Page/FirstPage";
import Content from "./Components/Contents/Content";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Nav from "./Components/All Pages/Nav";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route element={<Nav />}>
            <Route path="/" element={<FirstPage />} />
            <Route path="/content" element={<Content />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
