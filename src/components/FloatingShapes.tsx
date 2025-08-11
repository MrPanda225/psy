// src/components/FloatingShapes.tsx
import React from "react";

/** Petites formes décoratives flottantes autour de la page */

type ShapeType = "circle" | "square" | "diamond";
type Shape = {
  type: ShapeType;
  // position (toutes optionnelles)
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  // animation / style
  size: number;
  color: string;
  dx: number;
  dy: number;
  rot: number;
  dur: number;
  delay: number;
};

export default function FloatingShapes() {
  const S = (n: number) => `${n}px`;
  const D = (s: number) => `${s}s`;

  const shapes: readonly Shape[] = [
    // haut-gauche
    { type: "circle", top: "18px", left: "14px", size: 14, color: "#FFA114", dx: 8, dy: -12, rot: 0, dur: 6, delay: 0.2 },
    // haut-droit
    { type: "circle", top: "26px", right: "18px", size: 10, color: "#00B47E", dx: -10, dy: 8, rot: 0, dur: 7, delay: 0.6 },
    { type: "diamond", top: "42px", right: "54px", size: 16, color: "#FFB11A", dx: -14, dy: -6, rot: 22, dur: 9, delay: 0.1 },

    // bas-gauche
    { type: "circle", bottom: "120px", left: "34px", size: 9, color: "#00B47E", dx: 10, dy: -10, rot: 0, dur: 7.5, delay: 0.3 },
    { type: "diamond", bottom: "108px", left: "86px", size: 14, color: "#3D7BFF", dx: 12, dy: 6, rot: -18, dur: 8.5, delay: 0.4 },

    // bas-droit
    { type: "square", bottom: "90px", right: "24px", size: 12, color: "#FF5A5F", dx: -10, dy: -12, rot: 12, dur: 8, delay: 0.2 },
    { type: "diamond", bottom: "60px", right: "70px", size: 12, color: "#FFB11A", dx: -8, dy: 10, rot: 24, dur: 9.5, delay: 0.5 },
  ] as const;

  return (
    <div className="floating-shapes" aria-hidden="true">
      {shapes.map((s, i) => {
        const style: React.CSSProperties & Record<string, string> = {
          ...(s.top && { top: s.top }),
          ...(s.bottom && { bottom: s.bottom }),
          ...(s.left && { left: s.left }),
          ...(s.right && { right: s.right }),
          ["--size" as any]: S(s.size),
          ["--dur" as any]: D(s.dur),
          ["--dx" as any]: S(s.dx),
          ["--dy" as any]: S(s.dy),
          ["--rot" as any]: `${s.rot}deg`,
          ["--delay" as any]: `${s.delay}s`,
          backgroundColor: s.color,
        };

        return <span key={i} className={`shape ${s.type}`} style={style} />;
      })}
    </div>
  );
}
