"use client"

import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="p-12 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/20 backdrop-blur-xl">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4 text-balance">
            Ready to Validate Your System?
          </h2>
          <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-2xl">
            Enthous.IO is expected to have rapid growth this next year. Availabilty as we scale is a concern. Reserve your spot today to gaurantee an opportunity to dial in your sensitive models.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="mailto:enthous@reqtec.com" className="px-8 py-4 bg-white text-black rounded-full font-semibold font-mono hover:bg-white/90 transition flex items-center justify-center gap-2 flex-1 sm:flex-none">
              Join the Waitlist
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/financials"
              className="px-8 py-4 bg-white/5 text-white rounded-full font-semibold font-mono border border-white/20 hover:bg-white/10 transition flex items-center justify-center gap-2 backdrop-blur-xl flex-1 sm:flex-none"
            >
              Review the Numbers
            </a>
          </div>

          <p className="text-sm text-white/50 font-mono">
            No more guess work. Deliver your model with confidence.
          </p>
        </div>
      </div>
    </section>
  )
}
