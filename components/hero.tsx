"use client"

import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:40px_40px] -z-10" />

      <div className="max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-xs text-white/70 font-mono">6-MONTH RESEARCH PLATFORM</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance">
          Validate & Scale Your Trading Strategy
        </h1>

        <p className="text-lg md:text-xl text-white/60 mb-8 max-w-2xl leading-relaxed">
          A bulletproof, secure R&D environment to re-validate your system, improve models, and produce calibrated
          equity-curve evidence—all before cloud deployment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition flex items-center justify-center gap-2">
            Request Access
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-8 py-4 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition backdrop-blur-xl">
            View Roadmap
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "100TB+", value: "Secure Data" },
            { label: "6 Months", value: "Research Window" },
            { label: "24 Weeks", value: "Phased Delivery" },
            { label: "$500K", value: "Total Investment" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition"
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.label}</div>
              <div className="text-xs md:text-sm text-white/60">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
