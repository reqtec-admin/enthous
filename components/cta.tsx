"use client"

import { ArrowRight } from "lucide-react"

interface CTAProps {
  onReviewNumbers?: () => void
}

export default function CTA({ onReviewNumbers }: CTAProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="p-12 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/20 backdrop-blur-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Ready to Validate Your System?
          </h2>
          <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-2xl">
            Start the 24-week sprint to bulletproof your trading strategy. We'll help you build the infrastructure, run
            the experiments, and deliver clear yes/no signals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition flex items-center justify-center gap-2 flex-1 sm:flex-none">
              Get Started Today
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onReviewNumbers}
              className="px-8 py-4 bg-white/5 text-white rounded-full font-semibold border border-white/20 hover:bg-white/10 transition flex items-center justify-center gap-2 backdrop-blur-xl flex-1 sm:flex-none"
            >
              Review the Numbers
            </button>
          </div>

          <p className="text-sm text-white/50 font-mono">
            Typical project kickoff: 2–4 weeks. Full 24-week research cycle delivers clear equity-curve evidence.
          </p>
        </div>
      </div>
    </section>
  )
}
