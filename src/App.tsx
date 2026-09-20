import { useTheme } from "./hooks/useTheme";
import Navbar    from "./components/Navbar";
import Hero      from "./components/Hero";
import Experience from "./components/Experience";
import Education  from "./components/Education";
import Projects from "./components/Projects";
import Skills    from "./components/Skills";
import Contact   from "./components/Contact";

export default function App() {
  const { dark, toggle } = useTheme();
  return (
    <div className={dark ? "dark" : ""} style={{ overflowX: "hidden", maxWidth: "100vw" }}>
      <div
        className={`min-h-screen ${dark ? "bg-dark-bg text-white" : "bg-light-bg text-slate-900"} noise`}
        style={{ overflowX: "hidden" }}
      >
        <Navbar dark={dark} onToggle={toggle} />
        <Hero dark={dark} />
        <Experience dark={dark} />
        <Education dark={dark} />
        <Projects dark={dark} />
        <Skills dark={dark} />
        <Contact dark={dark} />
      </div>
    </div>
  );
}
