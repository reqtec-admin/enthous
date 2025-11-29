"use client"

import type React from "react"
import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function FinancialsPage() {
  const [passcode, setPasscode] = useState("")
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [error, setError] = useState("")

  const PASSCODE = "enthous2025"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (passcode === PASSCODE) {
      setIsUnlocked(true)
      setError("")
    } else {
      setError("Incorrect passcode")
      setPasscode("")
    }
  }

  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="w-full bg-black border border-white/20 rounded-2xl backdrop-blur-xl">
            <div className="p-6 border-b border-white/10 bg-black/50 backdrop-blur">
              <h1 className="text-3xl font-bold font-mono text-white">Financials & Team</h1>
            </div>

            <div className="p-8">
              {!isUnlocked ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <p className="text-white/70 text-center mb-6">Enter passcode to view financials and team details</p>
                  <div className="space-y-4">
                    <input
                      type="password"
                      placeholder="Passcode"
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition"
                    />
                    {error && <p className="text-red-400 text-sm">{error}</p>}
                    <button
                      type="submit"
                      className="w-full px-4 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition"
                    >
                      Unlock
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-12">
                  {/* Budget Section */}
                  <div>
                    <h2 className="text-2xl font-semibold font-mono text-white mb-6">Investment Breakdown</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Infrastructure */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold font-mono text-white mb-6">Infrastructure (2025 Pricing)</h3>

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

                      {/* Team */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold font-mono text-white mb-6">Team (12-Week Sprint)</h3>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-white font-medium">Senior Data/ML Engineer</span>
                            <span className="text-white/60 text-sm">Part-time (0.5 FTE)</span>
                          </div>
                          <p className="text-white/50 text-sm mb-3">Pipeline + calibration focus</p>
                          <p className="text-2xl font-bold text-white">~$22–32K</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-white font-medium">Senior DevOps/Security Engineer</span>
                            <span className="text-white/60 text-sm">Part-time (0.5 FTE)</span>
                          </div>
                          <p className="text-white/50 text-sm mb-3">Infrastructure & compliance</p>
                          <p className="text-2xl font-bold text-white">~$20–30K</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-white font-medium">Senior Quant/Research Engineer</span>
                            <span className="text-white/60 text-sm">Part-time (0.5 FTE)</span>
                          </div>
                          <p className="text-white/50 text-sm mb-3">Model validation & testing</p>
                          <p className="text-2xl font-bold text-white">~$22–32K</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Total Investment */}
                  <div className="p-8 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div>
                        <p className="text-white/60 text-sm mb-2">Total Hardware & Software</p>
                        <p className="text-4xl font-bold text-white">$33–57K</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm mb-2">Total Team (12 weeks)</p>
                        <p className="text-4xl font-bold text-white">$65–95K</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm mb-2">Project Total Ballpark</p>
                        <p className="text-4xl font-bold text-white">$98–152K</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

