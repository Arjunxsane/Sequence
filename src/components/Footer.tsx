import { Github, Linkedin, Mail, Phone, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#121212] py-12 border-t border-white/10 text-white/60 text-sm">
      <div className="max-w-7xl mx-auto px-8 md:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-white">Arjun Sharma</h2>
          <p>B.Tech CSE @ ABESEC | 2023 - 2027</p>
        </div>
        <div className="flex flex-wrap gap-6">
          <a href="mailto:arjun1006sharma@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
            <Mail className="w-4 h-4" /> arjun1006sharma@gmail.com
          </a>
          <a href="tel:8448935595" className="hover:text-white transition-colors flex items-center gap-2">
            <Phone className="w-4 h-4" /> 8448935595
          </a>
          <a href="https://github.com/Arjunxsane" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href="https://linkedin.com/in/arjun" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href="https://leetcode.com/u/arjunX10" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
            <Code2 className="w-4 h-4" /> LeetCode
          </a>
        </div>
      </div>
    </footer>
  );
}
