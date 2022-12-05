import Navbar from "./Navbar";
import Tips from "./pages/Tips";
import Home from "./pages/Home";
import Partnership from "./pages/Partnership";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./pages/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/partnership" element={<Partnership />} />
          {/* <Route path="/journeysList" element={<JourneysList />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
