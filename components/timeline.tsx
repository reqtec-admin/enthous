"use client"

export default function Timeline() {
  const phases = [
    {
      phase: 0,
      title: "Setup & Governance",
      weeks: "1–3",
      deliverables: [
        "Project charter & roles",
        "Security & compliance policy",
        "Hardware/infra procurement",
        "Secrets management (Vault/AWS Secrets Manager)",
      ],
    },
    {
      phase: 1,
      title: "Secure Data Ingestion & Lake",
      weeks: "4–8",
      deliverables: [
        "100–150 TB raw tick storage",
        "Immutable append-only raw zone",
        "Kerberos + LDAP/AD access control",
        "Data catalog (Amundala/Nessie + Iceberg)",
      ],
    },
    {
      phase: 2,
      title: "Feature Store & Baseline",
      weeks: "9–13",
      deliverables: [
        "System re-implementation in new environment",
        "Feature store (Feast/custom + Delta Lake)",
        "Full backtest baseline reproduction",
        "Versioned dataset snapshots",
      ],
    },
    {
      phase: 3,
      title: "Model Development Loop",
      weeks: "14–20",
      deliverables: [
        "MLflow experiment tracker",
        "Automated daily/weekly backtests",
        "Probability calibration module",
        "Market-state embedding prototypes",
      ],
    },
    {
      phase: 4,
      title: "Testing, Warehousing & Gate",
      weeks: "21–24",
      deliverables: [
        "Test-result warehouse (PostgreSQL/ClickHouse)",
        "Dashboard suite (Superset/Grafana)",
        "Profit gate alert system",
        "One-click reproduce script",
      ],
    },
  ]

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">24-Week Roadmap</h2>
        <p className="text-lg text-white/60 mb-12 max-w-2xl leading-relaxed">
          Structured phases to build security, reproducibility, and evidence-driven confidence at every step.
        </p>

        <div className="space-y-4">
          {phases.map((phase, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <span className="font-bold text-white">{phase.phase}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{phase.title}</h3>
                  <p className="text-sm text-white/60 font-mono">Weeks {phase.weeks}</p>
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
