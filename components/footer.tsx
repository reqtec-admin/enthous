"use client"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <p className="text-xs text-white/50 font-mono mb-4">PRODUCT</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs text-white/50 font-mono mb-4">COMPANY</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs text-white/50 font-mono mb-4">LEGAL</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs text-white/50 font-mono mb-4">CONNECT</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 hover:text-white transition">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-gradient-to-br from-white to-white/60 rounded-lg" />
            <span className="font-mono text-sm font-bold text-white">ENTHOUS</span>
          </div>
          <p className="text-xs text-white/50 text-center md:text-right">© 2025 Enthous. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
