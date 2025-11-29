"use client"

export default function Team() {
  const roles = [
    {
      role: "Domain Expert & Sign-Off",
      description: "You",
      details: "Final decision authority on model changes, market hypothesis refinement",
    },
    {
      role: "Senior Data/ML Engineer",
      description: "Pipeline + Calibration (0.5 FTE)",
      details: "Feature engineering, model training, probability calibration, experiment tracking",
    },
    {
      role: "Senior DevOps/Security Engineer",
      description: "Infrastructure & Compliance (0.5 FTE)",
      details: "On-prem cluster, encryption, RBAC, audit logging, scalability roadmap",
    },
    {
      role: "Senior Quant/Research Engineer",
      description: "Validation & Testing (0.5 FTE)",
      details: "Model validation, backtest rigor, entry/exit calibration, market-state labeling",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Recommended Team</h2>
        <p className="text-lg text-white/60 mb-12 max-w-2xl leading-relaxed">
          Three senior part-time engineers laser-focused on validation and rapid iteration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-1">{role.role}</h3>
                <p className="text-sm text-white/60">{role.description}</p>
              </div>
              <p className="text-sm text-white/50 border-t border-white/10 pt-4">{role.details}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
          <h3 className="text-lg font-semibold text-white mb-4">Total Investment</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-white/60 mb-2">Hardware & Storage</p>
              <p className="text-3xl font-bold text-white">$33–57K</p>
            </div>
            <div>
              <p className="text-sm text-white/60 mb-2">Team (6 months)</p>
              <p className="text-3xl font-bold text-white">$130–190K</p>
            </div>
            <div>
              <p className="text-sm text-white/60 mb-2">Total Ballpark</p>
              <p className="text-3xl font-bold text-white">$165–250K</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
