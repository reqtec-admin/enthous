"use client"

export default function Budget() {
  return (
    <section
      id="budget"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-white/5 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Budget Breakdown</h2>
        <p className="text-lg text-white/60 mb-12 max-w-2xl leading-relaxed">
          Start lean, scale to 10TB+. Cloud costs stay near $0 until you pass the profit gate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Infrastructure */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white mb-6">Infrastructure (2025 Pricing)</h3>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="flex justify-between items-start mb-2">
                <span className="text-white font-medium">1–2 GPU Training Nodes</span>
                <span className="text-white/60 text-sm">Starter tier</span>
              </div>
              <p className="text-white/50 text-sm mb-3">NVIDIA L40 or A6000 with CUDA + libraries</p>
              <p className="text-2xl font-bold text-white">~$25–40K</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="flex justify-between items-start mb-2">
                <span className="text-white font-medium">20 TB Usable Storage (MVP)</span>
                <span className="text-white/60 text-sm">Encrypted RAID</span>
              </div>
              <p className="text-white/50 text-sm mb-3">ZFS architecture ready to scale to 10TB+</p>
              <p className="text-2xl font-bold text-white">~$8–12K</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="flex justify-between items-start mb-2">
                <span className="text-white font-medium">Software & Licenses</span>
                <span className="text-white/60 text-sm">Mostly OSS</span>
              </div>
              <p className="text-white/50 text-sm mb-3">MLflow, DVC, Databento already purchased</p>
              <p className="text-2xl font-bold text-white">~$0–5K</p>
            </div>
          </div>

          {/* Right side - Team */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white mb-6">Team (6-Month Sprint)</h3>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="flex justify-between items-start mb-2">
                <span className="text-white font-medium">Senior Data/ML Engineer</span>
                <span className="text-white/60 text-sm">Part-time</span>
              </div>
              <p className="text-white/50 text-sm mb-3">0.5 FTE contract, pipeline + calibration focus</p>
              <p className="text-2xl font-bold text-white">~$45–65K</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="flex justify-between items-start mb-2">
                <span className="text-white font-medium">Senior DevOps/Security Engineer</span>
                <span className="text-white/60 text-sm">Part-time</span>
              </div>
              <p className="text-white/50 text-sm mb-3">0.5 FTE contract, infrastructure & compliance</p>
              <p className="text-2xl font-bold text-white">~$40–60K</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="flex justify-between items-start mb-2">
                <span className="text-white font-medium">Senior Quant/Research Engineer</span>
                <span className="text-white/60 text-sm">Part-time</span>
              </div>
              <p className="text-white/50 text-sm mb-3">0.5 FTE contract, model validation & testing</p>
              <p className="text-2xl font-bold text-white">~$45–65K</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-white/60 text-sm mb-2">Total Hardware & Software</p>
              <p className="text-4xl font-bold text-white">$33–57K</p>
            </div>
            <div>
              <p className="text-white/60 text-sm mb-2">Total Team (6 months)</p>
              <p className="text-4xl font-bold text-white">$130–190K</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-white/60 text-sm mb-2">Project Total Ballpark</p>
            <p className="text-5xl font-bold text-white">$165–250K</p>
          </div>
        </div>
      </div>
    </section>
  )
}
