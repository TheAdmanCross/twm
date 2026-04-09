import { useEffect, useState } from "react";

const base = import.meta.env.BASE_URL;
const logoSrc = `${base === "/" ? "" : base.replace(/\/$/, "")}/assets/images/matt-logo.png`;

const rings = [
  { size: 520, top: "2%", left: "36%", delay: "0s" },
  { size: 320, top: "50%", left: "2%", delay: "1.2s" },
  { size: 220, top: "62%", left: "72%", delay: "2.1s" }
];

export default function ScenePortal() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 8;
      const y = (event.clientY / window.innerHeight - 0.5) * -8;
      setTilt({ x, y });
    };

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div className="scene-portal">
      <div className="scene-glow scene-glow-left" />
      <div className="scene-glow scene-glow-right" />

      <div
        className="scene-core"
        style={{
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
        }}
      >
        <div className="scene-logo-stage">
          <img className="scene-logo" src={logoSrc} alt="Trading With Matt logo" />
        </div>

        <div className="scene-panel scene-panel-main">
          <span>Market process</span>
          <strong>Clarity before execution. Discipline before action.</strong>
        </div>

        <div className="scene-panel scene-panel-side">
          <span>Private access</span>
          <strong>Signals, mentorship, and live market context.</strong>
        </div>

        <div className="scene-ticker">
          <span>Precision</span>
          <span>Access</span>
          <span>Edge</span>
        </div>
      </div>

      {rings.map((ring) => (
        <span
          key={`${ring.size}-${ring.top}`}
          className="scene-ring"
          style={{
            width: `${ring.size}px`,
            height: `${ring.size}px`,
            top: ring.top,
            left: ring.left,
            animationDelay: ring.delay
          }}
        />
      ))}

      <style>{`
        .scene-portal {
          position: relative;
          width: 100%;
          min-height: 620px;
          border-radius: 40px;
          overflow: hidden;
          background:
            radial-gradient(circle at 18% 20%, rgba(255, 80, 62, 0.18), transparent 18%),
            radial-gradient(circle at 84% 18%, rgba(212, 175, 55, 0.18), transparent 18%),
            linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.015)),
            rgba(15, 5, 7, 0.82);
          border: 1px solid rgba(255, 225, 198, 0.12);
          box-shadow: 0 36px 120px rgba(0, 0, 0, 0.54);
          backdrop-filter: blur(20px);
        }

        .scene-portal::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.05) 48%, transparent 58%),
            linear-gradient(180deg, transparent, rgba(0,0,0,0.24));
          animation: sheen 9s linear infinite;
        }

        .scene-glow {
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 999px;
          filter: blur(70px);
          opacity: 0.4;
        }

        .scene-glow-left {
          left: -80px;
          top: 80px;
          background: rgba(179, 25, 25, 0.22);
        }

        .scene-glow-right {
          right: -60px;
          bottom: 60px;
          background: rgba(212, 175, 55, 0.18);
        }

        .scene-core {
          position: absolute;
          inset: 2% 6% 8%;
          transform-style: preserve-3d;
          transition: transform 180ms ease-out;
        }

        .scene-logo-stage {
          position: absolute;
          top: 0;
          left: 16%;
          width: 350px;
          aspect-ratio: 1;
          display: grid;
          place-items: center;
          border-radius: 36px;
          background:
            radial-gradient(circle at 30% 24%, rgba(255,255,255,0.22), transparent 18%),
            linear-gradient(135deg, rgba(64, 8, 9, 0.94), rgba(18, 6, 7, 0.92));
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow:
            inset 0 1px 6px rgba(255,255,255,0.14),
            0 0 100px rgba(179, 25, 25, 0.18);
          transform: translateZ(90px) rotate(-7deg);
        }

        .scene-logo-stage::before {
          content: "";
          position: absolute;
          inset: 18px;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .scene-logo {
          width: min(84%, 300px);
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 18px 28px rgba(0,0,0,0.35));
        }

        .scene-panel {
          position: absolute;
          display: grid;
          gap: 0.55rem;
          padding: 1.35rem;
          border-radius: 24px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.03)),
            rgba(23, 8, 10, 0.62);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(18px);
        }

        .scene-panel span,
        .scene-ticker span {
          color: rgba(248, 242, 237, 0.68);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 0.72rem;
        }

        .scene-panel strong {
          font-size: 1.12rem;
          line-height: 1.35;
        }

        .scene-panel-main {
          left: 0;
          bottom: 18%;
          width: min(280px, 36%);
          transform: translateZ(70px);
        }

        .scene-panel-side {
          right: 0;
          top: 18%;
          width: min(235px, 31%);
          transform: translateZ(96px);
        }

        .scene-ticker {
          position: absolute;
          right: 4%;
          bottom: 12%;
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          padding: 0.9rem 1rem;
          max-width: min(300px, 46%);
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          transform: translateZ(50px);
        }

        .scene-ring {
          position: absolute;
          display: block;
          border-radius: 999px;
          border: 1px solid rgba(255, 212, 169, 0.12);
          box-shadow: inset 0 0 60px rgba(255,255,255,0.02);
          animation: drift 12s ease-in-out infinite;
        }

        @keyframes drift {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(0, -10px, 0) scale(1.03); }
        }

        @keyframes sheen {
          0% { transform: translateX(-70%); }
          100% { transform: translateX(100%); }
        }

        @media (max-width: 960px) {
          .scene-portal {
            min-height: 520px;
          }

          .scene-core {
            inset: 4% 6% 8%;
          }

          .scene-logo-stage {
            width: 240px;
            left: 14%;
          }

          .scene-panel-main,
          .scene-panel-side {
            width: 200px;
          }
        }

        @media (max-width: 1220px) {
          .scene-logo-stage {
            width: 300px;
            left: 12%;
          }

          .scene-panel-main {
            bottom: 16%;
          }

          .scene-panel-side {
            top: 16%;
          }

          .scene-ticker {
            right: 2%;
            bottom: 10%;
            max-width: 280px;
          }
        }
      `}</style>
    </div>
  );
}
