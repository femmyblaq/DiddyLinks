
export default function About() {
    return (
        <>
          {/* About Us Page Section */}
             {/* About Us Page Section */}
      <section className="relative overflow-hidden bg-[#050505] px-6 py-32 lg:px-20">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"></div>

        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-2 text-sm font-medium text-cyan-300">
              About Diddylinks
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Creating World-Class
              <span className="block text-cyan-300">Travel Experiences</span>
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-gray-400">
              Diddylinks Services Limited is a licensed travel and aviation company founded in 2012 with the mission of delivering seamless travel convenience and unforgettable experiences for individuals, families, businesses, and corporate organizations.
            </p>
          </div>

          <div className="mt-24 grid gap-16 lg:grid-cols-2">
            <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              <h3 className="text-3xl font-black text-white">Our Mission</h3>

              <p className="mt-6 text-lg leading-relaxed text-gray-400">
                To provide excellent travel convenience from conception to completion with the best professional service while satisfying clients’ travel needs with comfort, professionalism, and reliability.
              </p>

              <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8">
                <h4 className="text-2xl font-bold text-cyan-300">Our Vision</h4>

                <p className="mt-4 leading-relaxed text-gray-300">
                  To become the leading ground operator in the travel industry and the most trusted travel partner delivering world-class service standards.
                </p>
              </div>
            </div>

            <div className="grid gap-8">
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white">What We Offer</h3>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {[
                    'Flight Ticketing & Reservation',
                    'Visa Advisory Services',
                    'Luxury Vacation Packages',
                    'Hotel Reservation',
                    'Corporate & Group Travel',
                    'Safari & Retreat Packages',
                    'Protocol & Airport Pickup',
                    'Travel Insurance Assistance',
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/10 bg-black/30 p-5 text-gray-300"
                    >
                      ✈️ {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-cyan-500/20 to-orange-500/20 p-8 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white">
                  Trusted By Leading Organizations
                </h3>

                <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-300 md:grid-cols-3">
                  {[
                    'Niger Delta Exploration',
                    'Lee Engineering',
                    'Mobil Exploring',
                    'Goodie Chemicals',
                    'Niger State Government',
                    'Pacific Silverline Ltd',
                  ].map((client, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/10 bg-black/30 p-4"
                    >
                      {client}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}