"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  User,
  Building,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  Sparkles,
  Video,
} from "lucide-react";

export function DemoRequestForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    surface: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="request-demo"
      className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <Badge
              variant="outline"
              className="mb-6 px-4 py-2 text-green-300 border-green-500/50 bg-green-500/10"
            >
              <Video className="w-4 h-4 mr-2" />
              Démonstration Live
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Demander une{" "}
              <span className="text-green-300">Démonstration Personnalisée</span>
            </h2>

            <p className="text-xl text-green-100 mb-8">
              Un expert ARDHI vous présentera la plateforme en direct, adaptée à
              vos cultures et votre contexte agricole spécifique.
            </p>

            {/* What to expect */}
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Calendar,
                  text: "Session de 45 min adaptée à votre disponibilité",
                },
                {
                  icon: Sparkles,
                  text: "Démonstration personnalisée selon vos cultures",
                },
                {
                  icon: MessageSquare,
                  text: "Réponses à toutes vos questions techniques",
                },
                {
                  icon: CheckCircle2,
                  text: "Proposition d'accompagnement sur mesure",
                },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-green-300" />
                  </div>
                  <span className="text-green-100">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Contact alternative */}
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <p className="text-sm text-green-200 mb-2">
                Préférez un contact direct ?
              </p>
              <div className="flex flex-wrap gap-4 text-white">
                <a
                  href="tel:+21671123456"
                  className="flex items-center gap-2 hover:text-green-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +216 71 123 456
                </a>
                <a
                  href="mailto:demo@ardhi.io"
                  className="flex items-center gap-2 hover:text-green-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  demo@ardhi.io
                </a>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Demande Envoyée !
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Merci pour votre intérêt. Notre équipe vous contactera sous
                    24h pour planifier votre démonstration personnalisée.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Nouvelle demande
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Réservez votre Démo Live
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nom complet *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                            placeholder="email@exemple.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Téléphone
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                            placeholder="+216 XX XXX XXX"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company & Location */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Organisation
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                            placeholder="Ferme / Coopérative"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Région
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <select
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all appearance-none bg-white"
                          >
                            <option value="">Sélectionner...</option>
                            <option value="tunis">Grand Tunis</option>
                            <option value="nord">Nord</option>
                            <option value="cap-bon">Cap Bon</option>
                            <option value="sahel">Sahel</option>
                            <option value="centre">Centre</option>
                            <option value="sud">Sud</option>
                            <option value="autre">Autre</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Surface */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Surface exploitée
                      </label>
                      <select
                        name="surface"
                        value={formData.surface}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all appearance-none bg-white"
                      >
                        <option value="">Sélectionner...</option>
                        <option value="<10">Moins de 10 ha</option>
                        <option value="10-50">10 - 50 ha</option>
                        <option value="50-200">50 - 200 ha</option>
                        <option value="200-500">200 - 500 ha</option>
                        <option value=">500">Plus de 500 ha</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message (optionnel)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all resize-none"
                        placeholder="Précisez vos cultures, besoins spécifiques..."
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-6"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Demander ma Démonstration Live
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      En soumettant ce formulaire, vous acceptez d'être contacté
                      par notre équipe commerciale.
                    </p>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
