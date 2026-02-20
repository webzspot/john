import { useState } from "react";
import { Video, Building2, GraduationCap } from "lucide-react";

const tabs = [
  {
    label: "Course Creators",
    icon: <Video size={22} className="text-white" />,
    content:
      "For creators who have knowledge but struggle with positioning, consistent enrollments, and converting attention into revenue. Learn how to structure offers, build trust, and become the obvious choice in your niche.",
  },
  {
    label: "EdTech Founders",
    icon: <Building2 size={22} className="text-white" />,
    content:
      "For EdTech founders who want to build a scalable business with repeatable systems, grow a loyal user base, and dominate their education niche with strategic positioning.",
  },
  {
    label: "Education Institutes",
    icon: <GraduationCap size={22} className="text-white" />,
    content:
      "For institutes looking to modernize their enrollment process, attract more students online, and build a premium brand that commands higher fees and retains learners.",
  },
];

export default function WhoIsThisFor() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="who"
      className="py-20 px-4"
      style={{
        background: "radial-gradient(ellipse at 60% 40%, #2a2a2a 0%, #111 60%, #0a0a0a 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
        {/* Left */}
        <div className="lg:flex-1">
          <h2
            className="text-white font-black text-3xl sm:text-4xl lg:text-5xl mb-4 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Who Is This For?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-sm">
            The Only Choice Framework that turns your expertise into a predictable, scalable education business.
          </p>

          {/* Tabs */}
          <div className="flex flex-col gap-0 border-b border-gray-700">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left text-sm font-medium py-3 pr-4 transition-all border-b border-gray-800 last:border-b-0 ${
                  active === i
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : "text-gray-500 hover:text-gray-300"
                }`}
                style={active === i ? { borderBottomColor: "#facc15" } : {}}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right - card */}
        <div className="lg:flex-1 w-full">
          <div
            className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden"
            style={{ minHeight: "280px" }}
          >
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
              style={{ background: "linear-gradient(145deg, #2a2a2a, #111)" }}
            >
              {tabs[active].icon}
            </div>

            <h3 className="text-black font-black text-2xl mb-4">
              {tabs[active].label}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {tabs[active].content}
            </p>

            {/* Decorative circle partially visible on right edge */}
            <div
              className="absolute -right-8 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full"
              style={{ background: "#f0f0f0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}