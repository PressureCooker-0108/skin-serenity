'use client'

import { Facebook, Instagram, MessageCircle } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <footer className="w-full bg-[#1C1C1C] text-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Left: Clinic Name */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold tracking-tight text-white mb-2">
              Skin Serenity Clinic
            </h3>
            <p className="text-sm text-white/60">
              Advanced skin and laser treatments
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-sm font-medium text-white/80 mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-white/70 hover:text-[#F9E8E8] transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Contact & Social */}
          <div className="flex flex-col items-center sm:items-end">
            <div className="mb-6">
              <h4 className="text-sm font-medium text-white/80 mb-3">Contact Us</h4>
              <div className="flex flex-col gap-2 text-sm text-white/70">
                <a href="tel:+919890605888" className="hover:text-[#F9E8E8] transition-colors duration-200">
                  +91 9999 999 999
                </a>
                <p>Vishrambag, Sangli, India</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/10 hover:bg-[#F9E8E8] text-white hover:text-[#1C1C1C] transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/10 hover:bg-[#F9E8E8] text-white hover:text-[#1C1C1C] transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/10 hover:bg-[#F9E8E8] text-white hover:text-[#1C1C1C] transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10" />

        {/* Copyright */}
        <div className="mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {currentYear} Skin Serenity Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#F9E8E8] transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#F9E8E8] transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
