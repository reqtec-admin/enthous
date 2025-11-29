"use client"

import { Database, Lock, Zap, BarChart3 } from "lucide-react"

export default function Overview() {
  const features = [
    {
      icon: Database,
      title: "Secure Data Lake",
      description:
        "On-premise or private VPC with encrypted 100TB+ sensitive market data. Immutable, auditable, WORM-like access control.",
    },
    {
      icon: Lock,
      title: "Zero Trust Security",
      description:
        "Kerberos + LDAP, encryption at rest/in-flight, full audit trails. No data leaves your perimeter without explicit approval.",
    },
    {
      icon: Zap,
      title: "Reproducible Pipeline",
      description:
        "Feature store, versioned datasets, DVC tracking. Reproduce any backtest with exact conditions—floating-point noise only.",
    },
    {
      icon: BarChart3,
      title: "Calibration Engine",
      description:
        "Isotonic regression, Platt scaling, reliability diagrams. Validate that your model probabilities are trustworthy.",
    },
  ]

  return (
    <section
      id="overview"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-white/5 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Enterprise-Grade Research Platform
          </h2>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            Built for quantitative traders who need bulletproof validation before scaling. Every decision is backed by
            reproducible evidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition group hover:border-blue-500/30 glass-card-accent"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-white/10 group-hover:bg-blue-500/10 transition">
                    <Icon className="w-6 h-6 text-white group-hover:text-blue-300 transition" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
