"use client";

import Image from "next/image";
import Animate from "./Animate";

const steps = [
  {
    num: "1",
    title: "Set a strategy",
    description:
      "We survey your AI baseline, defining company-wide proficiency and use cases.",
    bgLight: "#fce4ec",
    bgDark: "#310f1f",
    img: "/images/process/strategy.png",
    imgW: 188,
    imgH: 188,
    imgTop: 0,
  },
  {
    num: "2",
    title: "Build workflows",
    description:
      "We build you tools and workflows that automate your business.",
    bgLight: "#fff3e0",
    bgDark: "#3d1d11",
    img: "/images/process/workflows.png",
    imgW: 145,
    imgH: 145,
    imgTop: 5,
  },
  {
    num: "3",
    title: "Train teams",
    description:
      "We train your team and help you build an AI-powered workforce.",
    bgLight: "#e0f2f1",
    bgDark: "#102325",
    img: "/images/process/train.png",
    imgW: 120,
    imgH: 153,
    imgTop: -11,
  },
  {
    num: "4",
    title: "Support",
    description: "We stick around as your chief AI officer.",
    bgLight: "#e8f5e9",
    bgDark: "#192e23",
    img: "/images/process/support.png",
    imgW: 254,
    imgH: 254,
    imgTop: -40,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      style={{
        background: "var(--pastel-green)",
        minHeight: "100vh",
        padding: "80px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1140, display: "flex", flexDirection: "column", gap: 24 }}>
        <Animate type="fadeUp">
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16, alignItems: "center", textAlign: "center" }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                lineHeight: 1.17,
                color: "var(--text-primary)",
              }}
            >
              <span
                className="process-10x"
                style={{
                  fontFamily: "'Inria Serif', serif",
                  fontStyle: "italic",
                }}
              >
                10x
              </span>{" "}
              Speed To Production. By Design.
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
                lineHeight: 1.7,
                maxWidth: 640,
              }}
            >
              We use an outcome-driven delivery model where AI-native engineers and internal agent systems work in parallel, compressing the path from problem definition to a running production system.
            </p>
          </div>
        </Animate>

        <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
          {steps.map((step, i) => (
            <Animate key={i} type="fadeUp" delay={0.1 * i}>
              <div
                className="process-card"
                style={{
                  height: 340,
                  padding: "24px 20px",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  overflow: "hidden",
                  ["--bg-light" as string]: step.bgLight,
                  ["--bg-dark" as string]: step.bgDark,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span
                    className="process-num"
                    style={{
                      alignSelf: "flex-start",
                      padding: "4px 8px",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      lineHeight: 1,
                    }}
                  >
                    {step.num}
                  </span>
                  <p
                    className="process-title"
                    style={{
                      fontSize: "clamp(1rem, 1.2vw, 1.125rem)",
                      fontFamily: "'Inria Serif', serif",
                      lineHeight: 1.55,
                    }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="process-desc"
                    style={{
                      fontSize: "clamp(0.82rem, 1vw, 0.875rem)",
                      lineHeight: 1.55,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
                <div
                  style={{
                    flex: 1,
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={step.img}
                    alt={step.title}
                    width={step.imgW}
                    height={step.imgH}
                    style={{
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: step.imgTop,
                      objectFit: "contain",
                      width: step.imgW,
                      height: step.imgH,
                    }}
                  />
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </div>

      <style>{`
        .process-10x { color: var(--accent-highlight); }

        .process-card {
          background: var(--bg-light);
          color: var(--text-primary);
        }
        .process-num {
          border: 1px solid rgba(0,0,0,0.1);
          color: var(--text-primary);
        }
        .process-title {
          color: var(--text-primary);
        }
        .process-desc {
          color: var(--text-secondary);
        }

        [data-theme="dark"] .process-card {
          background: var(--bg-dark);
          color: #ffffff;
        }
        [data-theme="dark"] .process-num {
          border: 1px solid rgba(255,255,255,0.1);
          color: #ffffff;
        }
        [data-theme="dark"] .process-title {
          color: #ffffff;
        }
        [data-theme="dark"] .process-desc {
          color: #cbcbcb;
        }

        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
