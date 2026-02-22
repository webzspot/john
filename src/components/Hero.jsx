import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

function RollingDigit({ digit }) {
  const [current, setCurrent] = useState(digit);
  const [prev, setPrev] = useState(null);
  const [k, setK] = useState(0);

  useEffect(() => {
    if (digit !== current) {
      setPrev(current);
      setCurrent(digit);
      setK((n) => n + 1);
    }
  }, [digit]); // eslint-disable-line

  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        // overflow: "hidden", 
        width: "0.6em",
        lineHeight: "inherit",
        verticalAlign: "top",
      }}
    >
      {/* outgoing — fly up & blur out */}
      {prev !== null && (
        <motion.span
          key={`o${k}`}
          initial={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          animate={{ y: "-115%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.32, ease: [0.55, 0, 1, 0.45] }}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          {prev}
        </motion.span>
      )}

      {/* incoming — rise from below */}
      <motion.span
        key={`i${k}`}
        initial={prev !== null
          ? { y: "115%", opacity: 0, filter: "blur(6px)" }
          : { y: "0%",   opacity: 1, filter: "blur(0px)" }}
        animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
        transition={prev !== null
          ? { duration: 0.42, ease: [0, 0.55, 0.45, 1] }
          : {}}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {current}
      </motion.span>
    </span>
  );
}

/* ─────────────────────────────────────────────
   Two-digit rolling display
───────────────────────────────────────────── */
function RollingNumber({ value }) {
  const str = String(value).padStart(2, "0");
  return (
    <span style={{ display: "inline-flex", letterSpacing: 0 }}>
      {str.split("").map((d, i) => (
        <RollingDigit key={i} digit={d} />
      ))}
    </span>
  );
}

/* ─────────────────────────────────────────────
   Step counter — one integer tick per `stepMs`
   UPDATED: Same timing for both counters now
───────────────────────────────────────────── */
function useStepCount(target, from = 0, stepMs = 525) { // Using same step duration for both
  const [count, setCount] = useState(from);
  const timer = useRef(null);

  useEffect(() => {
    setCount(from);
    let cur = from;

    const tick = () => {
      cur += 1;
      setCount(cur);
      if (cur < target) timer.current = setTimeout(tick, stepMs);
    };

    timer.current = setTimeout(tick, 750); // start after first paint
    return () => clearTimeout(timer.current);
  }, [target, from, stepMs]);

  return count;
}

/* ─────────────────────────────────────────────
   Badge wrapper — floating dark pill
   NO overflow:hidden here — the digit handles it
   Optimized padding for both "10" and "03" displays
───────────────────────────────────────────── */
function Badge({ children, floatAnim, value }) {
  // Optimized padding values for different digit counts
  const leftPadding = String(value).length === 1 
    ? "0.5em 0.9em 0em 0.9em"   // Single digit: less horizontal padding
    : "0.06em 1.7em 0.06em 0.8em";  // Double digit: balanced for both digits
  return (
    <motion.div
      animate={floatAnim.animate}
      transition={floatAnim.transition}
      style={{
        display: "inline-flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #2d2d2d, #0c0c0c)",
        borderRadius: "clamp(12px, 3vw, 40px)",
        padding: leftPadding,
        boxShadow:
          "24px 24px 34px -4px rgba(0,0,0,.09)," +
          "11px 11px 15px -4px rgba(0,0,0,.32)," +
          "5px  5px  8px  -3px rgba(0,0,0,.41)," +
          "3px  3px  4px  -2px rgba(0,0,0,.46)," +
          "1px  1px  2px  -1px rgba(0,0,0,.5)",
        flexShrink: 0,
        overflow: "hidden"
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main Hero
   UPDATED: Both counters now use the same timing (525ms)
───────────────────────────────────────────── */
export default function Hero() {
  // Both counters now use the same step duration (525ms)
  const count10 = useStepCount(10, 7, 525);
  const count3  = useStepCount(3,  0, 525);
  const avatarIds = [1, 2, 3, 4, 5];

  // Shared text style (applied via inline style so it's 100% consistent)
  const textBase = {
    fontFamily: "'Poppins', sans-serif",
    fontSize:   "clamp(2.2rem, 6.4vw, 100px)",
    lineHeight: 1.28,
    letterSpacing: "clamp(-1px, -0.25vw, -4px)",
    whiteSpace: "nowrap",
  };

  const float1 = {
    animate:    { y: [0, -9, 0], rotate: [-2, -0.8, -2] },
    transition: { duration: 3.6, repeat: Infinity, ease: "easeInOut" },
  };
  const float2 = {
    animate:    { y: [6, -3, 6], rotate: [1, 2.2, 1] },
    transition: { duration: 4.1, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <section
    className="md:min-h-screen"
      style={{
        background: "#D9D9D9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 24px 60px",
        boxSizing: "border-box",
      }}
    >
      {/* ── Hello! ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
        <div style={{ height: 3.5, width: 64, background: "linear-gradient(to left, rgba(0,0,0,.22), transparent)" }} />
        <span
          style={{
            fontFamily: "'Instrument Serif', serif",
            color: "rgba(0,0,0,.5)",
            fontSize: "clamp(26px, 4vw, 55px)",
            fontStyle: "italic",
            letterSpacing: "0.01em",
            lineHeight: 1,
          }}
        >
          Hello!
        </span>
        <div style={{ height: 3.5, width: 64, background: "linear-gradient(to right, rgba(0,0,0,.22), transparent)" }} />
      </div>

      {/* ── Headline block ── */}
      <div style={{ maxWidth: 1100, width: "100%" }}>

        {/* Row 1 — "I Scaled to [10] Crore" */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(6px, 1vw, 14px)",
            rowGap: 6,
          }}
        >
          <span style={{ ...textBase, fontWeight: 800, color: "#000", letterSpacing: "-0.05em" }}>
            I Scaled to
          </span>

          <Badge floatAnim={float1} value={count10}>
            <span style={{ ...textBase, fontWeight: 800, color: "#E3E3E3", fontStyle: "italic" }}>
              <RollingNumber value={count10} />
            </span>
          </Badge>

          <span style={{ ...textBase, fontWeight: 500, color: "rgba(0,0,0,.5)",letterSpacing: "-0.05em" }}>
            Crore
          </span>
        </div>

        {/* Row 2 — "in [03] years." */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(6px, 1vw, 14px)",
            rowGap: 6,
          }}
        >
          <span style={{ ...textBase, fontWeight: 500, color: "rgba(0,0,0,.5)",letterSpacing: "-0.05em" }}>
            in
          </span>

          <Badge floatAnim={float2} value={count3}>
            <span style={{ ...textBase, fontWeight: 800, color: "#E3E3E3", fontStyle: "italic" }}>
              <RollingNumber value={count3} />
            </span>
          </Badge>

          <span style={{ ...textBase, fontWeight: 800, color: "#000", letterSpacing: "-0.04em"  }}>
            years.
          </span>
        </div>
      </div>

      {/* ── Subtitle ── */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(17px, 2vw, 26px)",
          color: "rgba(0,0,0,.4)",
          maxWidth: 640,
          lineHeight: 1.65,
          margin: "32px auto 28px",
          padding: "0 8px",
          letterSpacing: "-0.03em"
        }}
      >
        Learn how to position your course as the only choice and scale your education business.
      </p>

      {/* ── CTA row ── */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 22,
        }}
      >
        {/* Enroll Now button */}
        <div
          style={{
            background: "linear-gradient(135deg, #fff, #d9d3d3)",
            borderRadius: 999,
            padding: 8,
            boxShadow: "0 2px 20px rgba(0,0,0,.1), inset 0 0 0 1px rgba(255,255,255,.6)",
            transition: "transform .3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <button
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: 18,
              color: "rgba(255,255,255,.6)",
              background: "linear-gradient(180deg, #2c2c2c, #111)",
              border: "none",
              borderRadius: 999,
              padding: "13px 28px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 10,
              whiteSpace: "nowrap",
              boxShadow:
                "inset 0 -16px 48px #000," +
                "0 24px 75px rgba(0,0,0,.18)",
              outline: "none",
            }}
          >
            Enroll Now <span style={{ fontSize: 17 }}>→</span>
          </button>
        </div>

        {/* Avatars */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ display: "flex" }}>
            {avatarIds.map((id, i) => (
              <img
                key={id}
                src={`https://i.pravatar.cc/40?img=${id}`}
                alt=""
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "1.5px solid #fff",
                  objectFit: "cover",
                  marginLeft: i === 0 ? 0 : -10,
                  boxShadow: "0 1px 4px rgba(0,0,0,.12)",
                }}
              />
            ))}
          </div>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: "rgba(0,0,0,.4)",
            }}
          >
            Trusted by Leaders
          </span>
        </div>
      </div>
    </section>
  );
}