"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bell,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Plane,
  Send,
  User,
} from "lucide-react";

export function DroneCTA() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [interest, setInterest] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <section
      id="notify"
      className="py-20 bg-gradient-to-br from-gray-900 via-violet-950 to-indigo-950 relative overflow-hidden"
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
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Soyez Parmi les{" "}
              <span className="text-violet-400">Premiers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Inscrivez-vous pour être informé du lancement et bénéficier
              d'offres exclusives réservées aux early adopters.
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Nom complet
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        placeholder="Ahmed Ben Ali"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        placeholder="ahmed@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        placeholder="+216 XX XXX XXX"
                      />
                    </div>

                    {/* Region */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <MapPin className="w-4 h-4 inline mr-2" />
                        Région
                      </label>
                      <select
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      >
                        <option value="" className="bg-gray-900">Sélectionnez...</option>
                        <option value="tunis" className="bg-gray-900">Grand Tunis</option>
                        <option value="nord" className="bg-gray-900">Nord (Bizerte, Béja, Jendouba)</option>
                        <option value="cap-bon" className="bg-gray-900">Cap Bon (Nabeul, Zaghouan)</option>
                        <option value="sahel" className="bg-gray-900">Sahel (Sousse, Monastir, Mahdia)</option>
                        <option value="centre" className="bg-gray-900">Centre (Kairouan, Kasserine, Sidi Bouzid)</option>
                        <option value="sfax" className="bg-gray-900">Sfax</option>
                        <option value="sud" className="bg-gray-900">Sud (Gabès, Médenine, Tataouine)</option>
                      </select>
                    </div>
                  </div>

                  {/* Interest */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Plane className="w-4 h-4 inline mr-2" />
                      Quel est votre intérêt principal ?
                    </label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    >
                      <option value="" className="bg-gray-900">Sélectionnez...</option>
                      <option value="purchase" className="bg-gray-900">Acheter un drone pour mon exploitation</option>
                      <option value="service" className="bg-gray-900">Utiliser un service drone (location/prestation)</option>
                      <option value="pilot" className="bg-gray-900">Devenir agriculteur pilote (tests)</option>
                      <option value="partner" className="bg-gray-900">Partenariat commercial</option>
                      <option value="info" className="bg-gray-900">Juste rester informé</option>
                    </select>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-violet-600 hover:bg-violet-700 text-white py-6 text-lg"
                  >
                    <Bell className="mr-2 w-5 h-5" />
                    M'inscrire à la Liste d'Attente
                    <Send className="ml-2 w-5 h-5" />
                  </Button>

                  <p className="text-xs text-gray-400 text-center">
                    En vous inscrivant, vous acceptez de recevoir des
                    communications concernant le projet drone ARDHI. Vous
                    pourrez vous désinscrire à tout moment.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Inscription Confirmée !
                  </h3>
                  <p className="text-gray-300 mb-6 max-w-md mx-auto">
                    Merci {name} ! Vous serez parmi les premiers informés du
                    lancement de notre solution drone. Surveillez votre boîte
                    email.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="bg-white/10 px-4 py-2 rounded-lg text-sm text-gray-300">
                      <span className="text-violet-400">✓</span> Liste d'attente
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-lg text-sm text-gray-300">
                      <span className="text-violet-400">✓</span> Offres exclusives
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-lg text-sm text-gray-300">
                      <span className="text-violet-400">✓</span> Accès prioritaire
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 text-center">
            {[
              { value: "250+", label: "Inscrits liste d'attente" },
              { value: "15", label: "Agriculteurs pilotes" },
              { value: "2027", label: "Lancement prévu" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-violet-400">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
