import { partners, partnerStats } from "@/data/partners";

export function PartnersSection() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-gray-100">
          {partnerStats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-gray-900">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="pt-12">
          <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wide mb-8">
            Trusted by leading agricultural organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {partners.slice(0, 8).map((partner) => (
              <div
                key={partner.id}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <span className="text-sm font-medium">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
