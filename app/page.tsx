import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Overview from "@/components/overview"
import Timeline from "@/components/timeline"
import Deliverables from "@/components/deliverables"
import SuccessCriteria from "@/components/success-criteria"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import ProtectedFinancials from "@/components/protected-financials"
;("use client")

import { useRef } from "react"

export default function Home() {
  const financialsRef = useRef<{ openFinancials: () => void }>(null)

  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <Hero />
      <Overview />
      <Timeline />
      <Deliverables />
      <SuccessCriteria />
      <CTA
        onReviewNumbers={() => {
          // Trigger financials modal opening
          const button = document.querySelector("[data-financials-trigger]") as HTMLButtonElement
          button?.click()
        }}
      />
      <Footer />
      <ProtectedFinancials />
    </main>
  )
}
