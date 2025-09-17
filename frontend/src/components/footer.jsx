import React from "react"

import { Mountain, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Platform: ["Features", "AI Planning", "AR/VR Tours", "Marketplace", "Mobile App"],
    Destinations: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar"],
    Support: ["Help Center", "Contact Us", "Travel Guide", "Safety Tips", "FAQs"],
    Company: ["About Us", "Careers", "Press", "Partners", "Blog"],
  }

  return (
    <footer className="bg-zinc-700 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">TripVerse</span>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Discover the untouched beauty of Jharkhand with AI-powered travel planning and authentic local
              experiences.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 text-background/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
  <div key={category}>
    <h3 className="font-bold text-background mb-4">{category}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link}>
          <span className="text-background/80">{link}</span>
        </li>
      ))}
    </ul>
  </div>
))}

        
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">© 2024 JharkhandGo. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
