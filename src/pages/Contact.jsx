import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Send,
} from "lucide-react";

export default function Contact() {
  const companyInfo = {
    name: "Diddylinks Services Limited",
    founded: "2012",
    location:
      "Suite 67, Terrace Wing, Tafawa Balewa Square, Lagos Nigeria",
    phone1: "+234 802 327 8948",
    phone2: "+234 808 625 4722",
    email: "diddylinksservicesltd@gmail.com",
    website: "www.diddylinksservices.com.ng",
  };

  return (
    <section className="relative overflow-hidden bg-[#050816] px-4 py-28 text-white sm:px-6 lg:px-20">
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl"></div>

      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md">
            Contact Us
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
            Let’s Create Your
            <span className="block bg-gradient-to-r from-cyan-300 to-orange-300 bg-clip-text text-transparent">
              Dream Journey
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Reach out to Diddylinks Services Limited for luxury travel
            experiences, flight reservations, visa assistance, vacation
            planning, and premium travel support worldwide.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* Contact Info Card */}
          <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl sm:p-10">
            {/* Card Glow */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl"></div>

            <h3 className="relative z-10 text-3xl font-black text-white">
              Contact Information
            </h3>

            <p className="relative z-10 mt-4 leading-relaxed text-gray-400">
              We are available to assist you with reservations, bookings,
              business travel, tours, visa guidance, and personalized luxury
              vacation experiences.
            </p>

            <div className="relative z-10 mt-12 space-y-8">
              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <MapPin size={24} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[3px] text-cyan-300">
                    Office Address
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                    {companyInfo.location}
                  </h4>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-400/10 text-orange-300">
                  <Phone size={24} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[3px] text-orange-300">
                    Phone Numbers
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-white">
                    {companyInfo.phone1}
                  </h4>

                  <h4 className="text-lg font-semibold text-white">
                    {companyInfo.phone2}
                  </h4>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[3px] text-cyan-300">
                    Email Address
                  </p>

                  <h4 className="mt-2 break-all text-lg font-semibold text-white">
                    {companyInfo.email}
                  </h4>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-400/10 text-orange-300">
                  <Globe size={24} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[3px] text-orange-300">
                    Website
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-white">
                    {companyInfo.website}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl sm:p-10">
            {/* Glow */}
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-orange-400/20 blur-3xl"></div>

            <h3 className="relative z-10 text-3xl font-black text-white">
              Send A Message
            </h3>

            <p className="relative z-10 mt-4 text-gray-400">
              Tell us about your dream destination and we’ll help you create an
              unforgettable travel experience.
            </p>

            <form className="relative z-10 mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-16 rounded-2xl border border-white/10 bg-black/30 px-6 text-white outline-none transition focus:border-cyan-400"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-16 rounded-2xl border border-white/10 bg-black/30 px-6 text-white outline-none transition focus:border-cyan-400"
                />
              </div>

              <input
                type="text"
                placeholder="Travel Destination"
                className="h-16 w-full rounded-2xl border border-white/10 bg-black/30 px-6 text-white outline-none transition focus:border-cyan-400"
              />

              <textarea
                rows="7"
                placeholder="Tell us about your travel plans..."
                className="w-full rounded-2xl border border-white/10 bg-black/30 p-6 text-white outline-none transition focus:border-cyan-400"
              ></textarea>

              <button className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-orange-300 py-5 text-lg font-bold text-black transition hover:scale-[1.02]">
                Send Message

                <Send
                  size={20}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}