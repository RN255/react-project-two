import Navbar from "./Navbar";
import Tips from "./pages/Tips";
import Home from "./pages/Home";
import JourneysList from "./pages/JourneysList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/journeysList" element={<JourneysList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
