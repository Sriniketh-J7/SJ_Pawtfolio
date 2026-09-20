import { useRef, useState, useCallback, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxTilt?: number;
  glow?: boolean;
}

export default function TiltCard({
  children,
  className = "",
  style,
  maxTilt = 6,
  glow = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      setTilt({
        x: ((y - cy) / cy) * -maxTilt,
        y: ((x - cx) / cx) * maxTilt,
      });
      setMousePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
    },
    [maxTilt]
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`tilt-card relative ${className}`}
      style={{
        ...style,
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${
          isHovered ? 1.015 : 1
        })`,
        transition: isHovered
          ? "transform 0.1s ease, box-shadow 0.3s ease"
          : "transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s ease",
        boxShadow: isHovered
          ? "0 20px 60px rgba(91,140,255,0.18), 0 0 0 1px rgba(91,140,255,0.15)"
          : undefined,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {glow && (
        <div
          className="tilt-glow"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(91,140,255,0.14) 0%, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}
      {children}
    </div>
  );
}
