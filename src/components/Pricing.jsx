import { useState } from "react";
import { Check, Plus, Minus, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const faqs = [
  { q: "Who is this course for?" },
  { q: "Do I get full access immediately after enrollment?" },
  { q: "Can I pay in installments?" },
  { q: "What is the Prebook option?" },
  { q: "Is Prebook access limited compared to full access?" },
  { q: "Do I get future updates?" },
  { q: "Is this suitable for beginners?" },
];

const faqAnswers = {
  0: "This course is for course creators, EdTech founders, and education institutes who want to scale their education business using a proven framework.",
  1: "Yes, upon full enrollment you get immediate access to all unlocked modules and materials.",
  2: "Yes, you can pay in 2 easy installments of ₹1,499 each.",
  3: "The Prebook option gives you access to Module 1 (4 lessons) and the first chapter of the Only Choice Book for ₹499, with the option to upgrade anytime.",
  4: "Prebook gives you Module 1 access only. Full access unlocks all 6 modules and bonuses.",
  5: "Yes, all future updates to the course are included in your enrollment at no extra cost.",
  6: "Yes, this course is structured to help both beginners and experienced creators build a scalable system.",
};

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div id="pricing">
      {/* Pricing Section */}
      <section className="py-20 px-4" style={{ background: "#e8e8e8" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-black font-black text-3xl sm:text-4xl mb-2"
              style={{ letterSpacing: "-0.02em" }}
            >
              Choose Your Access
            </h2>
            <p className="text-gray-500 text-sm">
              Choose how you'd like to get started full access, installments, or prebook.
            </p>
          </div>

          {/* Pricing card */}
          <div
            className="bg-white rounded-3xl p-1 shadow-xl overflow-hidden"
            style={{ boxShadow: "0 8px 50px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.06)" }}
          >
            <div className="flex flex-col sm:flex-row">
              {/* Full Access */}
              <div className="flex-1 p-7">
                <p className="text-gray-500 text-sm mb-2">One-time payment</p>
                <p
                  className="font-black text-black text-4xl mb-1"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  ₹2,999/-
                </p>
                <p className="text-gray-400 text-xs mb-5">
                  You can also pay in 2 easy{" "}
                  <span className="font-bold text-gray-600">installments of ₹1,499.</span>
                </p>

                <div className="flex gap-3 mb-6">
                  <button
                    className="flex items-center gap-2 text-white font-semibold text-sm px-5 py-2.5 rounded-full flex-1 justify-center transition-all hover:scale-105"
                    style={{ background: "linear-gradient(145deg, #2a2a2a, #111)" }}
                  >
                    Get Full access →
                  </button>
                  <button className="flex items-center gap-2 text-black font-semibold text-sm px-5 py-2.5 rounded-full border border-gray-200 hover:bg-gray-50 transition-all">
                    Pay Installment →
                  </button>
                </div>

                <p className="text-xs font-semibold text-gray-700 mb-3">What's included</p>
                <ul className="space-y-2.5">
                  {[
                    "Full Course Access",
                    "Only Choice Book – Door Delivery",
                    "Community Access",
                    "Future Course Updates",
                    "Schedule 1:1 Call with Agnel John (45 min)",
                    "Full Course Access",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="w-px bg-gray-100 hidden sm:block" />
              <div className="h-px bg-gray-100 sm:hidden mx-4" />

              {/* Pre-Enrollment */}
              <div className="flex-1 p-7">
                <p className="text-gray-500 text-sm mb-2">Pre-Enrollment Access</p>
                <p
                  className="font-black text-black text-4xl mb-1"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  ₹499
                </p>
                <p className="text-gray-400 text-xs mb-5">
                  Try before you commit. 7 Days Refund Policy
                </p>

                <button
                  className="flex items-center gap-2 text-white font-semibold text-sm px-5 py-2.5 rounded-full w-full justify-center mb-6 transition-all hover:scale-105"
                  style={{ background: "linear-gradient(145deg, #2a2a2a, #111)" }}
                >
                  PreBook & Explore →
                </button>

                <p className="text-xs font-semibold text-gray-700 mb-3">What you get</p>
                <ul className="space-y-2.5">
                  {[
                    "Module 1 (4 Lessons) Access",
                    "Get 1st Chapter of Only Choice Book",
                    "Upgrade anytime",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4" style={{ background: "#e8e8e8" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-black font-black text-3xl sm:text-4xl mb-2"
              style={{ letterSpacing: "-0.02em" }}
            >
              Your Questions, Answered
            </h2>
            <p className="text-gray-500 text-sm">Clear answers. No confusion.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            {/* Contact card */}
            <div
              className="bg-white rounded-2xl p-5 shadow-sm flex-shrink-0 sm:w-52 h-fit"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://i.pravatar.cc/40?img=11"
                  alt="Agnel"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-black text-xs font-bold">Have more questions?</p>
                  <p className="text-gray-400 text-xs">Email to my team, get response in 24 to 48 hours</p>
                </div>
              </div>
              <button
                className="w-full text-white text-xs font-semibold py-2.5 rounded-full mb-2 transition-all hover:scale-105"
                style={{ background: "linear-gradient(145deg, #2a2a2a, #111)" }}
              >
                Email Your Questions Now →
              </button>
              <p className="text-center text-gray-400 text-xs">email us at</p>
              <p className="text-center text-xs font-medium" style={{ color: "#e53e3e" }}>
                agnel@agneljohn.in
              </p>
            </div>

            {/* FAQ list */}
            <div className="flex-1 divide-y divide-gray-200">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-4 text-left text-sm font-medium text-black hover:text-gray-700 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {openFaq === i ? (
                      <Minus size={16} className="text-gray-400 flex-shrink-0 ml-3" />
                    ) : (
                      <Plus size={16} className="text-gray-400 flex-shrink-0 ml-3" />
                    )}
                  </button>
                  {openFaq === i && (
                    <p className="text-gray-500 text-sm pb-4 leading-relaxed">
                      {faqAnswers[i]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section
        className="py-20 px-4 text-center"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, #2a2a2a 0%, #111 60%, #0a0a0a 100%)",
        }}
      >
        <div className="max-w-lg mx-auto">
          {/* "Only a few spots remaining" italic text */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gray-600" />
            <span
              className="text-gray-400 text-base"
              style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}
            >
              Only a few spots remaining
            </span>
            <div className="h-px flex-1 bg-gray-600" />
          </div>

          <h2
            className="font-black text-5xl sm:text-6xl mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span className="text-white">Enroll </span>
            <span className="text-yellow-400">Now</span>
          </h2>

          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            Join course creators who are using a clear, repeatable system to grow their education business with confidence
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              className="text-white font-semibold text-sm px-7 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-all"
            >
              Enroll Now
            </button>
            <button
              className="text-white font-semibold text-sm px-7 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all flex items-center gap-2"
            >
              Explore prebook →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-5 px-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ background: "#0a0a0a" }}
      >
        <p className="text-gray-500 text-xs">© errormakesclever, 2026</p>
        <div className="flex items-center gap-4">
          {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
            <button
              key={i}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 hover:border-gray-400 text-gray-500 hover:text-white transition-all"
            >
              <Icon size={14} />
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}