import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Package from "./pages/Packages";
import Contact from "./pages/Contact";
import Services from "./pages/Destinations";
import Destinations from "./pages/Destinations";
import ServicesPage from "./pages/ServicesPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/package" element={<Package />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destination" element={<Destinations />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
