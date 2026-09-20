import React from "react";
import {
  Wind, Leaf, Database, Cloud, KeyRound, Atom, Terminal, Coffee,
  Network, Boxes, Cpu, GitMerge, Workflow, Lock, Braces, FileJson,
  BarChart2, Table2, FlaskConical, TrendingUp, ServerCog, Settings2,
  GitFork, TerminalSquare, Zap, Flame,
} from "lucide-react";

// ─── Brand Icons ─────────────────────────────────────────────────────────────

export const JSIcon = () => (
  <div className="w-4 h-4 bg-[#f7df1e] rounded-[3px] flex items-end justify-end p-[1px] shrink-0">
    <span className="text-black text-[8px] font-bold leading-none tracking-tighter">JS</span>
  </div>
);

export const TSIcon = () => (
  <div className="w-4 h-4 bg-[#3178c6] rounded-[3px] flex items-end justify-end p-[1px] shrink-0">
    <span className="text-white text-[8px] font-bold leading-none tracking-tighter">TS</span>
  </div>
);

export const NextIcon = () => (
  <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center shrink-0">
    <span className="text-white text-[10px] font-bold leading-none">N</span>
  </div>
);

export const ExpressIcon = () => (
  <div className="w-4 h-4 rounded-full border border-gray-500 flex items-center justify-center shrink-0">
    <span className="text-gray-300 text-[8px] font-serif italic leading-none">ex</span>
  </div>
);

export const HtmlIcon = () => (
  <div className="w-4 h-4 shrink-0 flex items-center justify-center">
    <svg viewBox="0 0 384 512" className="w-3.5 h-3.5 text-[#e34f26] fill-current">
      <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
    </svg>
  </div>
);

export const CssIcon = () => (
  <div className="w-4 h-4 shrink-0 flex items-center justify-center">
    <svg viewBox="0 0 384 512" className="w-3.5 h-3.5 text-[#264de4] fill-current">
      <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
    </svg>
  </div>
);

export const CIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 100 100"
    className="shrink-0"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="48" fill="#186ecf" />
    <path
      d="M72 31.5C66.5 25.5 59 22.5 50 22.5C33.5 22.5 21 33.5 21 50C21 66.5 33.5 77.5 50 77.5C59 77.5 66.5 74.5 72 68.5L62.5 59.5C59.5 63 55.5 65 50 65C41.5 65 36 59 36 50C36 41 41.5 35 50 35C55.5 35 59.5 37 62.5 40.5L72 31.5Z"
      fill="white"
    />
  </svg>
);

export const RIcon = () => (
  <div className="w-4 h-4 flex items-center justify-center shrink-0">
    <span className="text-[#276DC3] text-[13px] font-bold font-mono">R</span>
  </div>
);

export const PostgreSQLIcon = () => (
  <div className="w-4 h-4 flex items-center justify-center shrink-0">
    <span className="text-[#336791] text-[10px] font-bold font-mono">PG</span>
  </div>
);

export const RegressionIcon = () => (
  <TrendingUp size={16} className="text-orange-400 shrink-0" />
);

export const ClassificationIcon = () => (
  <BarChart2 size={16} className="text-purple-400 shrink-0" />
);

export const LLMsIcon = () => (
  <Cpu size={16} className="text-pink-400 shrink-0" />
);
export const GenAIIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    className="shrink-0"
  >
    <path
      d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"
      fill="#EC4899"
    />
  </svg>
);


export const TensorFlowIcon = () => (
  <div className="w-4 h-4 flex items-center justify-center shrink-0">
    <span className="text-[#FF6F00] text-[13px] font-bold">TF</span>
  </div>
);



export const ReactIcon   = () => <Atom   size={16} className="text-[#61dafb] shrink-0" />;
export const PythonIcon  = () => <Terminal size={16} className="text-[#f7c83c] shrink-0" />;
export const JavaIcon    = () => <Coffee  size={16} className="text-[#f0931c] shrink-0" />;
export const TailwindIcon = () => <Wind   size={16} className="text-[#38bdf8] shrink-0" />;
export const MongoIcon   = () => <Leaf    size={16} className="text-[#47a248] shrink-0" />;
export const SqlIcon     = () => <Database size={16} className="text-[#336791] shrink-0" />;
export const SqlDAIcon = () => (<Database size={16} className="text-orange-400 shrink-0" />);
export const AWSIcon     = () => <Cloud   size={16} className="text-[#FF9900] shrink-0" />;
export const JWTIcon     = () => <KeyRound size={16} className="text-[#D63AFF] shrink-0" />;

export const NodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 256 288" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path fill="#68A063" d="M127.9 0 0 72v144l127.9 72L256 216V72L127.9 0Z" />
    <path fill="#fff" fillOpacity=".15" d="m127.9 34.8-97.2 54.7v109.4l97.2 54.7 97.2-54.7V89.5l-97.2-54.7Zm0 22.5 77.7 43.7v87.2l-77.7 43.7-77.7-43.7V101l77.7-43.7Z" />
  </svg>
);

export const DockerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M20.8 10.2c-.5-.4-1.2-.6-2-.5-.2-1.1-.7-2-1.6-2.7l-.4-.3-.3.4c-.4.5-.5 1.2-.5 1.8 0 .5.2 1 .5 1.4-.4.2-.8.3-1.2.3H3.1c-.3 0-.5.2-.5.5 0 .1-.1 1.7.7 3.3.4.8 1 1.5 1.7 2 1 .7 2.2 1.1 3.7 1.1 3.9 0 7.1-1.8 9-5 .8.1 2.4.1 3.2-1.3l.2-.4-.3-.3ZM6 10.1h2.1V8H6v2.1Zm2.6 0h2.1V8H8.6v2.1Zm2.6 0h2.1V8h-2.1v2.1ZM6 7.5h2.1V5.4H6v2.1Zm2.6 0h2.1V5.4H8.6v2.1Zm2.6 0h2.1V5.4h-2.1v2.1ZM8.6 4.9h2.1V2.8H8.6v2.1Z" fill="#2496ED" />
  </svg>
);

export const SupabaseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M13.5 2.5L3.8 14.2C3.25 14.85 3.71 15.85 4.56 15.85H11.2L10.5 21.5C10.39 22.39 11.5 22.84 12.03 22.12L21.2 9.65C21.69 8.98 21.21 8.05 20.38 8.05H14.05L15.1 3.1C15.29 2.2 14.08 1.81 13.5 2.5Z" fill="#3ECF8E" />
  </svg>
);

export const RestIcon = () => (
  <div className="border border-purple-500/50 rounded px-1 shrink-0">
    <span className="text-purple-400 text-[8px] font-bold">REST</span>
  </div>
);

export const GraphQLIcon = () => (
  <div className="w-4 h-4 shrink-0 flex items-center justify-center">
    <svg viewBox="0 0 400 400" className="w-3.5 h-3.5 fill-[#E10098]">
      <path d="M57.5 154.4v91.2L20 224V176l37.5-21.6zm285 0L380 176v48l-37.5 21.6v-91.2zM200 45.8l37.5 21.6-37.5 21.6-37.5-21.6L200 45.8zm0 265l37.5-21.6v43.2L200 354.2l-37.5-21.6v-43.2L200 310.8zm0-220l37.5 21.6v43.2L200 177.4l-37.5-21.6v-43.2L200 90.8zm0 138.4l37.5 21.6v43.2L200 315.8l-37.5-21.6v-43.2L200 229.2zM93 132.8l37.5 21.6v43.2L93 219.2 55.5 197.6v-43.2L93 132.8zm214 0L344.5 154.4v43.2L307 219.2l-37.5-21.6v-43.2L307 132.8zm-214 134.4 37.5 21.6v43.2L93 353.6 55.5 332v-43.2L93 267.2zm214 0 37.5 21.6V332l-37.5 21.6-37.5-21.6v-43.2l37.5-21.6z"/>
    </svg>
  </div>
);

export const ReduxIcon = () => (
  <div className="w-4 h-4 shrink-0 flex items-center justify-center">
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#764ABC]">
      <path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 0 0-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 0 1-.27-1.334C1.868 13.633.436 15.751.045 18.061c-.54 3.086.556 5.529 3.012 6.968 1.318.755 2.861 1.126 4.554 1.126.706 0 1.424-.075 2.127-.24 3.938-.808 6.934-3.131 8.896-6.411zM21.496 15.36c-2.324-2.713-5.738-4.212-9.631-4.212h-.496c-.27-.555-.855-.93-1.499-.93h-.045c-.945 0-1.695.78-1.65 1.724.045.899.796 1.648 1.71 1.648h.06c.67 0 1.23-.375 1.499-.9h.54c2.309 0 4.495.661 6.488 1.964 1.53 1.004 2.624 2.308 3.236 3.897.538 1.379.509 2.713-.045 3.897-.855 1.798-2.294 2.774-4.194 2.774-1.23 0-2.399-.375-3.024-.645-.36.3-.96.765-1.394 1.049 1.334.6 2.698.93 4.002.93 2.984 0 5.184-1.649 6.023-3.282.9-1.784.855-4.842-1.58-7.014zM6.49 17.042c.044.9.795 1.648 1.708 1.648h.06c.93 0 1.695-.794 1.65-1.723-.045-.9-.796-1.648-1.71-1.648h-.059c-.045 0-.12 0-.165.014-1.018-1.694-1.453-3.536-1.288-5.529.12-1.499.599-2.803 1.408-3.882.675-.93 1.98-1.394 2.864-1.424 2.473-.045 3.521 3.042 3.596 4.271l1.319.404C15.348 5.98 13.034 3 10.266 3c-3.897.015-5.755 3.372-6.338 6.383-.72 3.671.375 7.168 2.563 9.659z"/>
    </svg>
  </div>
);

export const NLPIcon = () => (
  <div className="w-4 h-4 flex items-center justify-center shrink-0">
    <span className="text-pink-400 text-[11px] font-bold font-mono">NLP</span>
  </div>
);
export const ScikitLearnIcon = () => (
  <img
    src="https://raw.githubusercontent.com/scikit-learn/scikit-learn/main/doc/logos/scikit-learn-logo-notext.png"
    alt="scikit-learn"
    className="w-6 h-6 object-contain shrink-0"
  />
);

export const PyTorchIcon = () => (
  <img
    src="https://raw.githubusercontent.com/pytorch-fdn/artwork/main/projects/PyTorch/icon/PyTorchLogo_Icon_fullColor_RGB.png"
    alt="PyTorch"
    className="w-5 h-5 object-contain shrink-0"
  />
);

export const WebSocketIcon = () => <Zap size={16} className="text-yellow-400 shrink-0" />;
export const LinuxIcon     = () => <TerminalSquare size={16} className="text-black-300 shrink-0" />;
export const GitIcon       = () => <GitMerge size={16} className="text-[#f14e32] shrink-0" />;
export const GitHubIcon    = () => <GitFork size={16} className="text-black-300 shrink-0" />;
export const CICDIcon      = () => <Workflow size={16} className="text-blue-400 shrink-0" />;
export const DSIcon        = () => <Network size={16} className="text-blue-400 shrink-0" />;
export const DBMSIcon      = () => <Database size={16} className="text-blue-400 shrink-0" />;
export const OOPIcon       = () => <Braces size={16} className="text-blue-400 shrink-0" />;
export const SDLCIcon      = () => <FileJson size={16} className="text-blue-400 shrink-0" />;
export const LockIcon      = () => <Lock size={16} className="text-rose-400 shrink-0" />;
export const MLIcon        = () => <Network size={16} className="text-pink-400 shrink-0" />;
export const DLIcon        = () => <Boxes size={16} className="text-pink-400 shrink-0" />;
export const LLMIcon       = () => <Cpu size={16} className="text-pink-400 shrink-0" />;
export const RAGIcon       = () => <ServerCog size={16} className="text-pink-400 shrink-0" />;
export const SpeechIcon    = () => <Settings2 size={16} className="text-pink-400 shrink-0" />;
export const ExcelIcon     = () => <Table2 size={16} className="text-green-500 shrink-0" />;
export const PowerBIIcon   = () => <BarChart2 size={16} className="text-yellow-500 shrink-0" />;
export const EDAIcon       = () => <FlaskConical size={16} className="text-orange-400 shrink-0" />;
export const StatsIcon     = () => <TrendingUp size={16} className="text-orange-400 shrink-0" />;
export const OSIcon        = () => <TerminalSquare size={16} className="text-cyan-400 shrink-0" />;
export const AgileIcon     = () => <Workflow size={16} className="text-blue-400 shrink-0" />;

// ─── Skill Icon Map ────────────────────────────────────────────────────────────
export const skillIconMap: Record<string, React.ReactElement> = {
  java:      <JavaIcon />,
  python:    <PythonIcon />,
  js:        <JSIcon />,
  ts:        <TSIcon />,
  c:         <CIcon />,
  r:         <RIcon />,
  node:      <NodeIcon />,
  express:   <ExpressIcon />,
  sql:       <SqlIcon />,
  sqlda:       <SqlDAIcon />,
  mongo:     <MongoIcon />,
  supabase:  <SupabaseIcon />,
  rest:      <RestIcon />,
  graphql:   <GraphQLIcon />,
  websocket: <WebSocketIcon />,
  react:     <ReactIcon />,
  next:      <NextIcon />,
  redux:     <ReduxIcon />,
  html:      <HtmlIcon />,
  css:       <CssIcon />,
  tailwind:  <TailwindIcon />,
  ml:        <MLIcon />,
  dl:        <DLIcon />,
  llm:       <LLMIcon />,
  rag:       <RAGIcon />,
  speech:    <SpeechIcon />,
  linux:     <LinuxIcon />,
  aws:       <AWSIcon />,
  docker:    <DockerIcon />,
  cicd:      <CICDIcon />,
  git:       <GitIcon />,
  github:    <GitHubIcon />,
  ds:        <DSIcon />,
  dbms:      <DBMSIcon />,
  oop:       <OOPIcon />,
  os:        <OSIcon />,
  sdlc:      <SDLCIcon />,
  agile:     <AgileIcon />,
  excel:     <ExcelIcon />,
  powerbi:   <PowerBIIcon />,
  eda:       <EDAIcon />,
  feature:   <EDAIcon />,
  stats:     <StatsIcon />,
  postgresql:   <PostgreSQLIcon />,
  regression:   <RegressionIcon />,
  classification: <ClassificationIcon />,
  llms:         <LLMsIcon />,
  genai:       <GenAIIcon />,
  pytorch:     <PyTorchIcon />,
  tensorflow:  <TensorFlowIcon />,
  scikit:      <ScikitLearnIcon />,
  nlp: <NLPIcon/>
};

// ─── Stack Icons Map (for Experience tech-stack chips) ────────────────────────
export const stackIconsMap: Record<string, React.ReactElement> = {
  "React.js":     <ReactIcon />,
  "Node.js":      <NodeIcon />,
  "Express.js":   <ExpressIcon />,
  "Next.js":      <NextIcon />,
  "MongoDB":      <MongoIcon />,
  "TypeScript":   <TSIcon />,
  "JavaScript":   <JSIcon />,
  "AWS":          <AWSIcon />,
  "Docker":       <DockerIcon />,
  "JWT":          <JWTIcon />,
  "SQL":          <SqlIcon />,
  "SQLDA":          <SqlDAIcon />,
  "Supabase":     <SupabaseIcon />,
  "REST APIs":    <RestIcon />,
  "GraphQL":      <GraphQLIcon />,
  "Tailwind CSS": <TailwindIcon />,
  "Python":       <PythonIcon />,
  "Java":         <JavaIcon />,
  "HTML":         <HtmlIcon />,
  "CSS":          <CssIcon />,
  "Git":          <GitIcon />,
  "CI/CD":        <CICDIcon />,
  "Socket.io":    <WebSocketIcon />,
  "Gemini AI":    <LLMIcon />,
  "Cloudinary":   <Cloud size={16} className="text-blue-400 shrink-0" />,
  "Chart.js":     <BarChart2 size={16} className="text-pink-400 shrink-0" />,
  "React":        <ReactIcon />,
  "C":              <CIcon />,
  "R Programming":  <RIcon />,
  "PostgreSQL":      <PostgreSQLIcon />,
  "Regression":      <RegressionIcon />,
  "Classification":  <ClassificationIcon />,
  "LLMs":            <LLMsIcon />,
  "GenAI":    <GenAIIcon />,
  "Pytorch":     <PyTorchIcon />,
  "Tensorflow":  <TensorFlowIcon />,
  "Scikit":      <ScikitLearnIcon />,
  "NLP": <NLPIcon/>
};
