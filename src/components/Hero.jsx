import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

function useCountUp(target, duration = 1800, range = { min: 0, max: 10 }) {
  const [count, setCount] = useState(range.min);
  const raf = useRef(null);
  
  useEffect(() => {
    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentValue = range.min + (eased * (target - range.min));
      setCount(Math.round(currentValue));
      
      if (progress < 1) {
        raf.current = requestAnimationFrame(tick);
      }
    };
    
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [target, duration, range.min]);
  
  return count;
}

export default function Hero() {
  const count10 = useCountUp(10, 1800, { min: 7, max: 10 });
  const count3 = useCountUp(3, 1800, { min: 0, max: 3 });
  const avatarIds = [1, 2, 3, 4, 5];

  return (
    <section className="bg-[#D9D9D9] min-h-screen flex flex-col items-center justify-center text-center px-6 py-[100px] pb-[60px]">
      {/* Hello! with gradient lines */}
      <div className="flex items-center gap-3.5 mb-2">
        <div className="h-[3.5px] w-[72px] bg-gradient-to-l from-[#00000038] to-transparent" />
        <span className="font-['Instrument_Serif'] text-[#00000080] text-[55px] italic tracking-[0.01em] leading-none">
          Hello!
        </span>
        <div className="h-[3.5px] w-[72px] bg-gradient-to-r from-[#00000038] to-transparent" />
      </div>

      {/* Headline */}
      <div className="max-w-[1100px] w-full">
        {/* Row 1: I Scaled to [10] Crore */}
        <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5">
          <span className="font-['Poppins'] font-extrabold text-[clamp(2.8rem,6.4vw,100px)] leading-[1.308] tracking-[-4px] text-black">
            I Scaled to
          </span>

          {/* 10 badge - counts 7-10 */}
          <motion.div
            animate={{ y: [0, -9, 0], rotate: [-2, -0.8, -2] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gradient-to-br from-[#2d2d2d] to-[#0c0c0c] rounded-[clamp(14px,1.8vw,24px)] px-[0.48em] py-[0.08em] shadow-[24px_24px_33.94px_-4.25px_rgba(0,0,0,0.09),10.92px_10.92px_15.44px_-3.54px_rgba(0,0,0,0.32),5.49px_5.49px_7.77px_-2.83px_rgba(0,0,0,0.41),2.9px_2.9px_4.1px_-2.13px_rgba(0,0,0,0.46),1.45px_1.45px_2.04px_-1.42px_rgba(0,0,0,0.48),0.57px_0.57px_0.8px_-0.71px_rgba(0,0,0,0.5)]"
          >
            <span className="font-['Poppins'] font-extrabold text-[clamp(2.8rem,6.4vw,100px)] leading-[1.308] tracking-[-4px] text-white italic">
              {String(count10).padStart(2, "0")}
            </span>
          </motion.div>

          <span className="font-['Poppins'] font-medium text-[clamp(2.8rem,6.4vw,100px)] leading-[1.308] tracking-[-4px] text-[#00000080]">
            Crore
          </span>
        </div>

        {/* Row 2: in [03] years. */}
        <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5">
          <span className="font-['Poppins'] font-medium text-[clamp(2.8rem,6.4vw,100px)] leading-[1.308] tracking-[-4px] text-[#00000080]">
            in
          </span>

          {/* 03 badge - counts 0-3 */}
          <motion.div
            animate={{ y: [7, -3, 7], rotate: [1, 2.2, 1] }}
            transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gradient-to-br from-[#3a3a3a] to-[#1a1a1a] rounded-[clamp(14px,1.8vw,24px)] px-[0.08em] py-[0.08em] shadow-[24px_24px_33.94px_-4.25px_rgba(0,0,0,0.09),10.92px_10.92px_15.44px_-3.54px_rgba(0,0,0,0.32),5.49px_5.49px_7.77px_-2.83px_rgba(0,0,0,0.41),2.9px_2.9px_4.1px_-2.13px_rgba(0,0,0,0.46),1.45px_1.45px_2.04px_-1.42px_rgba(0,0,0,0.48),0.57px_0.57px_0.8px_-0.71px_rgba(0,0,0,0.5)]"
          >
            <span className="font-['Poppins'] font-extrabold text-[clamp(2.8rem,6.4vw,100px)] leading-[1.308] tracking-[-4px] text-white italic">
              {String(count3).padStart(2, "0")}
            </span>
          </motion.div>

          <span className="font-['Poppins'] font-extrabold text-[clamp(2.8rem,6.4vw,100px)] leading-[1.308] tracking-[-4px] text-black">
            years.
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <p className="font-['Inter'] font-normal text-[clamp(20px,2vw,26px)] text-black/40 max-w-[650px] leading-relaxed mt-8 mb-7">
        Learn how to position your course as the only choice and scale your education business.
      </p>

      {/* CTA row */}
      <div className="flex flex-wrap items-center justify-center gap-[22px]">
        {/* Enroll Now — white outer pill + dark inner button */}
        <div className="bg-gradient-to-br from-white to-[#d9d3d3] rounded-full p-2 shadow-[0_2px_20px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.6)_inset]">
          <button
            className="font-['Inter'] font-medium text-[18px] leading-[27.2px] text-white bg-gradient-to-b from-[#2c2c2c] to-[#111111] border-none rounded-full px-7 py-[11px] cursor-pointer flex items-center gap-2.5 shadow-[0px_-16px_48px_0px_#000000_inset,24px_24px_74.67px_-2.5px_rgba(0,0,0,0.18),10.92px_10.92px_33.97px_-2.08px_rgba(0,0,0,0.18),5.49px_5.49px_17.09px_-1.67px_rgba(0,0,0,0.18),2.9px_2.9px_9.01px_-1.25px_rgba(0,0,0,0.18),1.45px_1.45px_4.5px_-0.83px_rgba(0,0,0,0.18),0.57px_0.57px_1.76px_-0.42px_rgba(0,0,0,0.18)] transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] outline-none whitespace-nowrap hover:scale-105"
          >
            Enroll Now <span className="text-[17px] mt-px">→</span>
          </button>
        </div>

        {/* Avatars + label */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex">
            {avatarIds.map((id, i) => (
              <img
                key={id}
                src={`https://i.pravatar.cc/40?img=${id}`}
                alt=""
                className="w-9 h-9 rounded-full border-[1px] border-white object-cover shadow-[0_1px_4px_rgba(0,0,0,0.12)]"
                style={{ marginLeft: i === 0 ? 0 : "-10px" }}
              />
            ))}
          </div>
          <span className="font-['Inter'] text-[13px] text-black/42 font-normal">
            Trusted by Leaders
          </span>
        </div>
      </div>
    </section>
  );
}