"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Image 
              src="/icon.svg" 
              alt="Enthous.IO" 
              width={32} 
              height={32} 
              className="w-8 h-8"
            />
            <span className="font-mono text-sm font-bold text-white">ENTHOUS.IO</span>
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
            <Link href="/financials" className="text-sm text-white/70 hover:text-white transition">
              Financials
            </Link>
            <a href="mailto:enthous@reqtec.com" className="px-6 py-2 bg-white text-black rounded-full font-medium font-mono text-sm hover:bg-white/90 transition">
              Get Started
            </a>
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
            <Link href="/financials" className="block text-sm text-white/70 hover:text-white">
              Financials
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
