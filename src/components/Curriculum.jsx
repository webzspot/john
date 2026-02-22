import { useState } from "react";
import { ChevronUp, ChevronDown, Video, BookOpen } from "lucide-react";

const modules = [
  {
    title: "Module 1: Foundation & Direction",
    lessons: 12,
    open: true,
    items: [
      "What is a Datacenter",
      "What is Cloud Computing & why do we need it",
      "Benefits of Cloud Computing",
      "Advantages of Cloud Computing",
    ],
  },
  { title: "Module 2: Course Positioning", lessons: 12, open: false, items: [] },
  { title: "Module 3: Offer & Pricing Strategy", lessons: 12, open: false, items: [] },
  { title: "Module 4: Sales & Conversion Systems", lessons: 12, open: false, items: [] },
  { title: "Module 5: Delivery & Retention", lessons: 12, open: false, items: [] },
  { title: "Module 6: Scaling the Business", lessons: 12, open: false, items: [] },
];

export default function Curriculum() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section
      id="curriculum"
      className="pb-20 pt-40 px-4"
      style={{ background: "#D9D9D9", fontFamily: "'Poppins', sans-serif", }}
      
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-black font-medium text-3xl md:text-5xl mb-3"
            style={{ letterSpacing: "-0.02em" }}
          >
            Inside the Complete Program
          </h2>
          <p className="text-gray-500 text-xl md:text-2xl font-normal">
            Every module is designed to help you move forward with <br className="hidden md:block"/>clarity and confidence.
          </p>
        </div>

        <div className="md:p-6 p-4 bg-white/40 rounded-4xl">
          {/* Accordion card */}
        <div
          className="bg-white rounded-3xl overflow-hidden md:p-5"
        >
          {modules.map((mod, i) => (
            <div key={i} className={`${i !== 0 ? "border-t border-gray-100" : ""}`}>
              {/* Module header */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  {openIdx === i ? (
                    <ChevronUp size={16} className="text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />
                  )}
                  <span className=" text-black text-base md:text-xl">
                    {mod.title}
                  </span>
                </div>
                <div className="md:flex items-center gap-1.5 text-[#31354A] text-xs md:flex-shrink-0 ml-4 hidden">
                  <BookOpen size={13} />
                  <span>{mod.lessons} lessons</span>
                </div>
              </button>

              {/* Expanded lessons */}
              {openIdx === i && mod.items.length > 0 && (
                <div className="pb-4">
                  {mod.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3 text-[#31354A] font-normal text-xs md:text-base">
                        <Video className="text-[#31354A] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                      <span
                        className="text-xs px-3 py-1 rounded-full ml-4 md:flex-shrink-0 hidden md:block"
                        style={{ background: "#fef9c3", }}
                      >
                        LESSON
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        </div>

        {/* Enroll button */}
        <div className="flex justify-center mt-10">
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
        </div>
      </div>
    </section>
  );
}