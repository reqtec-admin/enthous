"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function Footer() {
  const [aboutOpen, setAboutOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)
  const [careersOpen, setCareersOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)
  const [complianceOpen, setComplianceOpen] = useState(false)

  return (
    <>
      <footer className="border-t border-white/10 bg-black/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="text-xs text-white/50 font-mono mb-4">PRODUCT</p>
              <ul className="space-y-2">
                <li>
                  <a href="#overview" className="text-sm text-white/70 hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#timeline" className="text-sm text-white/70 hover:text-white transition">
                    Roadmap
                  </a>
                </li>
                <li>
                  <a href="/financials" className="text-sm text-white/70 hover:text-white transition">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs text-white/50 font-mono mb-4">COMPANY</p>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setAboutOpen(true)}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setBlogOpen(true)}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCareersOpen(true)}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    Careers
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs text-white/50 font-mono mb-4">LEGAL</p>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setPrivacyOpen(true)}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    Privacy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setTermsOpen(true)}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    Terms
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setComplianceOpen(true)}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    Compliance
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs text-white/50 font-mono mb-4">CONNECT</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://x.com/recteqX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    X
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/reqtec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@reqtec.com"
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-br from-white to-white/60 rounded-lg" />
              <span className="font-mono text-sm font-bold text-white">ENTHOUS.IO</span>
            </div>
            <p className="text-xs text-white/50 text-center md:text-right">© 2025 Enthous.IO. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* About Modal */}
      <Dialog open={aboutOpen} onOpenChange={setAboutOpen}>
        <DialogContent className="bg-black border-white/20 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-white font-mono">About</DialogTitle>
          </DialogHeader>
          <div className="text-white/70 mt-4">
            Enthous.IO is a project proposal created by{" "}
            <a
              href="https://reqtec.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 underline"
            >
              Requisite Technologies
            </a>
            .
          </div>
        </DialogContent>
      </Dialog>

      {/* Blog Modal */}
      <Dialog open={blogOpen} onOpenChange={setBlogOpen}>
        <DialogContent className="bg-black border-white/20 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-white font-mono">Blog</DialogTitle>
          </DialogHeader>
          <div className="text-white/70 mt-4">Coming Soon</div>
        </DialogContent>
      </Dialog>

      {/* Careers Modal */}
      <Dialog open={careersOpen} onOpenChange={setCareersOpen}>
        <DialogContent className="bg-black border-white/20 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-white font-mono">Careers</DialogTitle>
          </DialogHeader>
          <div className="text-white/70 mt-4">Coming Soon</div>
        </DialogContent>
      </Dialog>

      {/* Privacy Modal */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="bg-black border-white/20 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-white font-mono">Privacy Policy</DialogTitle>
          </DialogHeader>
          <div className="text-white/70 mt-4 space-y-4 text-sm">
            <div>
              This Privacy Policy describes how Enthous.IO ("we", "our", or "us") collects, uses, and protects your information.
            </div>
            <div>
              <strong>Information Collection:</strong> We collect information that you provide directly to us, including contact information and project-related data.
            </div>
            <div>
              <strong>Use of Information:</strong> We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.
            </div>
            <div>
              <strong>Data Security:</strong> We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </div>
            <div>
              <strong>Your Rights:</strong> You have the right to access, correct, or delete your personal information. Please contact us to exercise these rights.
            </div>
            <div className="pt-4 border-t border-white/10">
              © 2025 Enthous.IO. All rights reserved. Enthous.IO™ (trademark pending).
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Terms Modal */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="bg-black border-white/20 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-white font-mono">Terms & Definitions</DialogTitle>
          </DialogHeader>
          <div className="text-white/70 mt-4 space-y-4 text-sm">
            <div>
              <strong className="text-white">Intellectual Property (IP):</strong> Refers to creations of the mind, such as inventions, literary and artistic works, designs, symbols, names, and images used in commerce. This includes patents, copyrights, trademarks, and trade secrets.
            </div>
            <div>
              <strong className="text-white">Proprietary Data:</strong> Information that is owned by a company or individual and is not publicly available. This data is protected by confidentiality agreements and trade secret laws.
            </div>
            <div>
              <strong className="text-white">Source Code:</strong> Human-readable instructions written in a programming language that define how software operates. Source code is protected by copyright law.
            </div>
            <div>
              <strong className="text-white">Trade Secret:</strong> Confidential business information that provides a competitive advantage. Trade secrets are protected as long as they remain secret and have commercial value.
            </div>
            <div>
              <strong className="text-white">Work Product:</strong> Materials, documents, code, and other deliverables created during the course of a project. Ownership and usage rights are typically defined in service agreements.
            </div>
            <div>
              <strong className="text-white">Non-Disclosure Agreement (NDA):</strong> A legal contract that establishes confidentiality between parties, preventing the disclosure of proprietary or confidential information.
            </div>
            <div>
              <strong className="text-white">License:</strong> A legal permission to use intellectual property under specified conditions. Licenses can be exclusive, non-exclusive, or limited in scope.
            </div>
            <div className="pt-4 border-t border-white/10">
              These terms are provided for informational purposes. For specific legal definitions and implications, please consult with qualified legal counsel.
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Compliance Modal */}
      <Dialog open={complianceOpen} onOpenChange={setComplianceOpen}>
        <DialogContent className="bg-black border-white/20 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-white font-mono">Compliance & Security</DialogTitle>
          </DialogHeader>
          <div className="text-white/70 mt-4 space-y-4 text-sm">
            <div>
              While Enthous.IO is currently a product vision, we are committed to meeting the highest standards of security and compliance for financial services.
            </div>
            <div>
              <strong className="text-white">Planned Compliance Standards:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li><strong>SOC 2 Type II:</strong> Service Organization Control 2 certification ensuring security, availability, processing integrity, confidentiality, and privacy of customer data.</li>
                <li><strong>Financial Industry Standards:</strong> Compliance with relevant financial services regulations and data protection requirements.</li>
                <li><strong>Data Security:</strong> Implementation of encryption, access controls, audit logging, and secure data handling practices.</li>
                <li><strong>Regulatory Compliance:</strong> Adherence to applicable financial services regulations and industry best practices.</li>
              </ul>
            </div>
            <div>
              Our security architecture is designed with compliance in mind from the ground up, incorporating zero-trust principles, comprehensive audit trails, and data protection measures that meet or exceed industry standards.
            </div>
            <div className="pt-4 border-t border-white/10 text-xs">
              Note: Compliance certifications and audits will be conducted as part of the product development and deployment process.
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
