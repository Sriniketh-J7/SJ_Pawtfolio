import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { personalInfo, roles, heroStats } from "../data/portfolio";
import TiltCard from "./TiltCard";
import { MapPin, Navigation, Folder, Code2, GitBranch, GraduationCap } from "lucide-react";

interface Props { dark: boolean }

const statIconMap: Record<string, React.ReactElement> = {
  Folder:       <Folder       size={22} className="text-blue-400" />,
  Code2:        <Code2        size={22} className="text-blue-400" />,
  GitBranch:    <GitBranch    size={22} className="text-blue-400" />,
  GraduationCap:<GraduationCap size={22} className="text-blue-400" />,
};

export default function Hero({ dark }: Props) {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [phase, setPhase] = useState<"typing"|"deleting"|"pause">("typing");
  const frameRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const current = roles[roleIdx];
    if (phase === "typing") {
      if (displayed.length < current.length) {
        frameRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        frameRef.current = setTimeout(() => setPhase("pause"), 1600);
      }
    } else if (phase === "pause") {
      frameRef.current = setTimeout(() => setPhase("deleting"), 400);
    } else {
      if (displayed.length > 0) {
        frameRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(frameRef.current);
  }, [displayed, phase, roleIdx]);

  const text      = dark ? "text-white"      : "text-slate-900";
  const muted     = dark ? "text-gray-400"   : "text-slate-600";
  const cardClass = dark ? "glass-card-dark" : "glass-card-light";
  const borderClass = dark ? "border-white/5": "border-light-border";

  const iv = {
    hidden: { opacity: 0, y: 20 },
    visible: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: d } }),
  };

  return (
    <section id="about" className={`relative min-h-screen overflow-hidden pt-20 pb-10 ${dark ? "bg-dark-bg mesh-bg" : "bg-light-bg mesh-bg-light"}`}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage:"radial-gradient(circle,currentColor 1px,transparent 1px)", backgroundSize:"28px 28px" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">

          {/* LEFT */}
          <motion.div initial="hidden" animate="visible" className="pt-6">
            <motion.div custom={0} variants={iv} className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
                {[
                  { dot: true, label: "Available for opportunities" },
                  {
                    icon: <MapPin size={11} className="sm:w-[13px] sm:h-[13px]" />,
                    label: (
                      <>
                        <span className="sm:hidden">Hyderabad, India</span>
                        <span className="hidden sm:inline">{personalInfo.location}</span>
                      </>
                    ),
                  },
                  {
                    icon: <Navigation size={11} className="sm:w-[13px] sm:h-[13px]" />,
                    label: "Open to Remote / Relocation",
                  },
                ].map((b, i) => (
                  <span
                    key={i}
                    className={`inline-flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ${cardClass} border ${borderClass}`}
                  >
                    {b.dot && (
                      <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-500" />
                      </span>
                    )}

                    {b.icon && (
                      <span className={`${muted} flex items-center`}>
                        {b.icon}
                      </span>
                    )}

                    <span className={muted}>{b.label}</span>
                  </span>
                ))}
              </motion.div>

            <motion.h1 custom={0.1} variants={iv} className={`font-display font-bold leading-[1.05] mb-4 ${text}`} style={{ fontSize: "clamp(3rem,8vw,4.5rem)" }}>
              Sriniketh<br />Jeevangi
            </motion.h1>

            <motion.div custom={0.2} variants={iv} className="mb-4 h-7 flex items-center">
              <span className="font-display text-base sm:text-xl font-semibold accent-gradient-text">{displayed}</span>
              <span className="cursor-blink" />
            </motion.div>

            <motion.p custom={0.3} variants={iv} className={`text-sm leading-relaxed mb-7 max-w-sm ${muted}`}>
              {personalInfo.tagline}
            </motion.p>

            <motion.div custom={0.4} variants={iv} className="flex flex-wrap gap-2">
              <a href="#resume" onClick={(e) => { e.preventDefault(); document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 w-full sm:w-auto justify-center px-4 py-2 rounded-xl accent-gradient text-white text-sm font-semibold glow-accent hover:opacity-90 transition-all hover:scale-105">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                View Resume
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer"
                className={`inline-flex items-center gap-2 flex-1 sm:flex-none justify-center px-4 py-2 rounded-xl text-sm font-medium border transition-all hover:scale-105 ${dark ? "border-white/10 text-gray-300 hover:bg-white/5" : "border-light-border text-slate-700 hover:bg-indigo-50 bg-white shadow-sm"}`}>
                <img src="icons/github.png" alt="GitHub" className="w-5 h-5" />
                GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
                className={`inline-flex items-center gap-2 flex-1 sm:flex-none justify-center px-4 py-2 rounded-xl text-sm font-medium border transition-all hover:scale-105 ${dark ? "border-white/10 text-gray-300 hover:bg-white/5" : "border-light-border text-slate-700 hover:bg-indigo-50 bg-white shadow-sm"}`}>
                <img src="icons/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
                LinkedIn
              </a>
              <a href="#contact"
                className={`inline-flex items-center gap-2 w-full sm:w-auto justify-center px-4 py-2 rounded-xl text-sm font-medium border transition-all hover:scale-105 ${dark ? "border-white/10 text-gray-300 hover:bg-white/5" : "border-light-border text-slate-700 hover:bg-indigo-50 bg-white shadow-sm"}`}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — terminal (hidden on small mobile, shown from sm up) */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="animate-float pt-6 hidden sm:block">
            <TiltCard className={`rounded-2xl overflow-hidden ${cardClass} border ${borderClass} glow-accent`}>
              <div className={`flex items-center gap-2 px-4 py-3 border-b ${dark ? "border-white/5" : "border-light-border"}`}>
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className={`ml-2 text-xs font-mono ${muted}`}>sriniketh@portfolio ~</span>
              </div>
              <div className="p-5 pb-10 font-mono text-sm space-y-3">
                <div>
                  <span className="text-green-400">$ </span>
                  <span className={dark ? "text-gray-200" : "text-slate-700"}>whoami</span>
                </div>
                <div className={`pl-2 space-y-1 text-xs ${muted}`}>
                  <p><span className="text-accent-DEFAULT">name:</span> Sriniketh Jeevangi</p>
                  <p><span className="text-accent-DEFAULT">role:</span> Software Engineer</p>
                  <p><span className="text-accent-DEFAULT">mission:</span> Build. Ship. Improve.</p>
                  <p><span className="text-accent-DEFAULT">status:</span> <span className="text-green-400">open_to_work</span></p>
                </div>
                <div className="pt-4">
                  <span className="text-green-400">$ </span>
                  <span className={dark ? "text-gray-200" : "text-slate-700"}>ls ./skills</span>
                </div>
                <div className={`pl-2 leading-loose text-xs ${muted}`}>
                  <span className={dark ? "text-gray-300" : "text-slate-600"}>Java &nbsp;Python &nbsp;JavaScript &nbsp;Node.js</span><br />
                  <span className={dark ? "text-gray-300" : "text-slate-600"}>React &nbsp;SQL &nbsp;MongoDB &nbsp;AWS &nbsp;Docker</span><br />
                  <span className="text-accent-light">ML &nbsp;LLM &nbsp;AI &nbsp;CI/CD &nbsp;RAG</span>
                </div>
                <div className="flex items-center gap-1 pt-3">
                  <span className="text-green-400">$ </span>
                  <span className="cursor-blink" />
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {heroStats.map((s) => (
            <TiltCard key={s.label} maxTilt={4} className={`rounded-xl p-3 sm:p-4 py-4 sm:py-5 ${cardClass} border ${borderClass}`}>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-300/10 to-blue-500/20 border border-blue-500/20 flex items-center justify-center shrink-0 shadow-inner">
                  {statIconMap[s.iconKey]}
                </div>
                <div>
                  <div className="font-display font-bold text-lg sm:text-xl accent-gradient-text">{s.value}</div>
                  <div className={`text-[11px] sm:text-[13px] leading-tight ${muted}`}>{s.label}</div>
                </div>
              </div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
