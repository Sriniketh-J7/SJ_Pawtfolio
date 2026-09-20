import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "../data/portfolio";
import TiltCard from "./TiltCard";
import { Briefcase } from "lucide-react";
import { stackIconsMap } from "./Icons";

interface Props { dark: boolean }

export default function Experience({ dark }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const text      = dark ? "text-white"      : "text-slate-900";
  const muted     = dark ? "text-gray-400"   : "text-slate-600";
  const cardClass = dark ? "glass-card-dark" : "glass-card-light";
  const borderClass = dark ? "border-white/5": "border-light-border";

  const renderBullet = (b: string) =>
    b.split(/(\d+%)/g).map((p, i) =>
      /\d+%/.test(p) ? <span key={i} className="text-accent-DEFAULT font-semibold">{p}</span> : <span key={i}>{p}</span>
    );

  return (
    <section
      id="experience"
      className={`py-20 md:py-28 ${dark ? "bg-dark-bg" : "bg-light-surface"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-xs font-mono text-accent-DEFAULT uppercase tracking-widest">
            02. Experience
          </span>
          <h2
            className={`font-display font-bold mt-2 mb-2 ${text}`}
            style={{ fontSize: "clamp(1.8rem,4vw,2.4rem)" }}
          >
            Where I've Worked
          </h2>
          <p className={`text-sm ${muted}`}>
            My internship and professional experience so far.
          </p>
          <div className={`mt-6 border-t ${borderClass}`} />
        </motion.div>

        {experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TiltCard
              maxTilt={4}
              className={`rounded-2xl p-6 md:p-8 ${cardClass} border ${borderClass} overflow-hidden mb-4`}
            >
              <div className="flex flex-row items-start gap-3 sm:gap-4 mb-3">
                {/* Logo */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                  <img
                    src="/company logo.jpg"
                    alt="Company logo"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <p className="text-accent-DEFAULT font-semibold text-base sm:text-xl">
                        {exp.company}
                      </p>
                      <h3
                        className={`font-display font-bold text-[15px] sm:text-xl ${text}`}
                      >
                        {exp.title}
                      </h3>

                      <p
                        className={`text-[13px] sm:text-base mt-0.5 flex items-center gap-1 ${muted}`}
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {exp.location}
                      </p>
                    </div>

                    {/* Period */}
                    <span
                      className={`self-start sm:self-auto inline-flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-full whitespace-nowrap ${
                        dark
                          ? "bg-white/5 text-gray-400 border border-white/5"
                          : "bg-indigo-100/60 text-slate-600 border border-light-border"
                      }`}
                    >
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`border-t mb-5 ${dark ? "border-white/5" : "border-light-border"}`}
              />

              {/* work details */}
              <ul className="space-y-2 mb-4">
                {exp.bullets.map((b, j) => (
                  <li
                    key={j}
                    className={`flex items-start gap-1 text-xs sm:text-[16px] leading-relaxed ${muted}`}
                  >
                    <span className="text-[#3b82f6] mr-3 mt-0 sm:mt-1 text-xl leading-none">
                      •
                    </span>
                    <span>{renderBullet(b)}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`text-xs font-mono font-bold uppercase tracking-wider mr-2 ${muted}`}
                >
                  Tech Stack
                </span>
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className={`inline-flex items-center gap-1.5 text-[10px] sm:text-xs px-3 py-1.5 rounded-lg border font-medium ${dark ? "border-white/10 text-gray-300 bg-white/5" : "border-light-border text-slate-700 bg-white"}`}
                  >
                    {stackIconsMap[tech] ?? (
                      <span className="w-2 h-2 rounded-full bg-accent-DEFAULT/40 shrink-0" />
                    )}
                    {tech}
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}

        {/* Seeking card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <TiltCard
            className={`rounded-2xl border ${borderClass} ${cardClass}`}
          >
            <div className="p-4 sm:p-6 flex flex-row items-start gap-3 sm:gap-6 group">
              <div className="bg-[#3b82f6] w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-300">
                <Briefcase size={24} className="text-white" />
              </div>
              <div>
                <h3 className={`text-base font-bold mb-1.5 ${text}`}>
                  Actively Seeking Full-time Opportunities
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed max-w-5xl ${muted}`}
                >
                  I'm looking for a Full-time role in Software Development
                  (Full-Stack / Backend), AIML where I can contribute, learn and
                  grow with a great team.
                </p>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
