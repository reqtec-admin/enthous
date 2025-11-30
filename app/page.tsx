"use client"

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Overview from "@/components/overview"
import Timeline from "@/components/timeline"
import Deliverables from "@/components/deliverables"
import SuccessCriteria from "@/components/success-criteria"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 bg-background -z-20" />
      {/* Grid background effect - extends throughout entire application */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          zIndex: -15,
        }}
      />
      <main className="min-h-screen relative">
        <AnimatedBackground />
        <Navigation />
        <Hero />
        <Overview />
        <Timeline />
        <Deliverables />
        <SuccessCriteria />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
