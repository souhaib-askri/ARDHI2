import { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactMap } from "@/components/contact/ContactMap";

export const metadata: Metadata = {
  title: "Contact | ARDHI - Plateforme AgriTech Tunisienne",
  description:
    "Contactez l'équipe ARDHI pour en savoir plus sur notre plateforme d'agriculture intelligente. Demandez une démonstration ou posez vos questions.",
  keywords: [
    "contact ardhi",
    "agritech tunisie",
    "démonstration plateforme agricole",
    "support agriculture intelligente",
  ],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            {/* Contact Info - Takes 2 columns */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
      <ContactMap />
    </main>
  );
}
