import { Star } from "lucide-react";
import ticker from "../assets/icons/ticker.png"

const StarRow = () => (
  <div className="flex gap-1 mb-3">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={25} fill="#f59e0b" className="text-yellow-400" />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="pb-20 md:pt-20 px-4"
      style={{ background: "#D9D9D9" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        <div className="text-center">
          <h2
            className="text-black font-medium text-3xl md:text-5xl mb-3"
            style={{ letterSpacing: "-0.02em" }}
          >
            Results from Real Course Businesses
          </h2>
          <p className="text-gray-500 text-xl md:text-2xl font-normal">
          The Only Choice Framework that turns your expertise into a <br className="hidden md:block"/> predictable, scalable education business.
          </p>
        </div>

        {/* Quote icon */}
        <div
          className="md:w-32 w-20 rounded-2xl flex items-center justify-center"
        >
          <img src={ticker} alt="icon" />
        </div>

        {/* Video testimonial card */}

                <div className="rounded-[25px] shadow-xl p-6 bg-white/50 hidden md:block">
                <div
                  className="rounded-[25px] overflow-hidden"
                  
                >
                  {/* Video embed */}
                  <div className="relative w-full rounded-[28px]" style={{ aspectRatio: "16/9" }}>
                    <iframe
                      src="https://player.cloudinary.com/embed/?cloud_name=dnbjncck1&public_id=Emc_full_2_1_xnpti5"
                      style={{ height: "100%", width: "100%", }}
                      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                      allowFullScreen
                      frameBorder="0"
                      className="w-full h-full"
                    />
        
                  
                     {/* Review overlay on video */}
          <div className="absolute top-5 left-5 right-5 sm:right-auto sm:max-w-sm bg-black/20 backdrop-blur-sm rounded-2xl p-4">
            <StarRow className={'text-2xl'}/>
            <p className="text-white text-xs md:text-base leading-relaxed mb-3">
              The hands-on projects and real-world examples gave me the confidence to tackle complex design challenges. Educore made all the difference in my career pivot.
            </p>
            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/32?img=47"
                alt="Sarah Johnson"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-white text-xs md:text-base font-semibold">Sarah Johnson</p>
                <p className="text-gray-400 text-xs">Senior Product Designer @ Google</p>
              </div>
            </div>
          </div>
                    
                  </div>
                  
        
        
                </div>
              </div>

     

        {/* Bottom row: text + tilted card */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:mt-20">
          {/* Left text */}
          <div className="w-full md:w-[55%]">
            <h3
              className="font-medium text-black text-2xl md:text-5xl leading-tight mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              What Changed When Friction Was Removed and the Business Finally Had Room to Grow
            </h3>
            <p className="text-gray-500 text-sm md:text-2xl leading-relaxed font-light">
              Hidden commissions, poor support, and platform limitations were holding the business back. The right framework and tools made scaling predictable again.
            </p>
          </div>

          {/* Tilted card */}
          <div className="p-5 shadow-xl w-full md:w-[45%] flex-shrink-0 flex-1 bg-white/40 rounded-4xl"  style={{ transform: "rotate(3deg)", boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}>
            <div
            className="bg-white rounded-2xl p-5 "
            style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
          >
            <StarRow />
            <p className="text-gray-800 text-sm md:text-3xl leading-relaxed mb-4 font-normal">
              The hands-on projects and real-world examples gave me the confidence to tackle complex design challenges. Educore made all the difference in my career pivot.
            </p>
            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/32?img=47"
                alt="Sarah Johnson"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-black text-xs md:text-xl font-semibold">Sarah Johnson</p>
                <p className="text-gray-400 text-xs">Senior Product Designer @ Google</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}