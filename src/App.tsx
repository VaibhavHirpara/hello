import { Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import About from "./component/about/About";
import BloodTestMain from "./component/bloodtest/BloodTestMain";
import MainCbc from "./component/bloodtest/CBCBt/MainCbc";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/blood-tests" element={<BloodTestMain/>} />
      <Route path="/blood-tests/cbc" element={<MainCbc/>} />
      <Route path="/packages" element={<h1>Health Packages</h1>} />
      <Route path="/appointment" element={<h1>Make Appointment</h1>} />
    </Routes>
  );
}

export default App;
