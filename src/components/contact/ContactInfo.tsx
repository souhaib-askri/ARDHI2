"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Twitter,
  Linkedin,
  Github,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      description: "Réponse sous 24-48h",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
      description: "Lun-Ven, 9h-18h",
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "Technopark El Ghazala\nAriana, Tunisie",
      href: "https://maps.google.com/?q=Technopark+El+Ghazala+Ariana+Tunisie",
      description: "Visite sur rendez-vous",
    },
  ];

  const socialLinks = [
    {
      icon: Twitter,
      label: "Twitter",
      href: siteConfig.links.twitter,
      color: "hover:bg-sky-100 hover:text-sky-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: siteConfig.links.linkedin,
      color: "hover:bg-blue-100 hover:text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: siteConfig.links.github,
      color: "hover:bg-gray-200 hover:text-gray-900",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Contact Methods */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-green-600" />
          Informations de contact
        </h3>

        <div className="space-y-5">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                <method.icon className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-500">{method.label}</p>
                <p className="text-gray-900 font-medium whitespace-pre-line">
                  {method.value}
                </p>
                <p className="text-xs text-gray-500 mt-1">{method.description}</p>
              </div>
              {method.href.startsWith("http") && (
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-green-600 transition-colors" />
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Clock className="h-5 w-5 text-green-600" />
          Horaires d&apos;ouverture
        </h3>

        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Lundi - Vendredi</span>
            <span className="font-medium text-gray-900">09:00 - 18:00</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-600">Samedi</span>
            <span className="font-medium text-gray-900">09:00 - 13:00</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Dimanche</span>
            <span className="font-medium text-red-500">Fermé</span>
          </div>
        </div>

        <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-100">
          <p className="text-sm text-amber-800">
            <strong>Support technique :</strong> Disponible 24/7 pour les clients
            avec abonnement Premium.
          </p>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Suivez-nous
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Restez informé des dernières actualités et innovations ARDHI.
        </p>

        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 transition-all ${social.color}`}
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      {/* CTA - Demo Request */}
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-2">
          Demander une démonstration
        </h3>
        <p className="text-green-100 text-sm mb-4">
          Découvrez comment ARDHI peut transformer votre exploitation agricole
          avec une démo personnalisée.
        </p>
        <Button
          asChild
          className="w-full bg-white text-green-700 hover:bg-green-50"
        >
          <a href="/services/demo">Réserver ma démo gratuite</a>
        </Button>
      </div>
    </div>
  );
}
