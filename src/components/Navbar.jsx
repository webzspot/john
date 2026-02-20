import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
      <button className="bg-white text-black font-semibold text-sm px-5 py-2 rounded-full shadow-sm hover:shadow-md transition-all">
        Agnel John
      </button>
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {open && (
        <div className="absolute top-16 right-6 bg-white rounded-2xl shadow-xl p-6 min-w-[200px] flex flex-col gap-4">
          <a href="#about" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">About</a>
          <a href="#curriculum" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">Curriculum</a>
          <a href="#testimonials" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">Results</a>
          <a href="#pricing" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">Pricing</a>
        </div>
      )}
    </nav>
  );
}