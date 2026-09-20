import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo, profiles } from "../data/portfolio";
import TiltCard from "./TiltCard";
import { Mail, MapPin, Briefcase, Users, Send, Copy, Check, FileText, Eye, EyeOff, Download } from "lucide-react";

interface Props { dark: boolean }

// ─── EmailJS config ───────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact({ dark }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied]           = useState(false);
  const [resumePreview, setResumePreview] = useState(false);
  const [sending, setSending]         = useState(false);
  const [sent, setSent]               = useState(false);
  const [sendError, setSendError]     = useState("");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const isMobile = window.innerWidth < 640;

  const text      = dark ? "text-white"      : "text-slate-900";
  const muted     = dark ? "text-gray-400"   : "text-slate-600";
  const cardClass = dark ? "glass-card-dark" : "glass-card-light";
  const borderClass = dark ? "border-white/5": "border-light-border";
  const inputClass = dark
    ? "bg-white/[0.04] border-white/10 text-gray-200 placeholder:text-gray-500 focus:border-accent-DEFAULT/60"
    : "bg-white border-light-border text-slate-800 placeholder:text-slate-400 focus:border-accent-DEFAULT/60 shadow-sm";

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendError("");

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      const sub = encodeURIComponent(form.subject || "Portfolio Contact");
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${sub}&body=${body}`;
      return;
    }

    setSending(true);

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            name: form.name,
            email: form.email,
            subject: form.subject || "Portfolio Contact",
            message: form.message,
          },
        }),
      });

      if (!res.ok) throw new Error("Send failed");

      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch {
      setSendError("Failed to send. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 md:py-28 ${dark ? "bg-dark-bg mesh-bg" : "bg-light-bg mesh-bg-light"}`}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-xs font-mono text-accent-DEFAULT uppercase tracking-widest">
            06. Contact
          </span>
          <div
            className="w-12 h-0.5 mt-2 mb-3 rounded-full"
            style={{ background: "linear-gradient(90deg,#5b8cff,#a855f7)" }}
          />
          <h2
            className={`font-display font-bold mb-3 ${text}`}
            style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)" }}
          >
            Let's Build <span className="accent-gradient-text">Something</span>
          </h2>
          <p className={`text-sm max-w-md ${muted}`}>
            I bring curiosity, ownership, and a slightly unhealthy interest in
            figuring out how things work.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* LEFT */}
          <div className="flex flex-col gap-4">
            {/* Open-to-work card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <TiltCard
                maxTilt={4}
                className={`rounded-2xl p-6 ${cardClass} border ${borderClass} overflow-hidden relative`}
              >
                {/* Illustration (Recreated with SVG) */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-48 h-48 opacity-80 hidden sm:block">
                  <div className="w-full h-full cursor-pointer transition-all duration-700 hover:-translate-y-4 hover:scale-110 hover:rotate-2">
                    <svg
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full drop-shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                    >
                      {/* Dashed trail */}
                      <path
                        d="M 50 160 C 20 160, 20 120, 50 120 C 80 120, 80 160, 110 160 C 140 160, 140 120, 160 100"
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        fill="none"
                      />

                      {/* Envelope Base */}
                      <path
                        d="M 120 130 L 160 130 C 165.5 130 170 125.5 170 120 L 170 80 C 170 74.5 165.5 70 160 70 L 120 70 C 114.5 70 110 74.5 110 80 L 110 120 C 110 125.5 114.5 130 120 130 Z"
                        fill="url(#env-grad)"
                      />

                      {/* Envelope Inside/Letter */}
                      <rect
                        x="118"
                        y="65"
                        width="44"
                        height="35"
                        rx="2"
                        fill="white"
                        fillOpacity="0.9"
                      />
                      <line
                        x1="124"
                        y1="75"
                        x2="156"
                        y2="75"
                        stroke="#E2E8F0"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="124"
                        y1="83"
                        x2="148"
                        y2="83"
                        stroke="#E2E8F0"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />

                      {/* Envelope Flaps */}
                      <path
                        d="M 110 70 L 140 95 L 170 70 L 110 70 Z"
                        fill="url(#env-flap-grad)"
                      />
                      <path
                        d="M 110 130 L 140 105 L 170 130 L 110 130 Z"
                        fill="url(#env-flap-grad)"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M 110 70 L 140 95 L 110 130 Z"
                        fill="url(#env-side-grad)"
                      />
                      <path
                        d="M 170 70 L 140 95 L 170 130 Z"
                        fill="url(#env-side-grad)"
                      />

                      {/* Paper Plane */}
                      <g transform="translate(145, 45) rotate(-15)">
                        <path
                          d="M 0 20 L 25 0 L 15 25 L 10 15 Z"
                          fill="url(#plane-grad)"
                        />
                        <path
                          d="M 10 15 L 25 0 L 12 18 Z"
                          fill="white"
                          fillOpacity="0.5"
                        />
                      </g>

                      {/* Sparkles */}
                      <circle
                        cx="160"
                        cy="40"
                        r="1.5"
                        fill="#A78BFA"
                        className="animate-pulse"
                      />
                      <circle
                        cx="90"
                        cy="70"
                        r="2"
                        fill="#818CF8"
                        className="animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      />
                      <circle
                        cx="150"
                        cy="150"
                        r="1.5"
                        fill="#C084FC"
                        className="animate-pulse"
                        style={{ animationDelay: "1s" }}
                      />

                      <defs>
                        <linearGradient
                          id="env-grad"
                          x1="110"
                          y1="70"
                          x2="170"
                          y2="130"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3B82F6" />
                          <stop offset="1" stopColor="#6366F1" />
                        </linearGradient>
                        <linearGradient
                          id="env-flap-grad"
                          x1="140"
                          y1="70"
                          x2="140"
                          y2="95"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#60A5FA" />
                          <stop offset="1" stopColor="#3B82F6" />
                        </linearGradient>
                        <linearGradient
                          id="env-side-grad"
                          x1="110"
                          y1="100"
                          x2="170"
                          y2="100"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#2563EB" />
                          <stop offset="1" stopColor="#4F46E5" />
                        </linearGradient>
                        <linearGradient
                          id="plane-grad"
                          x1="0"
                          y1="0"
                          x2="25"
                          y2="25"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#E0E7FF" />
                          <stop offset="1" stopColor="#A5B4FC" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="text-xs font-medium text-green-400">
                    Open to Full-time Opportunities
                  </span>
                </div>
                <h3
                  className={`font-display font-bold text-xl mb-3 max-w-full sm:max-w-[360px] ${text}`}
                >
                  Looking for a role where I can create impact and grow.
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-5 max-w-full sm:max-w-[320px] ${muted}`}
                >
                  I build, I ship, I learn fast, and I'm always down for a good
                  engineering challenge. If you're building something cool,
                  let's talk!
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl accent-gradient text-white text-sm font-semibold glow-accent hover:opacity-90 transition-all hover:scale-105"
                  >
                    <Mail size={13} /> Send an email
                  </a>
                  <button
                    onClick={copyEmail}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border transition-all hover:scale-105 ${copied ? "bg-green-500/10 border-green-500/30 text-green-400" : dark ? "border-white/10 text-gray-300 hover:bg-white/5" : "border-light-border text-slate-600 hover:bg-indigo-50 bg-white shadow-sm"}`}
                  >
                    {copied ? (
                      <>
                        <Check size={13} /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={13} /> Copy email
                      </>
                    )}
                  </button>
                </div>
              </TiltCard>
            </motion.div>

            {/* Email + Location row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Mail className="w-5 h-5 text-emerald-400" />,
                  label: "EMAIL",
                  value: personalInfo.email,
                  sub: "Drop me a mail anytime!",
                },
                {
                  icon: <MapPin className="w-5 h-5 text-emerald-400" />,
                  label: "LOCATION",
                  value: "Hyderabad, India",
                  sub: "Open to Remote / Relocation",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                >
                  <TiltCard
                    maxTilt={5}
                    className={`rounded-2xl p-4 ${cardClass} border ${borderClass} h-full`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${dark ? "bg-white/5 border border-white/[0.08]" : "bg-indigo-50 border border-light-border"}`}
                      >
                        {item.icon}
                      </div>
                      <span
                        className={`text-[16px] font-mono uppercase tracking-wider ${muted}`}
                      >
                        {item.label}
                      </span>
                    </div>
                    <p
                      className={`text-[15px] font-semibold break-all mb-0.5 ${text}`}
                    >
                      {item.value}
                    </p>
                    <p className={`text-[13px] ${muted}`}>{item.sub}</p>
                  </TiltCard>
                </motion.div>
              ))}
            </div>

            {/* Seeking card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <TiltCard
                maxTilt={3}
                className={`rounded-2xl p-4 ${cardClass} border ${borderClass} flex items-start gap-3`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${dark ? "bg-blue-500/10 border border-blue-500/20" : "bg-blue-50 border border-blue-200"}`}
                >
                  <Briefcase className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`text-sm font-semibold ${text}`}>
                      Actively Seeking Full-time Opportunities
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                      Available Now
                    </span>
                  </div>
                  <p className={`text-[13px] ${muted}`}>
                    Open to roles in Software Development, Full-stack, Backend,
                    AI/ML &amp; Data Analytics.
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          </div>

          {/* RIGHT — message form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <TiltCard
              maxTilt={3}
              className={`rounded-2xl p-6 md:p-7 ${cardClass} border ${borderClass}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl accent-gradient flex items-center justify-center flex-shrink-0">
                  <Send size={15} className="text-white" />
                </div>
                <h3 className={`font-display font-semibold text-lg ${text}`}>
                  Send me a message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className={`block text-xs font-medium mb-1.5 ${muted}`}
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <svg
                        width="13"
                        height="13"
                        className={`absolute left-3 top-1/2 -translate-y-1/2 ${muted}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl text-sm border outline-none transition-colors ${inputClass}`}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className={`block text-xs font-medium mb-1.5 ${muted}`}
                    >
                      Your Email
                    </label>
                    <div className="relative">
                      <Mail
                        size={13}
                        className={`absolute left-3 top-1/2 -translate-y-1/2 ${muted}`}
                      />
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl text-sm border outline-none transition-colors ${inputClass}`}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-xs font-medium mb-1.5 ${muted}`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Full-time Opportunity / Job Opening"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm border outline-none transition-colors ${inputClass}`}
                  />
                </div>

                <div>
                  <label
                    className={`block text-xs font-medium mb-1.5 ${muted}`}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about the opportunity..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm border outline-none resize-y transition-colors ${inputClass}`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl accent-gradient text-white text-sm font-semibold glow-accent hover:opacity-90 transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {sending ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeDasharray="32"
                          strokeDashoffset="12"
                        />
                      </svg>{" "}
                      Sending...
                    </>
                  ) : sent ? (
                    <>
                      <Check size={14} /> Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={13} /> Send Message
                    </>
                  )}
                </button>

                {sendError && (
                  <p className="text-xs text-red-400 text-center">
                    {sendError}
                  </p>
                )}

                <p
                  className={`text-xs text-center flex items-center justify-center gap-1.5 ${muted}`}
                >
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  I'll get back to you as soon as possible!
                </p>
              </form>
            </TiltCard>
          </motion.div>
        </div>

        {/* My Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <TiltCard
            maxTilt={3}
            className={`rounded-2xl mt-8 p-4 sm:p-5 ${cardClass} border ${borderClass}`}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  dark
                    ? "bg-blue-500/10 border border-blue-500/20"
                    : "bg-blue-50 border border-blue-200"
                }`}
              >
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              </div>

              <div>
                <p className={`text-sm sm:text-base font-semibold ${text}`}>
                  My Profiles
                </p>
                <p className={`text-xs sm:text-sm ${muted}`}>
                  Find me on these platforms
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-4">
              {profiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-base font-medium border transition-all hover:scale-105 ${
                    dark
                      ? "border-white/10 text-gray-300 hover:bg-blue-500/10 hover:border-indigo-400/40 hover:text-indigo-300"
                      : "border-light-border text-slate-700 hover:bg-indigo-50 bg-white shadow-sm"
                  }`}
                >
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                  />
                  {profile.name}
                </a>
              ))}
            </div>
          </TiltCard>
        </motion.div>

        {/* Resume */}
        <motion.div
          id="resume"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.42 }}
          className={`mt-6 rounded-2xl p-6 md:p-6 border ${cardClass} ${borderClass}`}
          style={{ scrollMarginTop: "5rem" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-0">
            <div className={`flex items-center gap-1.5 sm:gap-2 ${text}`}>
              <FileText size={20} className="sm:w-[25px] sm:h-[25px]" />
              <h2 className="text-base sm:text-xl font-semibold">Resume</h2>
            </div>

            <div className="flex gap-2 sm:gap-3 flex-nowrap">
              <button
                onClick={() => setResumePreview(!resumePreview)}
                className={`inline-flex items-center justify-center gap-1 sm:gap-2 px-2.5 sm:px-5 py-2 rounded-xl text-xs sm:text-base font-semibold border transition-all hover:scale-105 ${
                  dark
                    ? "border-white/10 text-gray-300 hover:bg-white/5"
                    : "border-light-border text-slate-700 hover:bg-indigo-50 bg-white shadow-sm"
                }`}
              >
                {resumePreview ? (
                  <>
                    <EyeOff
                      size={14}
                      className="shrink-0 sm:w-[15px] sm:h-[15px]"
                    />{" "}
                    Hide Preview
                  </>
                ) : (
                  <>
                    <Eye
                      size={14}
                      className="shrink-0 sm:w-[15px] sm:h-[15px]"
                    />{" "}
                    Show Preview
                  </>
                )}
              </button>

              <a
                href="/resume.pdf"
                download="Sriniketh_Jeevangi_Resume.pdf"
                className="inline-flex items-center justify-center gap-1 sm:gap-2 px-2.5 sm:px-5 py-2 rounded-xl accent-gradient text-white text-xs sm:text-base font-semibold glow-accent hover:opacity-90 transition-all hover:scale-105"
              >
                <Download
                  size={14}
                  className="shrink-0 sm:w-[15px] sm:h-[15px]"
                />{" "}
                Download Resume
              </a>
            </div>
          </div>
          {resumePreview &&
            (isMobile ? (
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-accent-DEFAULT font-medium py-4"
              >
                Open Resume Preview →
              </a>
            ) : (
              <div
                className={`mt-4 rounded-xl overflow-hidden border ${
                  dark ? "border-white/10" : "border-light-border"
                }`}
              >
                <object
                  data="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  type="application/pdf"
                  className="w-full"
                  style={{ height: "70vh" }}
                  aria-label="Resume preview"
                >
                  <div
                    className={`flex flex-col items-center justify-center gap-3 p-12 text-center ${muted}`}
                  >
                    <p className="text-sm">
                      Preview isn't available on this device.
                    </p>
                    <a
                      href="/resume.pdf"
                      download
                      className="text-accent-DEFAULT font-medium text-sm hover:underline"
                    >
                      Download the PDF instead →
                    </a>
                  </div>
                </object>
              </div>
            ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`mt-10 pt-6 border-t ${dark ? "border-white/5" : "border-light-border"} flex flex-col sm:flex-row items-center justify-between gap-3`}
        >
          <p className={`text-xs ${muted}`}>
            © 2026{" "}
            <span className="accent-gradient-text font-medium">
              Sriniketh Jeevangi
            </span>
            . All rights reserved.
          </p>
          <p className={`text-xs font-mono ${muted}`}>
            Built with React · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
