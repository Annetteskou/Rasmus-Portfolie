import { Routes, Route, Navigate } from "react-router";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import ClientDetail from "./pages/ClientDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/clients/:id" element={<ClientDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
