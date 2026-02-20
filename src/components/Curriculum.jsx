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
      className="py-20 px-4"
      style={{ background: "#e8e8e8" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-black font-black text-3xl sm:text-4xl lg:text-5xl mb-3"
            style={{ letterSpacing: "-0.02em" }}
          >
            Inside the Complete Program
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            Every module is designed to help you move forward with clarity and confidence.
          </p>
        </div>

        {/* Accordion card */}
        <div
          className="bg-white rounded-3xl overflow-hidden shadow-lg"
          style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.06)" }}
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
                  <span className="font-bold text-black text-sm sm:text-base">
                    {mod.title}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs flex-shrink-0 ml-4">
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
                      <div className="flex items-center gap-3 text-gray-600 text-sm">
                        <Video size={14} className="text-gray-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full ml-4 flex-shrink-0"
                        style={{ background: "#fef9c3", color: "#92400e" }}
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

        {/* Enroll button */}
        <div className="flex justify-center mt-10">
          <button
            className="flex items-center gap-2 text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg"
            style={{
              background: "linear-gradient(145deg, #2a2a2a, #111)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            }}
          >
            Enroll Now →
          </button>
        </div>
      </div>
    </section>
  );
}