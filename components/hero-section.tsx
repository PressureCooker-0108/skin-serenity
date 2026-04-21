'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#F9E8E8] via-white to-white">
      {/* Animated blur circles for depth */}
      <div className="blur-circle blur-circle-1" />
      <div className="blur-circle blur-circle-2" />

      {/* Main content container */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        {/* Mobile layout - centered */}
        <div className="flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          {/* Left content - text section */}
          <div className="flex flex-1 flex-col items-start justify-center gap-6">
            {/* Clinic branding */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F9E8E8] px-4 py-2">
                <div className="h-2 w-2 rounded-full bg-[#1C1C1C]" />
                <span className="text-sm font-medium text-[#1C1C1C]">
                  Skin Serenity Clinic
                </span>
              </div>
              <p className="text-xs font-light tracking-wider text-[#666666]">
                Vishrambag, Sangli
              </p>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-light leading-tight text-[#1C1C1C] sm:text-5xl lg:text-6xl">
                Advanced Skin & Laser Treatments in Sangli
              </h1>
              <p className="text-pretty text-lg font-light text-[#666666] sm:text-xl">
                Experience dermatologist-led skincare with FDA-approved laser technology. Safe, effective, and personalized treatment plans designed for your skin.
              </p>
            </div>

            {/* Tagline accent */}
            <div className="flex items-center gap-3 pt-2">
              <div className="h-px w-8 bg-[#1C1C1C]" />
              <span className="font-light italic text-[#1C1C1C]">Glow Starts Here</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex w-full flex-col gap-3 pt-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#1C1C1C] font-light text-white hover:bg-[#333333]"
              >
                Book Appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-[#1C1C1C] bg-white font-light text-[#1C1C1C] hover:bg-[#F9E8E8]"
              >
                View Services
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col gap-3 border-t border-[#F0F0F0] pt-6 sm:flex-row sm:gap-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#1C1C1C]" />
                <div className="flex flex-col gap-0.5">
                  <p className="font-medium text-[#1C1C1C]">1000+</p>
                  <p className="text-xs font-light text-[#666666]">Happy Patients</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#1C1C1C]" />
                <div className="flex flex-col gap-0.5">
                  <p className="font-medium text-[#1C1C1C]">FDA Approved</p>
                  <p className="text-xs font-light text-[#666666]">Advanced Technology</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - visual accent (gradient shape) */}
          <div className="flex flex-1 items-center justify-center">
            <div className="floating relative h-80 w-full max-w-sm">
              {/* Large gradient rectangle for visual interest */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl bg-gradient-to-br from-[#F9E8E8] to-[#ffffff] opacity-60 backdrop-blur-sm" />

              {/* Inner content area with subtle pattern */}
              <div className="absolute inset-6 rounded-2xl bg-white/50 backdrop-blur-md">
                <div className="flex h-full flex-col items-center justify-center gap-4 p-6">
                  {/* Decorative elements */}
                  <div className="space-y-3">
                    <div className="h-2 w-16 rounded-full bg-[#F9E8E8]" />
                    <div className="h-2 w-20 rounded-full bg-[#F9E8E8]/60" />
                    <div className="h-2 w-12 rounded-full bg-[#F9E8E8]/40" />
                  </div>

                  <div className="my-4 h-20 w-20 rounded-full bg-gradient-to-br from-[#F9E8E8] to-white opacity-70" />

                  <div className="space-y-3">
                    <div className="h-2 w-12 rounded-full bg-[#F9E8E8]/40" />
                    <div className="h-2 w-20 rounded-full bg-[#F9E8E8]/60" />
                    <div className="h-2 w-16 rounded-full bg-[#F9E8E8]" />
                  </div>
                </div>
              </div>

              {/* Floating accent circle */}
              <div className="floating-delayed absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-[#F9E8E8]/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}
