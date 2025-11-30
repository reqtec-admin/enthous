"use client"

import { TrendingUp, CheckCircle2 } from "lucide-react"

export default function SuccessCriteria() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4 text-balance">Success at Week 12</h2>
        <p className="text-lg text-white/60 mb-12 leading-relaxed">
          At the end of 12 weeks, validated models enable strategic next steps:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Go Profitable */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl hover:border-blue-500/30 glass-card-accent group transition">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-white group-hover:text-blue-300 transition" />
              <h3 className="text-2xl font-bold font-mono text-white">Go Profitable</h3>
            </div>

            <div className="space-y-4">
              <p className="text-white/80 leading-relaxed">
                This means the first models present would then turn their attention to fully scaling and seeking profits from Options Trades.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">
                    Scale validated models to production trading infrastructure
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Deploy options trading strategies with calibrated risk management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Focus on profit generation and portfolio optimization</span>
                </li>
              </ul>

              <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10 group-hover:bg-blue-500/10 transition">
                <p className="text-xs text-white/60 mb-2">NEXT STEP</p>
                <p className="text-white font-semibold">→ Expand Our Initial Partner's FinML Solutions</p>
              </div>
            </div>
          </div>

          {/* Expand Enthous.IO */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl hover:border-blue-500/30 glass-card-accent group transition">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-8 h-8 text-white group-hover:text-blue-300 transition" />
              <h3 className="text-2xl font-bold font-mono text-white">Expand Enthous.IO</h3>
            </div>

            <div className="space-y-4">
              <p className="text-white/80 leading-relaxed">
                This means expanding and marketing the environment to others beyond Our Initial Partner's FinML.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Market Enthous.IO as a standalone research platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Onboard new financial ML development teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Build partnerships with quantitative trading firms</span>
                </li>
              </ul>

              <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10 group-hover:bg-blue-500/10 transition">
                <p className="text-xs text-white/60 mb-2">NEXT STEP</p>
                <p className="text-white font-semibold">→ Scale to new FinML Model Developers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition hover:border-blue-500/30 glass-card-accent">
          <h3 className="text-xl font-semibold font-mono text-white mb-4">The Key: Evidence-Driven Decisions</h3>
          <p className="text-white/70 leading-relaxed">
            Either way, you have reproducible, auditable proof of what works and what doesn't. No ambiguity. No
            million-dollar cloud surprises. Just clear signal on whether your core hypothesis holds in the data.
          </p>
        </div>
      </div>
    </section>
  )
}
