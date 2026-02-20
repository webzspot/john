import { Star } from "lucide-react";

const StarRow = () => (
  <div className="flex gap-1 mb-3">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} fill="#f59e0b" className="text-yellow-400" />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 px-4"
      style={{ background: "#e8e8e8" }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2
            className="text-black font-black text-3xl sm:text-4xl mb-3"
            style={{ letterSpacing: "-0.02em" }}
          >
            Results from Real Course Businesses
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            The Only Choice Framework that turns your expertise into a predictable, scalable education business.
          </p>
        </div>

        {/* Quote icon */}
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-md"
          style={{ background: "linear-gradient(145deg, #2a2a2a, #111)" }}
        >
          <span className="text-white text-xl font-black" style={{ lineHeight: 1 }}>"</span>
        </div>

        {/* Video testimonial card */}
        <div
          className="rounded-3xl overflow-hidden relative shadow-xl mb-10"
          style={{ minHeight: "300px" }}
        >
          {/* Dark overlay video placeholder */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80"
              alt="testimonial"
              className="w-full object-cover"
              style={{ height: "360px" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))" }}
            />
          </div>

          {/* Review overlay on video */}
          <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-xs bg-black/80 backdrop-blur-sm rounded-2xl p-4">
            <StarRow />
            <p className="text-white text-xs leading-relaxed mb-3">
              The hands-on projects and real-world examples gave me the confidence to tackle complex design challenges. Educore made all the difference in my career pivot.
            </p>
            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/32?img=47"
                alt="Sarah Johnson"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-white text-xs font-semibold">Sarah Johnson</p>
                <p className="text-gray-400 text-xs">Senior Product Designer @ Google</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: text + tilted card */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
          {/* Left text */}
          <div className="flex-1">
            <h3
              className="font-black text-black text-2xl sm:text-3xl leading-tight mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              What Changed When Friction Was Removed and the Business Finally Had Room to Grow
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Hidden commissions, poor support, and platform limitations were holding the business back. The right framework and tools made scaling predictable again.
            </p>
          </div>

          {/* Tilted card */}
          <div
            className="bg-white rounded-2xl p-5 shadow-xl w-full sm:w-64 flex-shrink-0"
            style={{ transform: "rotate(3deg)", boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
          >
            <StarRow />
            <p className="text-gray-800 text-sm leading-relaxed mb-4">
              The hands-on projects and real-world examples gave me the confidence to tackle complex design challenges. Educore made all the difference in my career pivot.
            </p>
            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/32?img=47"
                alt="Sarah Johnson"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-black text-xs font-semibold">Sarah Johnson</p>
                <p className="text-gray-400 text-xs">Senior Product Designer @ Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}