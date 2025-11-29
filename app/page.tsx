"use client"

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Overview from "@/components/overview"
import Timeline from "@/components/timeline"
import Deliverables from "@/components/deliverables"
import SuccessCriteria from "@/components/success-criteria"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      <Hero />
      <Overview />
      <Timeline />
      <Deliverables />
      <SuccessCriteria />
      <CTA />
      <Footer />
    </main>
  )
}
