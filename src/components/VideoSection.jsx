import { Lock } from "lucide-react";

export default function VideoSection() {
  const modules = [
    { title: "Relevance Blueprint to Become Only Choice", module: 2 },
    { title: "One Step Closer Framework - 2x Conversion", module: 3 },
    { title: "Science of Urgency", module: 4 },
  ];

  return (
    <section
      id="about"
      className="py-16 px-4"
      style={{ background: "#e8e8e8" }}
    >
      <div className="max-w-3xl mx-auto">
        <div
          className="rounded-[28px] overflow-hidden shadow-2xl"
          style={{
            background: "#1a1a1a",
            boxShadow: "0 30px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.08)",
          }}
        >
          {/* Video embed */}
          <div className="relative w-full" style={{ aspectRatio: "640/360" }}>
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=dnbjncck1&public_id=My_Video-highlight_ggqt9b"
              style={{ height: "auto", width: "100%", aspectRatio: "640 / 360" }}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              className="w-full h-full"
            />
          </div>

          {/* Currently playing */}
          <div className="px-5 py-3 border-b border-white/10">
            <div className="flex items-center gap-2 text-white text-sm font-medium">
              <span className="text-white">▶</span>
              <span>1.1. The Growth Laws of My EdTech - My Own Story</span>
            </div>
          </div>

          {/* Locked modules */}
          <div className="divide-y divide-white/10">
            {modules.map((m) => (
              <div
                key={m.module}
                className="flex items-center justify-between px-5 py-3.5"
              >
                <div className="flex items-center gap-2.5 text-gray-400 text-sm">
                  <Lock size={14} className="text-gray-500" />
                  <span>{m.title}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1 text-xs text-gray-400">
                  <Lock size={11} />
                  <span>Module {m.module} Locked</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}