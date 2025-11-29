"use client"

import { TrendingUp, CheckCircle2 } from "lucide-react"

export default function SuccessCriteria() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4 text-balance">Success at Week 12</h2>
        <p className="text-lg text-white/60 mb-12 leading-relaxed">
          At the end of 12 weeks, you see one of two clear outcomes:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Option A */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold font-mono text-white">Option A: Go Profitable</h3>
            </div>

            <div className="space-y-4">
              <p className="text-white/80 leading-relaxed">
                A new model beats your baseline by{" "}
                <span className="font-semibold text-white">≥ 1% annualized return</span>.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">
                    Calibrated probabilities (reliability diagram near-diagonal)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Statistically significant improvement (p &lt; 0.05)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Full audit trail, reproducible in one command</span>
                </li>
              </ul>

              <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-xs text-white/60 mb-2">NEXT STEP</p>
                <p className="text-white font-semibold">→ Prepare cloud burst with Terraform/Ansible</p>
              </div>
            </div>
          </div>

          {/* Option B */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold font-mono text-white">Option B: Prove It's Hard</h3>
            </div>

            <div className="space-y-4">
              <p className="text-white/80 leading-relaxed">
                After 12 weeks of iteration, nothing moved the needle significantly. Market regime or model assumption
                is the blocker.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Saved millions by validating before scaling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Clear, documented evidence of what doesn't work</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">Foundation for next research hypothesis</span>
                </li>
              </ul>

              <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-xs text-white/60 mb-2">NEXT STEP</p>
                <p className="text-white font-semibold">→ Pivot or scale research differently</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
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
