import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Status from "./pages/Status";
import Upload from "./pages/Upload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/status" element={<Status />}></Route>
        <Route path="/upload" element={<Upload />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
