'use client'

import { Quote, Star } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  review: string
  rating: number
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'priya',
    name: 'Priya S.',
    review:
      'My acne was completely gone after 4 sessions. The doctor explained everything clearly, and the staff was incredibly supportive throughout my treatment.',
    rating: 5,
  },
  {
    id: 'rahul',
    name: 'Rahul M.',
    review:
      'The laser hair removal results exceeded my expectations. I noticed significant reduction after just 2 sessions. Highly recommend their expertise.',
    rating: 5,
  },
  {
    id: 'anjali',
    name: 'Anjali K.',
    review:
      'What impressed me most was the warmth and professionalism of the entire team. They made me feel comfortable and cared for every step of the way.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative w-full bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 space-y-3 text-center sm:mb-16">
          <p className="text-sm font-medium text-secondary-foreground tracking-wide uppercase">
            Patient Stories
          </p>
          <h2 className="text-balance text-3xl font-light text-foreground sm:text-4xl lg:text-5xl">
            Real Results, Real Voices
          </h2>
          <p className="text-pretty text-lg font-light text-muted-foreground">
            Hear from patients who&apos;ve experienced transformation
          </p>
        </div>

        {/* Testimonials carousel - scrollable on mobile, grid on desktop */}
        <div className="relative">
          {/* Gradient overlays for scroll effect on mobile */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-4 bg-gradient-to-r from-background to-transparent sm:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-4 bg-gradient-to-l from-background to-transparent sm:hidden" />

          {/* Cards container */}
          <div className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth pb-4 sm:grid sm:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`fade-in fade-in-${index + 1} flex-shrink-0 w-full sm:w-auto`}
              >
                <div className="relative flex h-full flex-col rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8">
                  {/* Quote icon */}
                  <div className="mb-4 inline-flex">
                    <Quote className="h-5 w-5 text-secondary-foreground opacity-40" />
                  </div>

                  {/* Review text */}
                  <p className="mb-6 flex-grow text-sm font-light leading-relaxed text-foreground sm:text-base">
                    {testimonial.review}
                  </p>

                  {/* Star rating */}
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-secondary text-secondary"
                      />
                    ))}
                  </div>

                  {/* Patient name */}
                  <p className="text-sm font-medium text-foreground">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator on mobile */}
        <div className="mt-8 flex justify-center sm:hidden">
          <p className="text-xs text-muted-foreground">
            Swipe to see more reviews
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center sm:mt-16">
          <p className="mb-6 text-sm text-muted-foreground sm:text-base">
            Ready to start your skin transformation?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-primary-foreground font-medium rounded-lg hover:bg-foreground/90 transition-colors duration-300 sm:px-8"
            aria-label="Book consultation"
          >
            Book Your Consultation
          </button>
        </div>
      </div>

      {/* CSS for scrollbar hiding */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
