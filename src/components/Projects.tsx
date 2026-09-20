import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Play } from "lucide-react";
import { allProjects } from "../data/portfolio";

interface Props { dark: boolean }

// ╔══════════════════════════════════════════════════════╗
// ║  TUNEABLE LAYOUT CONSTANTS  (desktop)                ║
// ╚══════════════════════════════════════════════════════╝
const SIDE_SCALE      = 0.80;
const SIDE_ROTATEY    = 16;
const SIDE_OFFSETX    = 370;
const SIDE_OPACITY    = 0.82;
const FAR_SCALE       = 0.65;
const FAR_OPACITY     = 0.28;
const TRANSITION      = { type: "spring", stiffness: 280, damping: 34 } as const;
const DRAG_THRESHOLD  = 50;
const SCROLL_LOCK_MS  = 650;

const BG_ACTIVE = "#0b0e1a";
const BG_SIDE   = "#0d1120";

interface Project {
  id: number;
  tags: string;
  tagDot?: string;
  title: string;
  description: string;
  stack: string[];
  gradient?: string;
  artKey?: "landscape" | "orb" | "phone" | "dashboard";
  image?: string;
  github?: string;
  live?: string;
  demo?: string;
}

const PROJECTS: Project[] = allProjects as Project[];

// ─── SVG artwork per card type ────────────────────────────────────────────────
const CardArt = ({ artKey }: { artKey: Project["artKey"] }) => {
  if (artKey === "landscape")
    return (
      <svg viewBox="0 0 400 240" className="absolute inset-0 w-full h-full opacity-60" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="sky" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#1e4d7b" stopOpacity=".6" />
            <stop offset="100%" stopColor="#07121f" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="moonGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b8d4f0" stopOpacity=".9" />
            <stop offset="100%" stopColor="#7ab3e0" stopOpacity=".4" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill="url(#sky)" />
        <circle cx="310" cy="50" r="22" fill="url(#moonGlow)" opacity=".7" />
        <circle cx="318" cy="44" r="20" fill="#07121f" opacity=".5" />
        {[[60,30],[130,22],[200,18],[250,35],[340,25],[370,42],[90,55],[170,48]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="1.2" fill="white" opacity=".55" />
        ))}
        <path d="M0 180 L50 100 L110 155 L170 80 L230 130 L280 70 L340 120 L400 90 L400 240 L0 240Z" fill="#0d1e30" opacity=".9" />
        <path d="M-10 220 L60 140 L130 195 L200 120 L260 170 L330 110 L400 160 L410 240 L-10 240Z" fill="#091525" />
        <rect x="0" y="200" width="400" height="40" fill="#0a1c2e" opacity=".8" />
        <path d="M0 205 Q100 202 200 206 Q300 210 400 204" stroke="#3a7cbf" strokeWidth=".8" fill="none" opacity=".3" />
        <path d="M0 212 Q120 209 240 213 Q320 216 400 211" stroke="#3a7cbf" strokeWidth=".6" fill="none" opacity=".2" />
        <rect x="168" y="175" width="64" height="32" fill="#0e1e2e" />
        <polygon points="162,177 200,155 238,177" fill="#1a2d40" />
        <rect x="178" y="185" width="10" height="22" fill="#f5c842" opacity=".6" />
        <rect x="212" y="185" width="10" height="22" fill="#f5c842" opacity=".6" />
        <ellipse cx="200" cy="207" rx="30" ry="8" fill="#f5c842" opacity=".08" />
        {[120,140,248,270].map((x,i)=>(
          <g key={i}>
            <polygon points={`${x},135 ${x+10},170 ${x-10},170`} fill="#05141e" />
            <polygon points={`${x},115 ${x+13},150 ${x-13},150`} fill="#061825" />
          </g>
        ))}
      </svg>
    );

  if (artKey === "orb")
    return (
      <svg viewBox="0 0 400 240" className="absolute inset-0 w-full h-full opacity-65" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="bg2" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#2d0a6e" stopOpacity=".5" />
            <stop offset="100%" stopColor="#060412" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="orbFill" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity=".9" />
            <stop offset="40%" stopColor="#7c3aed" stopOpacity=".7" />
            <stop offset="80%" stopColor="#4c1d95" stopOpacity=".4" />
            <stop offset="100%" stopColor="#0e0520" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c4b5fd" stopOpacity=".3" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </radialGradient>
          <filter id="blur1"><feGaussianBlur stdDeviation="8"/></filter>
        </defs>
        <rect width="400" height="240" fill="url(#bg2)" />
        <circle cx="200" cy="100" r="80" fill="#7c3aed" opacity=".12" filter="url(#blur1)" />
        <circle cx="200" cy="100" r="48" fill="url(#orbFill)" />
        <circle cx="200" cy="100" r="60" fill="url(#orbGlow)" opacity=".6" />
        <ellipse cx="185" cy="82" rx="18" ry="12" fill="white" opacity=".15" />
        {[[100,60],[290,55],[140,160],[310,140],[80,130],[340,80]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r={1.5+i%2} fill="#a78bfa" opacity={.4+i*.06} />
        ))}
        <path d="M60 120 L120 120 L140 100 L160 100" stroke="#7c3aed" strokeWidth=".8" fill="none" opacity=".35" />
        <path d="M340 80 L280 80 L260 100 L240 100" stroke="#7c3aed" strokeWidth=".8" fill="none" opacity=".35" />
        <circle cx="120" cy="120" r="2.5" fill="#a78bfa" opacity=".5" />
        <circle cx="280" cy="80" r="2.5" fill="#a78bfa" opacity=".5" />
        <text x="200" y="175" textAnchor="middle" fill="white" opacity=".45" fontSize="11" fontFamily="system-ui">Smarter Conversations</text>
        <text x="200" y="192" textAnchor="middle" fill="white" opacity=".35" fontSize="10" fontFamily="system-ui">Brighter Ideas</text>
      </svg>
    );

  if (artKey === "dashboard")
    return (
      <svg viewBox="0 0 400 240" className="absolute inset-0 w-full h-full opacity-55" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="bg3" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#064e3b" stopOpacity=".4" />
            <stop offset="100%" stopColor="#020d0d" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="240" fill="url(#bg3)" />
        <rect x="60" y="30" width="280" height="180" rx="10" fill="#0a1f1a" opacity=".85" />
        <rect x="60" y="30" width="280" height="28" rx="10" fill="#0e2922" />
        <rect x="60" y="48" width="280" height="10" fill="#0e2922" />
        <circle cx="82" cy="44" r="5" fill="#ff5f57" opacity=".7" />
        <circle cx="98" cy="44" r="5" fill="#febc2e" opacity=".7" />
        <circle cx="114" cy="44" r="5" fill="#28c840" opacity=".7" />
        {[
          { x: 90,  h: 60,  c: "#34d399" },
          { x: 130, h: 90,  c: "#34d399" },
          { x: 170, h: 45,  c: "#34d399" },
          { x: 210, h: 110, c: "#10b981" },
          { x: 250, h: 75,  c: "#34d399" },
          { x: 290, h: 130, c: "#059669" },
        ].map(({ x, h, c }, i) => (
          <rect key={i} x={x} y={185-h} width="28" height={h} rx="4" fill={c} opacity=".5" />
        ))}
        <polyline points="90,145 130,120 170,135 210,100 250,115 290,80 330,90" stroke="#6ee7b7" strokeWidth="2" fill="none" opacity=".6" />
        {[90,130,170,210,250,290,330].map((x,i)=>{
          const ys=[145,120,135,100,115,80,90];
          return <circle key={i} cx={x} cy={ys[i]} r="3" fill="#34d399" opacity=".8" />;
        })}
        <rect x="80" y="68" width="65" height="32" rx="5" fill="#0d2e25" opacity=".8" />
        <rect x="158" y="68" width="65" height="32" rx="5" fill="#0d2e25" opacity=".8" />
        <rect x="236" y="68" width="65" height="32" rx="5" fill="#0d2e25" opacity=".8" />
        <text x="112" y="82" textAnchor="middle" fill="#34d399" fontSize="9" fontFamily="system-ui">₹ 48,200</text>
        <text x="112" y="93" textAnchor="middle" fill="white" opacity=".4" fontSize="7" fontFamily="system-ui">Income</text>
        <text x="190" y="82" textAnchor="middle" fill="#f87171" fontSize="9" fontFamily="system-ui">₹ 31,500</text>
        <text x="190" y="93" textAnchor="middle" fill="white" opacity=".4" fontSize="7" fontFamily="system-ui">Expenses</text>
        <text x="268" y="82" textAnchor="middle" fill="#a78bfa" fontSize="9" fontFamily="system-ui">₹ 16,700</text>
        <text x="268" y="93" textAnchor="middle" fill="white" opacity=".4" fontSize="7" fontFamily="system-ui">Saved</text>
      </svg>
    );

  return (
    <svg viewBox="0 0 400 240" className="absolute inset-0 w-full h-full opacity-60" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="bg4" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#4c0519" stopOpacity=".35" />
          <stop offset="100%" stopColor="#0d050a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1030" />
          <stop offset="100%" stopColor="#2d0a1e" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#bg4)" />
      <rect x="148" y="15" width="104" height="210" rx="18" fill="#111" />
      <rect x="152" y="22" width="96" height="196" rx="14" fill="url(#screenGrad)" />
      <rect x="182" y="22" width="36" height="8" rx="4" fill="#111" />
      <circle cx="200" cy="80" r="24" fill="#7c3aed" opacity=".5" />
      <circle cx="200" cy="80" r="16" fill="#a78bfa" opacity=".4" />
      <text x="200" y="85" textAnchor="middle" fill="white" fontSize="12" fontFamily="system-ui">LC</text>
      <text x="200" y="124" textAnchor="middle" fill="white" opacity=".8" fontSize="8" fontFamily="system-ui">Solved Today</text>
      <text x="200" y="138" textAnchor="middle" fill="#a78bfa" fontSize="14" fontFamily="system-ui" fontWeight="bold">5 / 8</text>
      <rect x="165" y="150" width="70" height="5" rx="2.5" fill="#2d1a50" />
      <rect x="165" y="150" width="44" height="5" rx="2.5" fill="#7c3aed" opacity=".8" />
      <rect x="165" y="165" width="70" height="22" rx="6" fill="#1a0e2e" opacity=".8" />
      <text x="200" y="179" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="system-ui">12-day streak</text>
      <rect x="186" y="205" width="28" height="3" rx="1.5" fill="white" opacity=".25" />
      {[[80,60],[320,50],[70,180],[330,170],[100,130],[310,130]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r={1+i%3} fill="#f43f5e" opacity={.15+i*.04} />
      ))}
    </svg>
  );
};

// ─── Mobile card (full-width, no 3D) ─────────────────────────────────────────
const MobileCard = ({ project }: { project: Project }) => {
  const cardBg = BG_ACTIVE;
  const FONT_TITLE = { fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.25 };
  const FONT_DESC  = { fontSize: "0.8125rem", fontWeight: 400, lineHeight: 1.6 };
  const FONT_PILL  = { fontSize: "0.6875rem", fontWeight: 500 };
  const FONT_TAG   = { fontSize: "0.75rem",   fontWeight: 500, letterSpacing: "0.04em" };
  const FONT_BTN   = { fontSize: "0.75rem",   fontWeight: 600, letterSpacing: "0.02em" };

  const btnBase = "inline-flex items-center gap-1.5 px-4 py-2 rounded-full leading-none text-white transition-all active:scale-95 select-none";
  const btnLive = { background: "rgba(255,255,255,0.13)", border: "1px solid rgba(255,255,255,0.24)", backdropFilter: "blur(12px)" };
  const btnGh   = { background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", backdropFilter: "blur(12px)" };
  const btnDemo = { background: "rgba(99,102,241,0.28)",  border: "1px solid rgba(99,102,241,0.50)", backdropFilter: "blur(12px)" };

  return (
    <div
      className="relative rounded-2xl overflow-hidden flex flex-col w-full"
      style={{
        background: cardBg,
        boxShadow: "0 0 0 1.5px rgba(99,102,241,0.6), 0 0 40px rgba(99,102,241,0.12), 0 16px 48px rgba(0,0,0,0.5)",
      }}
    >
      {/* Image / Art — 45% height */}
      <div className="relative overflow-hidden" style={{ paddingTop: "45%" }}>
        <div className="absolute inset-0">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <CardArt artKey={project.artKey} />
          )}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{ height: 56, background: `linear-gradient(to bottom, transparent, ${cardBg})` }}
          />
        </div>
        {/* Tag badge */}
        <div className="absolute top-3 left-3 z-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{ background: "rgba(0,0,0,0.62)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.10)" }}
          >
            <span className="text-white" style={FONT_TAG}>{project.tags}</span>
          </div>
        </div>
      </div>

      {/* Text panel */}
      <div className="flex flex-col flex-1 px-4 pt-3 pb-4" style={{ background: cardBg }}>
        <h3 className="text-white mb-1.5" style={FONT_TITLE}>{project.title}</h3>
        <p className="text-white/60 mb-3 line-clamp-2" style={FONT_DESC}>{project.description}</p>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-white/70 px-2.5 py-0.5 rounded-full"
              style={{ ...FONT_PILL, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)" }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 flex-wrap mt-auto">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className={btnBase} style={{ ...btnLive, ...FONT_BTN }}>
              <ExternalLink size={12} strokeWidth={2.2} />Live
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className={btnBase} style={{ ...btnGh, ...FONT_BTN }}>
              <img src="icons/github.png" alt="GitHub" className="w-4 h-4" />Github
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className={btnBase} style={{ ...btnDemo, ...FONT_BTN }}>
              <Play size={12} strokeWidth={2.2} />Demo
            </a>
          )}
        </div>
      </div>

      {/* Active border glow */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: "inset 0 0 0 1.5px rgba(129,140,248,0.35)" }} />
    </div>
  );
};

// ─── Desktop carousel card (3D transforms) ────────────────────────────────────
interface CarouselCardProps {
  project: Project;
  position: number;
  total: number;
  activeIdx: number;
  onClick: () => void;
}

const CarouselCard = ({ project, position, total, activeIdx, onClick }: CarouselCardProps) => {
  const prefersReduced = useReducedMotion();
  const abs        = Math.abs(position);
  const isActive   = position === 0;

  const scale      = abs === 0 ? 1            : abs === 1 ? SIDE_SCALE   : FAR_SCALE;
  const opacity    = abs === 0 ? 1            : abs === 1 ? SIDE_OPACITY : FAR_OPACITY;
  const rotateY    = abs === 0 ? 0            : position > 0 ? -SIDE_ROTATEY : SIDE_ROTATEY;
  const translateX = abs === 0 ? 0
    : position > 0
      ?  SIDE_OFFSETX * Math.min(abs, 1.4)
      : -SIDE_OFFSETX * Math.min(abs, 1.4);

  const FONT_TITLE  = { fontSize: "1.5rem",    fontWeight: 700,  lineHeight: 1.25 };
  const FONT_DESC   = { fontSize: "0.8125rem", fontWeight: 400,  lineHeight: 1.6  };
  const FONT_PILL   = { fontSize: "0.6875rem", fontWeight: 500 };
  const FONT_TAG    = { fontSize: "0.75rem",   fontWeight: 500,  letterSpacing: "0.04em" };
  const FONT_COUNTER= { fontSize: "0.6875rem", fontWeight: 400,  letterSpacing: "0.12em", fontVariantNumeric: "tabular-nums" };
  const FONT_BTN    = { fontSize: "0.75rem",   fontWeight: 600,  letterSpacing: "0.02em" };

  const btnBase =
    "inline-flex items-center gap-1.5 px-4 py-2 rounded-full leading-none text-white transition-all hover:scale-105 active:scale-95 select-none";
  const btnLive  = { background: "rgba(255,255,255,0.13)", border: "1px solid rgba(255,255,255,0.24)", backdropFilter: "blur(12px)" };
  const btnGh    = { background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", backdropFilter: "blur(12px)" };
  const btnDemo  = { background: "rgba(99,102,241,0.28)",  border: "1px solid rgba(99,102,241,0.50)", backdropFilter: "blur(12px)" };

  const cardBg = isActive ? BG_ACTIVE : BG_SIDE;

  return (
    <motion.div
      className="absolute top-0"
      style={{ width: 520, left: "50%", marginLeft: -260 }}
      animate={{
        x: translateX,
        scale,
        opacity,
        rotateY: prefersReduced ? 0 : rotateY,
        zIndex: 10 - abs,
      }}
      transition={prefersReduced ? { duration: 0 } : TRANSITION}
      onClick={!isActive ? onClick : undefined}
      aria-hidden={!isActive}
    >
      <div
        className={`relative rounded-2xl overflow-hidden select-none flex flex-col ${isActive ? "cursor-default" : "cursor-pointer"}`}
        style={{
          height: 490,
          background: cardBg,
          boxShadow: isActive
            ? "0 0 0 1.5px rgba(99,102,241,0.6), 0 0 80px rgba(99,102,241,0.18), 0 32px 80px rgba(0,0,0,0.6)"
            : "0 16px 48px rgba(0,0,0,0.5)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* TOP — Image / Art */}
        <div className="relative flex-none overflow-hidden" style={{ height: "60%" }}>
          {project.image ? (
            <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <CardArt artKey={project.artKey} />
          )}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{ height: 72, background: `linear-gradient(to bottom, transparent, ${cardBg})` }}
          />
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full"
              style={{ background: "rgba(0,0,0,0.62)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.10)" }}
            >
              <span className="text-white" style={FONT_TAG}>{project.tags}</span>
            </div>
            <span className="text-white/40" style={FONT_COUNTER}>
              {String(activeIdx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* BOTTOM — Text panel */}
        <div className="flex flex-col flex-1 px-5 pt-3 pb-5" style={{ background: cardBg }}>
          <h3 className="text-white mb-1.5" style={FONT_TITLE}>{project.title}</h3>
          <p className="text-white/60 mb-3 line-clamp-2" style={FONT_DESC}>{project.description}</p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-white/70 px-2.5 py-0.5 rounded-full"
                style={{ ...FONT_PILL, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(8px)" }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2.5 flex-wrap mt-auto">
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className={`${btnBase} items-center`} style={{ ...btnLive, ...FONT_BTN }} onClick={(e) => e.stopPropagation()}>
                <ExternalLink size={12} strokeWidth={2.2} />Live
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className={`${btnBase} items-center`} style={{ ...btnGh, ...FONT_BTN }} onClick={(e) => e.stopPropagation()}>
                <img src="icons/github.png" alt="GitHub" className="w-4 h-4" />Github
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className={`${btnBase} items-center`} style={{ ...btnDemo, ...FONT_BTN }} onClick={(e) => e.stopPropagation()}>
                <Play size={12} strokeWidth={2.2} />Demo
              </a>
            )}
          </div>
        </div>

        {isActive && (
          <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: "inset 0 0 0 1.5px rgba(129,140,248,0.35)" }} />
        )}
      </div>
    </motion.div>
  );
};

// ─── Main section component ───────────────────────────────────────────────────
export default function Projects({ dark }: Props) {
  const headerRef      = useRef<HTMLDivElement>(null);
  const stageRef       = useRef<HTMLDivElement>(null);
  const inView         = useInView(headerRef, { once: true, margin: "-100px" });

  const touchStartX = useRef<number | null>(null);
  const dragStartX  = useRef<number | null>(null);
  const isDragging  = useRef(false);

  const [active, setActive] = useState(0);
  // track whether we're on mobile (< 640px)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const total = PROJECTS.length;

  const prev = useCallback(() => setActive((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setActive((i) => (i + 1) % total), [total]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  useEffect(() => {
    const el = stageRef.current;
    if (!el || isMobile) return;
    let locked = false;
    const handler = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY) * 0.5) return;
      e.preventDefault();
      if (locked) return;
      locked = true;
      e.deltaX > 0 ? next() : prev();
      setTimeout(() => { locked = false; }, SCROLL_LOCK_MS);
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, [prev, next, isMobile]);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > DRAG_THRESHOLD) dx > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const onMouseDown  = (e: React.MouseEvent) => { dragStartX.current = e.clientX; isDragging.current = false; };
  const onMouseMove  = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    if (Math.abs(e.clientX - dragStartX.current) > 8) isDragging.current = true;
  };
  const onMouseUp    = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const dx = dragStartX.current - e.clientX;
    if (isDragging.current && Math.abs(dx) > DRAG_THRESHOLD) dx > 0 ? next() : prev();
    dragStartX.current = null;
    isDragging.current = false;
  };
  const onMouseLeave = () => { dragStartX.current = null; isDragging.current = false; };

  const text  = dark ? "text-white"    : "text-slate-900";
  const muted = dark ? "text-gray-400" : "text-slate-600";

  return (
    <section
      id="projects"
      className={`relative overflow-hidden py-20 md:py-28 ${dark ? "bg-dark-bg" : "bg-light-surface"}`}
    >
      {dark && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute"
            style={{
              left: "50%",
              top: "55%",
              transform: "translate(-50%,-50%)",
              width: 900,
              height: 600,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "18%",
                top: "20%",
                width: 320,
                height: 320,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle,rgba(91,33,182,0.22) 0%,transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: "18%",
                top: "20%",
                width: 320,
                height: 320,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle,rgba(67,56,202,0.18) 0%,transparent 70%)",
                filter: "blur(40px)",
              }}
            />
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <span className="text-xs font-mono text-accent-DEFAULT uppercase tracking-widest">
            04. Featured Projects
          </span>
          <h2
            className={`font-display font-bold mt-2 mb-2 ${text}`}
            style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)" }}
          >
            Things I've <span className="accent-gradient-text">Built</span>
          </h2>
          <p className={`text-sm max-w-2xl ${muted}`}>
            From full-stack applications to AI-powered tools — each project is a
            step in my journey of building, learning, and creating impact.
          </p>
        </motion.div>
      </div>

      {/* ── MOBILE: stacked single card with swipe ───────────────────────── */}
      {isMobile && (
        <div className="px-4 relative z-10">
          <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <MobileCard project={PROJECTS[active]} />
          </div>
        </div>
      )}

      {/* ── DESKTOP: 3D carousel ─────────────────────────────────────────── */}
      {!isMobile && (
        <div
          ref={stageRef}
          className="relative w-full z-10"
          style={{
            height: 530,
            perspective: 1400,
            perspectiveOrigin: "50% 50%",
            cursor: isDragging.current ? "grabbing" : "grab",
            userSelect: "none",
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          role="region"
          aria-label="Project carousel"
        >
          {PROJECTS.map((project, idx) => {
            const raw = (((idx - active + total) % total) + total) % total;
            const pos = raw > total / 2 ? raw - total : raw;
            return (
              <CarouselCard
                key={project.id}
                project={project}
                position={pos}
                total={total}
                activeIdx={active}
                onClick={() => setActive(idx)}
              />
            );
          })}
        </div>
      )}

      {/* ── Navigation (shared) ──────────────────────────────────────────── */}
      <div className="relative z-10 mt-8 sm:mt-10 flex items-center justify-center gap-6">
        <button
          onClick={prev}
          className="w-11 h-11 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all hover:scale-110 active:scale-95"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.14)",
            backdropFilter: "blur(12px)",
          }}
          aria-label="Previous project"
        >
          <ArrowLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {PROJECTS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: active === idx ? 22 : 7,
                height: 7,
                background:
                  active === idx ? "#818cf8" : "rgba(255,255,255,0.25)",
              }}
              aria-label={`Go to project ${idx + 1}`}
              aria-current={active === idx ? "true" : undefined}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-11 h-11 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all hover:scale-110 active:scale-95"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.14)",
            backdropFilter: "blur(12px)",
          }}
          aria-label="Next project"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      <p
        className={`relative z-10 mt-4 text-center text-[10px] tracking-widest ${
          dark ? "text-white/20" : "text-slate-400"
        }`}
      >
        {isMobile
          ? "← swipe →"
          : "← arrow keys · swipe · drag · horizontal scroll →"}
      </p>
    </section>
  );
}
