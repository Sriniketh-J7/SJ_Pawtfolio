import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import TiltCard from "./TiltCard";
import { skillCategories } from "../data/portfolio";
import { skillIconMap } from "./Icons";
import {
  LayoutGrid, Code2, Server, Monitor, Brain, Cloud, Layers, Star, BarChart3,
} from "lucide-react";

interface Props { dark: boolean }

const categoryIconMap: Record<string, React.ReactElement> = {
  Code2:     <Code2     size={22} strokeWidth={1.5} />,
  Server:    <Server    size={22} strokeWidth={1.5} />,
  Monitor:   <Monitor   size={22} strokeWidth={1.5} />,
  Brain:     <Brain     size={22} strokeWidth={1.5} />,
  Cloud:     <Cloud     size={22} strokeWidth={1.5} />,
  Layers:    <Layers    size={22} strokeWidth={1.5} />,
  BarChart3: <BarChart3 size={22} strokeWidth={1.5} />,
};

const filters = [
  { id: "all",       label: "All",          icon: LayoutGrid },
  { id: "languages", label: "Languages",    icon: Code2 },
  { id: "backend",   label: "Backend",      icon: Server },
  { id: "frontend",  label: "Frontend",     icon: Monitor },
  { id: "aiml",      label: "AI / ML",      icon: Brain },
  { id: "devops",    label: "DevOps",       icon: Cloud },
  { id: "concepts",  label: "Concepts",     icon: Layers },
  { id: "analytics", label: "Analytics",    icon: BarChart3 },
];

export default function Skills({ dark }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeId, setActiveId] = useState<string | null>(null);
  const text      = dark ? "text-white"      : "text-slate-900";
  const muted     = dark ? "text-gray-400"   : "text-slate-600";
  const cardClass = dark ? "glass-card-dark" : "glass-card-light";
  const borderClass = dark ? "border-white/5": "border-light-border";

  return (
    <section id="skills" className={`py-20 md:py-28 ${dark ? "bg-dark-bg" : "bg-light-bg"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10">
          <span className="text-xs font-mono text-accent-DEFAULT uppercase tracking-widest">05. Skills</span>
          <div className="w-12 h-0.5 mt-2 mb-3 rounded-full" style={{ background: "linear-gradient(90deg,#5b8cff,#a855f7)" }} />
          <h2 className={`font-display font-bold ${text}`} style={{ fontSize: "clamp(1.8rem,4vw,2.4rem)" }}>
            Technologies &amp; <span className="accent-gradient-text">Tools</span>
          </h2>
          <p className={`text-sm mt-2 ${muted}`}>Technologies, tools and concepts I work with.</p>
        </motion.div>

        {/* Filter pills */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }} className="flex flex-wrap gap-2.5 mb-10">
          {filters.map((f) => {
            const Icon = f.icon;
            const isActive = f.id === "all" ? !activeId : f.id === activeId;
            return (
              <button key={f.id} onClick={() => setActiveId(f.id === "all" ? null : f.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 border ${
                  isActive
                    ? "bg-indigo-500/10 border-indigo-500/40 text-indigo-400 dark:text-indigo-300"
                    : dark
                      ? "bg-transparent border-white/[0.08] text-gray-400 hover:border-white/20 hover:text-gray-300"
                      : "bg-white border-light-border text-slate-500 hover:border-indigo-300 hover:text-slate-700 shadow-sm"
                }`}
              >
                <Icon size={15} className={isActive ? "text-indigo-400" : dark ? "text-gray-500" : "text-slate-400"} />
                {f.label}
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {skillCategories
            .filter((cat) => !activeId || cat.id === activeId)
            .map((cat, i) => (
              <motion.div key={cat.id} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }} layout>
                <TiltCard maxTilt={5} className={`rounded-2xl p-6 border ${borderClass} ${cardClass} flex flex-col h-full`}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${cat.iconBg} ${cat.iconColor}`}>
                      {categoryIconMap[cat.categoryIcon]}
                    </div>
                    <div>
                      <h3 className={`text-base font-semibold ${text}`}>{cat.title}</h3>
                      <p className={`text-xs mt-0.5 ${muted}`}>{cat.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-[13px] font-medium border transition-colors duration-200 ${
                        dark ? "bg-white/[0.04] border-white/[0.08] text-gray-300 hover:bg-white/[0.07]" : "bg-white border-light-border text-slate-700 hover:bg-indigo-50/60 shadow-sm"
                      }`}>
                        {skillIconMap[skill.iconKey] ?? <span className="w-3 h-3 rounded-full bg-accent-DEFAULT/40 shrink-0" />}
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
        </div>

        {/* Banner */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }}>
          <TiltCard maxTilt={2} className={`rounded-2xl px-6 py-5 md:px-8 ${cardClass} border ${borderClass} relative overflow-hidden`}>
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/20">
                  <Star size={22} fill="currentColor" className="opacity-80" />
                </div>
                <p className={`text-sm leading-relaxed max-w-xl ${muted}`}>
                  Always learning and exploring new technologies to build scalable, reliable, and impactful software solutions.
                </p>
              </div>
              <div className="hidden md:flex items-center opacity-60 pointer-events-none">
                <svg width="180" height="60" viewBox="0 0 220 80" fill="none">
                  <path d="M10 60 C 50 60, 40 20, 80 40 C 120 60, 110 30, 150 45 C 180 55, 190 30, 210 20" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4 6" strokeLinecap="round" fill="none" />
                </svg>
                <div className="-rotate-12 -translate-y-2 -ml-5">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M2 12L22 2L15 22L11 13L2 12Z" fill="#6366f1" />
                    <path d="M22 2L11 13" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

      </div>
    </section>
  );
}
