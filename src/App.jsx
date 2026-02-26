import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import AboutMe from "./pages/AboutMe";
import Contatti from "./pages/Contacts";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
