"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"

export default function ProtectedFinancials() {
  const [isOpen, setIsOpen] = useState(false)
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

  const openFinancials = () => {
    setIsOpen(true)
  }

  return (
    <>
      <button
        onClick={openFinancials}
        className="fixed bottom-6 right-6 px-4 py-2 bg-white/10 border border-white/20 text-white text-sm rounded-lg hover:bg-white/20 transition backdrop-blur-xl z-40"
      >
        Financials
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-white/20 rounded-2xl backdrop-blur-xl">
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-white/10 bg-black/50 backdrop-blur">
              <h2 className="text-2xl font-bold text-white">Financials & Team</h2>
              <button
                onClick={() => {
                  setIsOpen(false)
                  setIsUnlocked(false)
                  setPasscode("")
                  setError("")
                }}
                className="p-2 hover:bg-white/10 rounded-lg transition"
              >
                <X className="w-5 h-5 text-white/60" />
              </button>
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
                    <h3 className="text-2xl font-semibold text-white mb-6">Investment Breakdown</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Infrastructure */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white mb-6">Infrastructure (2025 Pricing)</h4>

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
                          <p className="text-white/50 text-sm mb-3">ZFS architecture ready to scale to 100TB+</p>
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
                        <h4 className="text-lg font-semibold text-white mb-6">Team (6-Month Sprint)</h4>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-white font-medium">Senior Data/ML Engineer</span>
                            <span className="text-white/60 text-sm">Part-time (0.5 FTE)</span>
                          </div>
                          <p className="text-white/50 text-sm mb-3">Pipeline + calibration focus</p>
                          <p className="text-2xl font-bold text-white">~$45–65K</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-white font-medium">Senior DevOps/Security Engineer</span>
                            <span className="text-white/60 text-sm">Part-time (0.5 FTE)</span>
                          </div>
                          <p className="text-white/50 text-sm mb-3">Infrastructure & compliance</p>
                          <p className="text-2xl font-bold text-white">~$40–60K</p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-white font-medium">Senior Quant/Research Engineer</span>
                            <span className="text-white/60 text-sm">Part-time (0.5 FTE)</span>
                          </div>
                          <p className="text-white/50 text-sm mb-3">Model validation & testing</p>
                          <p className="text-2xl font-bold text-white">~$45–65K</p>
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
                        <p className="text-white/60 text-sm mb-2">Total Team (6 months)</p>
                        <p className="text-4xl font-bold text-white">$130–190K</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm mb-2">Project Total Ballpark</p>
                        <p className="text-4xl font-bold text-white">$165–250K</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
