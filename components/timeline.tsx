"use client"

export default function Timeline() {
  const phases = [
    {
      phase: 1,
      title: "Infrastructure Setup & VPC",
      weeks: "1–4",
      month: "Month 1",
      deliverables: [
        "Hardware procurement and setup",
        "VPC configuration and network security",
        "Access control implementation",
        "Secrets management (Vault/AWS Secrets Manager)",
        "Data storage foundation",
      ],
    },
    {
      phase: 2,
      title: "Model Running Environment",
      weeks: "5–8",
      month: "Month 2",
      deliverables: [
        "Model execution environment setup",
        "Development and testing infrastructure",
        "Integration with data storage",
        "Initial model deployment pipeline",
      ],
    },
    {
      phase: 3,
      title: "Proof of Concept & Validation",
      weeks: "9–12",
      month: "Month 3",
      deliverables: [
        "Proof of concept implementation",
        "Cost optimization validation",
        "Repackaging foundation for future sales",
        "Documentation and handoff",
      ],
    },
  ]

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4 text-balance">12-Week Roadmap</h2>
        <p className="text-lg text-white/60 mb-12 max-w-2xl leading-relaxed">
          Three monthly sprints with clear deliverables to build security, reproducibility, and evidence-driven confidence at every step.
        </p>

        <div className="space-y-4">
          {phases.map((phase, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition cursor-pointer hover:border-blue-500/30 glass-card-accent"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 group-hover:bg-blue-500/10 transition flex items-center justify-center">
                  <span className="font-bold text-white group-hover:text-blue-300 transition">{phase.phase}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold font-mono text-white mb-1">{phase.title}</h3>
                  <p className="text-sm text-white/60 font-mono">{phase.month} • Weeks {phase.weeks}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {phase.deliverables.map((del, dIdx) => (
                  <li key={dIdx} className="text-sm text-white/70 flex items-start gap-3">
                    <span className="text-white/40 mt-1">•</span>
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
