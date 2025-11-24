import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from './pages/Service';
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
