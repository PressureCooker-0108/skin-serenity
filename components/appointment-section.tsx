'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MessageCircle, MapPin, Phone } from 'lucide-react'

export function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    concern: '',
    date: '',
  })

  const concerns = ['Acne', 'Hair Fall', 'Laser Toning', 'Pigmentation', 'Other']

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleWhatsApp = () => {
    const message = `Hello! I'd like to book an appointment. Name: ${formData.name}, Phone: ${formData.phone}, Concern: ${formData.concern}, Preferred Date: ${formData.date}`
    window.open(`https://wa.me/919890605888?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic
    console.log('Form submitted:', formData)
  }

  return (
    <div id="contact" className="w-full bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center fade-in">
          <h2 className="mb-4 text-3xl font-light text-[#1C1C1C] sm:text-4xl">
            Book Your Appointment
          </h2>
          <p className="text-lg font-light text-[#666666]">
            Schedule your consultation with our expert dermatologist today
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form section */}
          <div className="fade-in fade-in-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name input */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#1C1C1C]"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-[#F0F0F0] bg-[#F5F5F5] px-4 py-3 text-base font-light text-[#1C1C1C] placeholder-[#999999] focus:border-[#1C1C1C] focus:outline-none focus:ring-1 focus:ring-[#1C1C1C]"
                  required
                />
              </div>

              {/* Phone input */}
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#1C1C1C]"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className="w-full rounded-lg border border-[#F0F0F0] bg-[#F5F5F5] px-4 py-3 text-base font-light text-[#1C1C1C] placeholder-[#999999] focus:border-[#1C1C1C] focus:outline-none focus:ring-1 focus:ring-[#1C1C1C]"
                  required
                />
              </div>

              {/* Concern dropdown */}
              <div className="space-y-2">
                <label
                  htmlFor="concern"
                  className="block text-sm font-medium text-[#1C1C1C]"
                >
                  Treatment Concern
                </label>
                <select
                  id="concern"
                  name="concern"
                  value={formData.concern}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#F0F0F0] bg-[#F5F5F5] px-4 py-3 text-base font-light text-[#1C1C1C] focus:border-[#1C1C1C] focus:outline-none focus:ring-1 focus:ring-[#1C1C1C]"
                  required
                >
                  <option value="">Select your concern</option>
                  {concerns.map((concern) => (
                    <option key={concern} value={concern}>
                      {concern}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date input */}
              <div className="space-y-2">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-[#1C1C1C]"
                >
                  Preferred Date
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#F0F0F0] bg-[#F5F5F5] px-4 py-3 text-base font-light text-[#1C1C1C] focus:border-[#1C1C1C] focus:outline-none focus:ring-1 focus:ring-[#1C1C1C]"
                  required
                />
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex-1 bg-[#25D366] font-light text-white hover:bg-[#20BA5C]"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Book on WhatsApp
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-[#1C1C1C] font-light text-white hover:bg-[#333333]"
                  size="lg"
                >
                  Submit Form
                </Button>
              </div>

              {/* Reassurance text */}
              <p className="text-center text-sm font-light text-[#666666]">
                We&apos;ll contact you within 24 hours
              </p>
            </form>
          </div>

          {/* Contact info section */}
          <div className="flex flex-col gap-8">
            {/* Clinic address card */}
            <div className="fade-in fade-in-2 space-y-6 rounded-xl bg-gradient-to-br from-[#F9E8E8] to-white p-8">
              <div className="space-y-4">
                <h3 className="text-xl font-light text-[#1C1C1C]">Clinic Address</h3>
                <div className="flex gap-4">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-[#1C1C1C]" />
                  <div className="space-y-1">
                    <p className="font-light text-[#1C1C1C]">
                      Near US Polo
                    </p>
                    <p className="font-light text-[#666666]">
                      Vishrambag, Sangli
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#F0F0F0]" />

              {/* Phone number */}
              <div className="space-y-4">
                <h3 className="text-xl font-light text-[#1C1C1C]">Contact Us</h3>
                <div className="flex gap-4">
                  <Phone className="h-5 w-5 flex-shrink-0 text-[#1C1C1C]" />
                  <div className="space-y-1">
                    <a
                      href="tel:+919890605888"
                      className="block font-light text-[#1C1C1C] hover:text-[#F9E8E8] transition-colors"
                    >
                      +91 9890605888
                    </a>
                    <p className="text-sm font-light text-[#666666]">
                      Available 9 AM - 7 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info boxes */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="fade-in fade-in-3 rounded-lg bg-[#F5F5F5] p-6">
                <h4 className="mb-2 font-light text-[#1C1C1C]">Quick Response</h4>
                <p className="text-sm font-light text-[#666666]">
                  Confirmation within 24 hours
                </p>
              </div>
              <div className="fade-in fade-in-4 rounded-lg bg-[#F5F5F5] p-6">
                <h4 className="mb-2 font-light text-[#1C1C1C]">Expert Care</h4>
                <p className="text-sm font-light text-[#666666]">
                  Personalized treatment plans
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
