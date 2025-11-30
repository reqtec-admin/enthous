"use client"

import { CheckCircle2 } from "lucide-react"

export default function Deliverables() {
  const deliverables = [
    {
      title: "Data Storage",
      items: [
        "On-premise or air-gapped VPC architecture",
        "Raw zone: immutable, encrypted, WORM-like with full audit trail",
        "Processed zone: Parquet/Iceberg on Delta Lake",
        "Access control: Kerberos tickets + OPA policies",
      ],
    },
    {
      title: "ML Training Pipeline",
      items: [
        "DVC or Pachyderm for data versioning",
        "MLflow Tracking Server (self-hosted)",
        "Dockerized training environments (exact CUDA/Python versions)",
        "Every run: model file + schema + calibration report + equity curve",
      ],
    },
    {
      title: "Testing & Warehousing",
      items: [
        "All backtest results → PostgreSQL/TimescaleDB",
        "Calibration metrics stored per model version",
        "Real-time equity curve vs baseline dashboard",
        "Automated daily reports comparing new models vs champion",
      ],
    },
  ]

  return (
    <section
      id="deliverables"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-white/5 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4 text-balance">Key Deliverables</h2>
        <p className="text-lg text-white/60 mb-12 max-w-2xl leading-relaxed">
          Three core systems that form the backbone of reproducible, auditable research.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deliverables.map((section, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition hover:border-blue-500/30 glass-card-accent group"
            >
              <h3 className="text-2xl font-semibold font-mono text-white mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5 group-hover:text-blue-300 transition" />
                    <span className="text-sm text-white/70 leading-relaxed">{item}</span>
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
