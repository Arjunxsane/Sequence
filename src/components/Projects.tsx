import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  { id: 1, title: "Student Mark Management", desc: "HTML • CSS • JS", link: "#" },
  { id: 2, title: "Amazon Clone", desc: "Vanilla JS SPA", link: "#" },
  { id: 3, title: "Expense Tracker", desc: "Zero-backend App", link: "#" }
];

export default function Projects() {
  return (
    <section className="relative z-20 min-h-screen bg-[#121212] pt-32 pb-48 px-8 md:px-24 rounded-t-[3rem] -mt-10 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
       <div className="max-w-7xl mx-auto">
          <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-16 font-semibold">
            Selected Lab Work
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((p) => (
              <a
                key={p.id}
                href={p.link}
                className="group relative flex flex-col justify-end h-80 p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/5"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 z-0"/>
                
                <div className="relative z-10 flex justify-between items-end">
                   <div>
                     <p className="text-xs text-blue-400 mb-2 font-mono uppercase tracking-widest">{p.desc}</p>
                     <h4 className="text-2xl text-white font-medium group-hover:text-white transition-colors">
                       {p.title}
                     </h4>
                   </div>
                   <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all duration-500 transform group-hover:-translate-y-1 group-hover:translate-x-1">
                     <ArrowUpRight className="w-5 h-5" />
                   </div>
                </div>
              </a>
            ))}
          </div>
       </div>
    </section>
  );
}
