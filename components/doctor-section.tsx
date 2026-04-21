'use client'

import { Award, CheckCircle, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function DoctorSection() {
  return (
    <section id="about" className="relative w-full bg-[#F9E8E8] py-16 sm:py-20 lg:py-24">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9E8E8] via-[#F9E8E8]/95 to-white opacity-40" />

      {/* Main container */}
      <div className="relative z-10 flex w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          {/* Section header */}
          <div className="mb-12 flex flex-col items-start gap-2 lg:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2">
              <Sparkles className="h-4 w-4 text-[#1C1C1C]" />
              <span className="text-sm font-medium text-[#1C1C1C]">Meet Your Dermatologist</span>
            </div>
          </div>

          {/* Doctor card container */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left: Image gradient placeholder */}
            <div className="flex items-center justify-center">
              <div className="relative h-96 w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-[#1C1C1C] via-[#333333] to-[#1C1C1C] shadow-2xl">
                {/* Gradient overlay with subtle animation */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#F9E8E8]/20 to-transparent" />

                {/* Decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="space-y-6 text-center">
                    <div className="flex justify-center">
                      <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[#F9E8E8]/40 to-[#F9E8E8]/10" />
                    </div>
                    <div className="space-y-3">
                      <div className="mx-auto h-2 w-32 rounded-full bg-[#F9E8E8]/20" />
                      <div className="mx-auto h-2 w-24 rounded-full bg-[#F9E8E8]/15" />
                    </div>
                  </div>
                </div>

                {/* Floating accent shapes */}
                <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#F9E8E8]/10 blur-2xl" />
                <div className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-[#F9E8E8]/10 blur-2xl" />
              </div>
            </div>

            {/* Right: Content section */}
            <div className="flex flex-col justify-center gap-8">
              {/* Doctor info header */}
              <div className="space-y-3">
                <h2 className="text-4xl font-light text-[#1C1C1C] sm:text-5xl">
                  Our Lead Dermatologist
                </h2>
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-light text-[#666666]">
                    MBBS, MD Dermatology
                  </p>
                  <p className="text-sm font-light text-[#999999]">
                    5+ Years of Clinical Experience
                  </p>
                </div>
              </div>

              {/* Bio section */}
              <div className="space-y-4 border-l-2 border-[#1C1C1C] pl-4">
                <p className="font-light leading-relaxed text-[#1C1C1C]">
                  Our Lead Dermatologist specializes in advanced laser treatments, skin rejuvenation, and evidence-based dermatological solutions. Her expertise spans cutting-edge laser technology, chemical peels, and personalized skincare protocols.
                </p>
                <p className="font-light leading-relaxed text-[#1C1C1C]">
                  With a patient-centric approach, she ensures every treatment is tailored to individual skin types and concerns. Her commitment to staying current with international dermatological standards ensures you receive world-class care.
                </p>
              </div>

              {/* Trust badges */}
              <div className="space-y-3 pt-2">
                <p className="text-sm font-medium uppercase tracking-wider text-[#1C1C1C]">
                  Credentials & Certifications
                </p>
                <div className="space-y-2">
                  {/* Badge 1 */}
                  <div className="flex items-start gap-3 rounded-lg bg-white/80 p-3 backdrop-blur-sm">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#1C1C1C] mt-0.5" />
                    <div className="flex flex-col gap-0.5">
                      <p className="font-medium text-[#1C1C1C]">Certified Dermatologist</p>
                      <p className="text-xs font-light text-[#666666]">Board-certified with international standards</p>
                    </div>
                  </div>

                  {/* Badge 2 */}
                  <div className="flex items-start gap-3 rounded-lg bg-white/80 p-3 backdrop-blur-sm">
                    <Award className="h-5 w-5 flex-shrink-0 text-[#1C1C1C] mt-0.5" />
                    <div className="flex flex-col gap-0.5">
                      <p className="font-medium text-[#1C1C1C]">IAD Member</p>
                      <p className="text-xs font-light text-[#666666]">Indian Academy of Dermatology</p>
                    </div>
                  </div>

                  {/* Badge 3 */}
                  <div className="flex items-start gap-3 rounded-lg bg-white/80 p-3 backdrop-blur-sm">
                    <Sparkles className="h-5 w-5 flex-shrink-0 text-[#1C1C1C] mt-0.5" />
                    <div className="flex flex-col gap-0.5">
                      <p className="font-medium text-[#1C1C1C]">Advanced Laser Specialist</p>
                      <p className="text-xs font-light text-[#666666]">Certified in latest laser technologies</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-3 pt-4">
                <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#1C1C1C] font-light text-white hover:bg-[#333333]">
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
