import { useState, useEffect, useRef } from "react";

const tabs = [
  {
    label: "Course Creators",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M15 10l4.553-2.277A1 1 0 0121 8.764v6.472a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
    title: "Course Creators",
    description:
      "For creators who have knowledge but struggle with positioning, consistent enrollments, and converting attention into revenue. Learn how to structure offers, build trust, and become the obvious choice in your niche.",
  },
  {
    label: "EdTech Founders",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    title: "EdTech Founders",
    description:
      "For founders building scalable education platforms who need a clear go-to-market strategy, repeatable acquisition systems, and the frameworks to grow a team without losing product quality.",
  },
  {
    label: "Education Institutes",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    title: "Education Institutes",
    description:
      "For established institutes looking to modernize their delivery, expand online reach, and build recurring revenue streams. Get the systems and strategy to future-proof your institution in a digital-first world.",
  },
];

const CARD_DURATION = 600; // ms for enter animation

export default function WhoIsThisFor() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);
  const animationTimeout = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      if (isAnimating) return; // Don't trigger during animation
      
      const rect = section.getBoundingClientRect();
      const totalHeight = section.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / totalHeight);
      const newIndex = Math.min(
        tabs.length - 1,
        Math.floor(progress * tabs.length)
      );

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex, isAnimating]);

  const handleTabClick = (i) => {
    if (i === activeIndex || isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex(i);
    
    // Clear any existing timeout
    if (animationTimeout.current) {
      clearTimeout(animationTimeout.current);
    }
    
    // Set timeout to clear animation state
    animationTimeout.current = setTimeout(() => {
      setIsAnimating(false);
    }, CARD_DURATION);
    
    // Scroll to approximate position
    const section = sectionRef.current;
    if (!section) return;
    const totalHeight = section.offsetHeight - window.innerHeight;
    const targetScroll =
      section.offsetTop + (i / tabs.length) * totalHeight + 10;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  const card = tabs[activeIndex];

  return (
    <>
      <style>{`
        @keyframes cardEnter {
          0% {
            transform: translateY(120px) scale(0.92);
            opacity: 0;
          }
          40% {
            transform: translateY(-8px) scale(1.01);
            opacity: 1;
          }
          60% {
            transform: translateY(3px) scale(0.995);
          }
          75% {
            transform: translateY(-2px) scale(1.002);
          }
          85% {
            transform: translateY(1px) scale(0.998);
          }
          95% {
            transform: translateY(0px) scale(1);
          }
          100% {
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }

        @keyframes iconPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }

        .card-enter {
          animation: cardEnter ${CARD_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        .icon-pulse {
          animation: iconPulse 0.5s ease-in-out;
        }

        .tab-btn {
          position: relative;
          padding-bottom: 8px;
          cursor: pointer;
          background: none;
          border: none;
          font-size: 15px;
          letter-spacing: 0.01em;
          transition: color 0.25s;
          white-space: nowrap;
        }
        
        .tab-btn::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #d4a800;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .tab-btn.active::after {
          transform: scaleX(1);
        }

        .sticky-inner {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
      `}</style>

      {/* Outer scroll container — tall enough for 3 cards */}
      <div
        ref={sectionRef}
        style={{
          height: `${tabs.length * 100}vh`,
          background: "linear-gradient(135deg, #0a0a0a 0%, #111 50%, #0d0d0d 100%)",
        }}
      >
        <div className="sticky-inner">
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 48px",
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            {/* LEFT PANEL */}
            <div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  marginBottom: 20,
                  margin: "0 0 20px 0",
                }}
              >
                Who Is This For?
              </h2>
              <p
                style={{
                  color: "#888",
                  fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
                  lineHeight: 1.65,
                  letterSpacing: "0.01em",
                  margin: "0 0 56px 0",
                  maxWidth: 380,
                }}
              >
                The Only Choice Framework that turns your expertise into a
                predictable, scalable education business.
              </p>

              {/* Tabs */}
              <div
                style={{
                  display: "flex",
                  gap: 28,
                  borderBottom: "1px solid #2a2a2a",
                  paddingBottom: 0,
                  flexWrap: "wrap",
                }}
              >
                {tabs.map((tab, i) => (
                  <button
                    key={i}
                    className={`tab-btn ${activeIndex === i ? "active" : ""}`}
                    style={{
                      color: activeIndex === i ? "#d4a800" : "#555",
                    }}
                    onClick={() => handleTabClick(i)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT PANEL — animated card */}
            <div style={{ position: "relative", height: 420 }}>
              <div
                key={activeIndex}
                className={isAnimating ? "card-enter" : ""}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#fff",
                  borderRadius: 28,
                  padding: "40px 40px",
                  boxShadow:
                    "0 2px 0 0 rgba(255,255,255,0.08), 0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.9)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: 24,
                  transition: "all 0.3s ease",
                }}
              >
                {/* Icon */}
                <div
                  className={isAnimating ? "icon-pulse" : ""}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 16,
                    background: "linear-gradient(145deg, #1a1a1a, #000)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                    fontWeight: 800,
                    color: "#0a0a0a",
                    letterSpacing: "-0.025em",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: "#333",
                    fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
                    lineHeight: 1.75,
                    letterSpacing: "0.005em",
                    margin: 0,
                  }}
                >
                  {card.description}
                </p>

                {/* Progress dots */}
                <div
                  style={{
                    display: "flex",
                    gap: 6,
                    marginTop: "auto",
                    paddingTop: 8,
                  }}
                >
                  {tabs.map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: i === activeIndex ? 20 : 6,
                        height: 6,
                        borderRadius: 99,
                        background: i === activeIndex ? "#0a0a0a" : "#ddd",
                        transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}