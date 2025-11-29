"use client"

import { useState } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-white to-white/60 rounded-lg" />
            <span className="font-mono text-sm font-bold text-white">ENTHOUS</span>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          <div className={`hidden md:flex items-center gap-8`}>
            <a href="#overview" className="text-sm text-white/70 hover:text-white transition">
              Overview
            </a>
            <a href="#timeline" className="text-sm text-white/70 hover:text-white transition">
              Timeline
            </a>
            <a href="#deliverables" className="text-sm text-white/70 hover:text-white transition">
              Deliverables
            </a>
            <button className="px-6 py-2 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition">
              Get Started
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#overview" className="block text-sm text-white/70 hover:text-white">
              Overview
            </a>
            <a href="#timeline" className="block text-sm text-white/70 hover:text-white">
              Timeline
            </a>
            <a href="#deliverables" className="block text-sm text-white/70 hover:text-white">
              Deliverables
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
