"use client"

import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-xs text-white/70 font-mono">FININCIAL ML RESEARCH PLATFORM</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-mono text-white mb-6 leading-tight text-balance">
          Validate & Scale Your Trading Strategy
        </h1>

        <p className="text-base md:text-lg text-white/70 mb-4 max-w-2xl leading-relaxed">
          Developing and iterating on trading models requires access to sensitive financial data, but security constraints and compliance requirements make rapid experimentation challenging. You need a secure environment where you can safely work with proprietary datasets, test model improvements, and validate strategies without compromising data integrity or regulatory compliance.
        </p>

        <p className="text-lg md:text-xl text-white/60 mb-8 max-w-2xl leading-relaxed">
          <b>Welcome to Enthous.IO</b>, a bulletproof, secure R&D environment to re-validate your system, improve models, and produce calibrated
          equity-curve evidence—all before cloud deployment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="mailto:enthous@reqtec.com"
            className="px-8 py-4 bg-white text-black rounded-full font-semibold font-mono hover:bg-white/90 transition flex items-center justify-center gap-2"
          >
            Request Access
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#timeline" className="px-8 py-4 bg-white/5 text-white rounded-full font-semibold font-mono border border-white/10 hover:bg-white/10 transition backdrop-blur-xl">
            View Roadmap
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { label: "10TB+", value: "Secure Data" },
            { label: "3 Months", value: "Research Window" },
            { label: "12 Weeks", value: "Phased Delivery" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition hover:border-blue-500/30 glass-card-accent"
            >
              <div className="text-2xl md:text-3xl font-bold font-mono text-white mb-1">{stat.label}</div>
              <div className="text-xs md:text-sm text-white/60 font-mono">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
