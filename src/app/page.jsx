import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

export default function Page() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}
