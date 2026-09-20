import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Bot, Sparkles, BookOpen, Target } from "lucide-react";
import TiltCard from "./TiltCard";
import { education, certifications, coursework } from "../data/portfolio";

interface Props { dark: boolean }

const certIconMap: Record<string, React.ReactElement> = {
  Trophy:   <Trophy size={18} className="text-yellow-400" />,
  Bot:      <Bot size={18} className="text-blue-400" />,
  Sparkles: <Sparkles size={18} className="text-purple-400" />,
};

export default function Education({ dark }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const text      = dark ? "text-white"       : "text-slate-900";
  const muted     = dark ? "text-gray-400"    : "text-slate-600";
  const cardClass = dark ? "glass-card-dark"  : "glass-card-light";
  const borderClass = dark ? "border-white/5" : "border-light-border";
  const subBg     = dark ? "bg-white/[0.04]"  : "bg-indigo-50/60";
  const chipBg    = dark ? "bg-white/5 text-gray-400" : "bg-indigo-100/70 text-slate-600";

  const edu = education[0];

  return (
    <section
      id="education"
      className={`py-20 md:py-28 ${dark ? "bg-dark-bg" : "bg-light-bg"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-xs font-mono text-accent-DEFAULT uppercase tracking-widest">
            03. Education
          </span>
          <h2
            className={`font-display font-bold mt-2 mb-1 ${text}`}
            style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)" }}
          >
            Academic <span className="accent-gradient-text">Background</span>
          </h2>
          <p className={`text-sm ${muted}`}>
            My educational journey and continuous learning path.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-3 sm:gap-5 mb-5">
          {/* LEFT — degree card */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <TiltCard
              maxTilt={4}
              className={`rounded-2xl p-4 sm:p-6 md:p-8 ${cardClass} border ${borderClass} overflow-hidden`}
            >
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle,rgba(91,140,255,0.12) 0%,transparent 70%)",
                }}
              />

              {/* Degree header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl accent-gradient flex items-center justify-center flex-shrink-0 glow-accent-sm">
                  <svg
                    width="20"
                    height="20"
                    className="sm:w-6 sm:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.8"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>

                <div className="min-w-0">
                  <h3
                    className={`font-display font-bold text-base sm:text-xl leading-snug ${text}`}
                  >
                    {edu.degree}
                  </h3>

                  <p className="text-accent-DEFAULT font-medium text-xs sm:text-sm mt-1">
                    Specialisation — {edu.specialisation}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div
                className={`rounded-xl overflow-hidden border ${borderClass} mb-4 sm:mb-5`}
              >
                {[
                  { label: "Institution", value: edu.institution },
                  { label: "University", value: edu.university },
                  { label: "Location", value: edu.location },
                ].map((d, i, arr) => (
                  <div
                    key={d.label}
                    className={`flex items-start gap-3 sm:gap-10 px-2.5 sm:px-3 py-2.5 sm:py-3 ${
                      i < arr.length - 1 ? `border-b ${borderClass}` : ""
                    } ${subBg}`}
                  >
                    <span
                      className={`w-20 sm:w-24 flex-shrink-0 font-mono text-[10px] sm:text-[13px] uppercase tracking-wider ${muted}`}
                    >
                      {d.label}
                    </span>

                    <span
                      className={`text-[12px] sm:text-[14px] font-medium leading-snug ${text}`}
                    >
                      {d.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Period + CGPA */}
              <div
                className={`grid grid-cols-[1.4fr_1fr] rounded-xl overflow-hidden border ${borderClass}`}
              >
                <div
                  className={`px-3 sm:px-4 py-2 border-r ${borderClass} ${subBg}`}
                >
                  <div className="flex items-center gap-1 sm:gap-1.5 mb-1">
                    <svg
                      width="10"
                      height="10"
                      className="sm:w-[11px] sm:h-[11px]"
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

                    <span
                      className={`text-[9px] sm:text-[10px] uppercase tracking-wider ${muted}`}
                    >
                      Duration
                    </span>
                  </div>

                  <p className={`text-sm sm:text-base font-semibold ${text}`}>
                    <span className="sm:hidden">Nov2022 - July2026</span>
                    <span className="hidden sm:inline">{edu.period}</span>
                  </p>
                </div>

                <div className={`px-3 sm:px-4 py-2 ${subBg}`}>
                  <div className="flex items-center gap-1 sm:gap-1.5 mb-1">
                    <svg
                      width="10"
                      height="10"
                      className="sm:w-[11px] sm:h-[11px]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>

                    <span
                      className={`text-[9px] sm:text-[10px] uppercase tracking-wider ${muted}`}
                    >
                      CGPA
                    </span>
                  </div>

                  <p className="text-xl sm:text-2xl font-display font-bold accent-gradient-text">
                    {edu.cgpa}{" "}
                    <span
                      className={`text-sm sm:text-base font-normal ${muted}`}
                    >
                      / 10
                    </span>
                  </p>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* RIGHT — unified certs + coursework card */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TiltCard
              maxTilt={4}
              className={`h-full rounded-2xl p-5 ${cardClass} border ${borderClass} flex flex-col gap-5`}
            >
              {/* Certs */}
              <div>
                <span
                  className={`text-[11px] sm:text-[14px] font-mono uppercase tracking-widest ${muted} block mb-2 sm:mb-3`}
                >
                  Certifications &amp; Awards
                </span>

                <div className="space-y-2 sm:space-y-2.5">
                  {certifications.map((c) => (
                    <div
                      key={c.name}
                      className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl ${
                        dark ? "bg-white/[0.03]" : "bg-indigo-50/50"
                      } border ${borderClass}`}
                    >
                      <span
                        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0 rounded-lg"
                        style={{
                          background: dark
                            ? "rgba(255,255,255,0.05)"
                            : "rgba(91,140,255,0.08)",
                        }}
                      >
                        {certIconMap[c.iconKey]}
                      </span>

                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-xs sm:text-sm font-semibold truncate ${text}`}
                        >
                          {c.name}
                        </p>
                        <p className={`text-xs sm:text-sm ${muted}`}>
                          {c.issuer}
                        </p>
                      </div>

                      <span
                        className={`text-[9px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded-full border font-medium flex-shrink-0 ${c.badgeColor}`}
                      >
                        {c.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`border-t ${borderClass}`} />

              {/* Coursework */}
              <div>
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <BookOpen
                    size={12}
                    className={`sm:w-[14px] sm:h-[14px] ${muted}`}
                  />
                  <span
                    className={`text-[11px] sm:text-[14px] font-mono uppercase tracking-widest ${muted}`}
                  >
                    Key Coursework
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {coursework.map((c) => (
                    <span
                      key={c}
                      className={`text-[10px] sm:text-xs px-2 sm:px-2.5 py-1 sm:py-1 rounded-lg font-medium ${chipBg}`}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Always Learning banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <TiltCard
            maxTilt={2}
            className={`rounded-2xl p-5 ${cardClass} border ${borderClass} flex items-center justify-between gap-4`}
          >
            <div className="flex items-start sm:items-center gap-5">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg,rgba(91,140,255,0.15),rgba(168,85,247,0.15))",
                  border: "1px solid rgba(91,140,255,0.2)",
                }}
              >
                <Target
                  size={20}
                  className="sm:w-[30px] sm:h-[30px] text-accent-DEFAULT"
                />
              </div>
              <div>
                <p className="text-accent-DEFAULT font-semibold text-base mb-0.5">
                  Always Learning
                </p>
                <p
                  className={`text-xs sm:text-sm leading-relaxed max-w-4xl ${muted}`}
                >
                  I believe in continuous learning and staying updated with the
                  latest technologies to build impactful and scalable solutions.
                </p>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
