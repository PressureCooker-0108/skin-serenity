'use client'

import { Users, Zap, Award, CheckCircle2 } from 'lucide-react'

export function WhyChooseUsSection() {
  const stats = [
    {
      value: '1000+',
      label: 'Patients Treated',
      icon: Users,
    },
    {
      value: '10+',
      label: 'Advanced Treatments',
      icon: Zap,
    },
    {
      value: '5+',
      label: 'Years Experience',
      icon: Award,
    },
    {
      value: 'FDA',
      label: 'Approved Equipment',
      icon: CheckCircle2,
    },
  ]

  const features = [
    {
      title: 'Expert Dermatologist',
      description: 'Board-certified specialists with years of clinical expertise',
      icon: Award,
    },
    {
      title: 'Advanced Technology',
      description: 'State-of-the-art laser equipment for optimal results',
      icon: Zap,
    },
    {
      title: 'Personalized Care',
      description: 'Customized treatment plans tailored to your skin needs',
      icon: Users,
    },
    {
      title: 'Visible Results',
      description: 'Fast-acting treatments with noticeable improvements',
      icon: CheckCircle2,
    },
  ]

  return (
    <section className="relative w-full bg-[#F9E8E8] py-16 sm:py-20 lg:py-24">
      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 space-y-3 text-center sm:mb-16">
          <h2 className="text-balance text-3xl font-light text-[#1C1C1C] sm:text-4xl lg:text-5xl">
            Why Choose Skin Serenity
          </h2>
          <p className="text-pretty text-lg font-light text-[#666666]">
            Data-backed expertise meets personalized care
          </p>
        </div>

        {/* Stats grid - top row */}
        <div className="mb-12 grid grid-cols-2 gap-4 sm:mb-16 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className={`fade-in fade-in-${index + 1} rounded-xl bg-white p-6 text-center shadow-sm sm:p-8`}
              >
                <div className="mb-3 flex justify-center">
                  <div className="rounded-lg bg-[#F9E8E8] p-3">
                    <IconComponent className="h-6 w-6 text-[#1C1C1C]" />
                  </div>
                </div>
                <p className="text-2xl font-light text-[#1C1C1C] sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-light text-[#666666] sm:text-sm">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>

        {/* Feature cards - bottom row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className={`fade-in fade-in-${index + 5} group overflow-hidden rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8`}
              >
                <div className="mb-4 inline-flex rounded-lg bg-[#F9E8E8] p-3 transition-colors duration-300 group-hover:bg-[#1C1C1C]">
                  <IconComponent className="h-6 w-6 text-[#1C1C1C] transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="mb-2 text-lg font-light text-[#1C1C1C] sm:text-base">
                  {feature.title}
                </h3>
                <p className="text-sm font-light text-[#666666]">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
