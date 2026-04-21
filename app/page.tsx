import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import { DoctorSection } from "@/components/doctor-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { AppointmentSection } from "@/components/appointment-section";
import { Footer } from "@/components/footer";
import { WhatsappButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <DoctorSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <AppointmentSection />
      
      {/* Google Maps Embed Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://maps.google.com/maps?q=Skin%20Serenity%20Clinic%20Vishrambag%20Sangli&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Skin Serenity Clinic Location"
          ></iframe>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
