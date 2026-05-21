

export default function Contact() { 
    const companyInfo = {
    name: 'Diddylinks Services Limited',
    founded: '2012',
    location: 'Suite 67, Terrace Wing, Tafawa Balewa Square, Lagos Nigeria',
    phone1: '0802 327 8948',
    phone2: '0808 625 4722',
    email: 'diddylinksservicesltd@gmail.com',
    website: 'www.diddylinksservices.com.ng',
  };
    return (
        <>
        {/* Contact Us Page Section */}
      <section className="relative px-6 py-32 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="rounded-full border border-orange-400/20 bg-orange-400/10 px-6 py-2 text-sm font-medium text-orange-300">
              Contact Us
            </span>

            <h2 className="mt-8 text-5xl font-black md:text-7xl">
              Let’s Plan Your
              <span className="block text-orange-300">Next Journey</span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400">
              Reach out to Diddylinks Services Limited for premium travel assistance, bookings, reservations, visa support, and luxury vacation planning.
            </p>
          </div>

          <div className="mt-24 grid gap-12 lg:grid-cols-2">
            <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              <h3 className="text-3xl font-black text-white">
                Contact Information
              </h3>

              <div className="mt-10 space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-[3px] text-cyan-300">
                    Office Address
                  </p>
                  <h4 className="mt-2 text-xl font-semibold text-white">
                    {companyInfo.location}
                  </h4>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[3px] text-cyan-300">
                    Phone Numbers
                  </p>
                  <h4 className="mt-2 text-xl font-semibold text-white">
                    {companyInfo.phone1}
                  </h4>
                  <h4 className="text-xl font-semibold text-white">
                    {companyInfo.phone2}
                  </h4>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[3px] text-cyan-300">
                    Email Address
                  </p>
                  <h4 className="mt-2 text-xl font-semibold text-white">
                    {companyInfo.email}
                  </h4>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[3px] text-cyan-300">
                    Website
                  </p>
                  <h4 className="mt-2 text-xl font-semibold text-white">
                    {companyInfo.website}
                  </h4>
                </div>
              </div>
            </div>

            <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              <h3 className="text-3xl font-black text-white">
                Send A Message
              </h3>

              <form className="mt-10 space-y-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-16 w-full rounded-2xl border border-white/10 bg-black/30 px-6 text-white outline-none placeholder:text-gray-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-16 w-full rounded-2xl border border-white/10 bg-black/30 px-6 text-white outline-none placeholder:text-gray-500"
                />

                <input
                  type="text"
                  placeholder="Travel Destination"
                  className="h-16 w-full rounded-2xl border border-white/10 bg-black/30 px-6 text-white outline-none placeholder:text-gray-500"
                />

                <textarea
                  rows="6"
                  placeholder="Tell us about your travel plans..."
                  className="w-full rounded-2xl border border-white/10 bg-black/30 p-6 text-white outline-none placeholder:text-gray-500"
                ></textarea>

                <button className="w-full rounded-2xl bg-cyan-400 py-5 text-lg font-semibold text-black transition hover:bg-cyan-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>)
}