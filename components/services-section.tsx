'use client'

import {
  Zap,
  AlertCircle,
  Droplet,
  Scissors,
  Sparkles,
  Palette,
  Clock,
  Droplets,
} from 'lucide-react'

interface Service {
  id: string
  name: string
  description: string
  icon: React.ReactNode
}

const SERVICES: Service[] = [
  {
    id: 'laser-toning',
    name: 'Laser Toning',
    description: 'Even skin tone and radiant complexion',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: 'acne-treatment',
    name: 'Acne / Pimple Treatment',
    description: 'Clear, blemish-free skin with lasting results',
    icon: <AlertCircle className="w-6 h-6" />,
  },
  {
    id: 'hair-fall',
    name: 'Hair Fall Treatment (PRP)',
    description: 'Restore thickness and prevent hair loss naturally',
    icon: <Droplet className="w-6 h-6" />,
  },
  {
    id: 'hair-removal',
    name: 'Laser Hair Removal',
    description: 'Smooth, hair-free skin permanently',
    icon: <Scissors className="w-6 h-6" />,
  },
  {
    id: 'chemical-peels',
    name: 'Chemical Peels',
    description: 'Renewed skin texture and brightened appearance',
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    id: 'pigmentation',
    name: 'Pigmentation Treatment',
    description: 'Uniform complexion and dark spot reduction',
    icon: <Palette className="w-6 h-6" />,
  },
  {
    id: 'anti-aging',
    name: 'Anti-Ageing Treatments',
    description: 'Restore youthful glow and reduce fine lines',
    icon: <Clock className="w-6 h-6" />,
  },
  {
    id: 'hydrafacial',
    name: 'HydraFacial',
    description: 'Deep hydration and luminous skin instantly',
    icon: <Droplets className="w-6 h-6" />,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm md:text-base font-medium text-secondary-foreground mb-2 tracking-wide uppercase">
            Our Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Our Treatments
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Personalized solutions for every skin concern
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-lg p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Rose accent on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary-foreground group-hover:bg-secondary/20 transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Service Name */}
                <h3 className="text-sm md:text-base font-semibold text-foreground mb-2 leading-snug">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Subtle bottom accent line on hover */}
              <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-secondary via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            Not sure which treatment is right for you?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center px-6 md:px-8 py-3 bg-foreground text-primary-foreground font-medium rounded-lg hover:bg-foreground/90 transition-colors duration-300"
            aria-label="Schedule a consultation"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
