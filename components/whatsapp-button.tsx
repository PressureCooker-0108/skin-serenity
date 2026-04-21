'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919890605888?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20at%20Skin%20Serenity%20Clinic"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 animate-bounce"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
