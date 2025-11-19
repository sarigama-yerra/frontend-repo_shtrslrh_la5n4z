import React from "react"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Mission", href: "#mission" },
  { label: "Services", href: "#services" },
  { label: "Initiatives", href: "#initiatives" },
  { label: "Impact", href: "#impact" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Case Studies", href: "#cases" },
  { label: "Who We Are", href: "#team" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 shadow-inner shadow-emerald-900/20 flex items-center justify-center text-white font-bold">
            AWJ
          </div>
          <span className="font-semibold text-slate-800 tracking-tight group-hover:text-teal-700 transition-colors">AWJ Health</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-700 hover:text-teal-700 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <a href="#contact" className="inline-flex items-center px-3 py-2 text-sm rounded-md bg-teal-600 text-white hover:bg-teal-700 transition-colors">Get in touch</a>
        </div>
      </div>
    </header>
  )
}
