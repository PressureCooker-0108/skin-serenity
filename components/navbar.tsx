'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)

      // Update active link based on scroll position
      const sections = ['services', 'about', 'testimonials', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveLink(sectionId)
      setIsOpen(false)
    }
  }

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hasScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex-shrink-0 font-semibold text-[#1C1C1C] text-lg tracking-tight hover:text-[#F9E8E8] transition-colors duration-200"
            >
              Skin Serenity Clinic
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-all duration-200 pb-1 border-b-2 ${
                    activeLink === link.id
                      ? 'border-[#F9E8E8] text-[#1C1C1C]'
                      : 'border-transparent text-[#666666] hover:text-[#1C1C1C] hover:border-[#F9E8E8]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:inline-flex items-center justify-center px-6 py-2 rounded-lg bg-[#1C1C1C] text-white font-medium text-sm hover:bg-[#333333] transition-colors duration-200"
            >
              Book Appointment
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#F5F5F5] transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-[#1C1C1C]" />
              ) : (
                <Menu className="h-6 w-6 text-[#1C1C1C]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-[#F0F0F0] bg-white">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeLink === link.id
                      ? 'bg-[#F9E8E8] text-[#1C1C1C]'
                      : 'text-[#666666] hover:bg-[#F5F5F5] hover:text-[#1C1C1C]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 px-6 py-2 rounded-lg bg-[#1C1C1C] text-white font-medium text-sm hover:bg-[#333333] transition-colors duration-200"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding under navbar */}
      <div className="h-16" />
    </>
  )
}
