import { Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import About from "./component/about/About";
import BloodTestMain from "./component/bloodtest/BloodTestMain";
import MainCbc from "./component/bloodtest/CBCBt/MainCbc";
import MainHelth from "./component/healthpg/MainHelth";
import MainUnifit from "./component/healthpg/UNIFIT PLUS @ UNIPATH/MainUnifit";
import MainContact from "./component/Contact/MainContact";
import MainBrain from "./component/brain/MainBrain";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/brain" element={<MainBrain/>} />

      <Route path="/about" element={<About/>} />
      <Route path="/blood-tests" element={<BloodTestMain/>} />
      <Route path="/blood-tests/cbc" element={<MainCbc/>} />
      <Route path="/packages" element={<MainHelth/>} />
      <Route path="/UNIFIT-PLUS" element={<MainUnifit/>} />
      <Route path="/contact" element={<MainContact/>} />
      <Route path="/appointment" element={<h1>Make Appointment</h1>} />
    </Routes>
  );
}

export default App;
