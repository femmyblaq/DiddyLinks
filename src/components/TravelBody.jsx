export default function TravelBody() {
  
  const destinations = [
    {
      title: 'Santorini, Greece',
      image:
        'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop',
      price: '$2,400',
    },
    {
      title: 'Bali, Indonesia',
      image:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop',
      price: '$1,850',
    },
    {
      title: 'Dubai, UAE',
      image:
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
      price: '$3,100',
    },
  ];

  const services = [
    {
      title: 'Luxury Hotels',
      desc: 'Stay in handpicked premium resorts and luxury accommodations worldwide.',
      icon: '🏨',
    },
    {
      title: 'Flight Booking',
      desc: 'Affordable and premium flight experiences tailored to your journey.',
      icon: '✈️',
    },
    {
      title: 'Private Tour Guide',
      desc: 'Experience destinations deeply with expert local tour guides.',
      icon: '🧭',
    },
    {
      title: 'Adventure Trips',
      desc: 'From mountain climbing to island hopping and safari adventures.',
      icon: '🌍',
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Popular Destinations */}
      <section className="relative overflow-hidden px-6 py-28 lg:px-20">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>

        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
              Popular Destinations
            </span>

            <h2 className="mt-6 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              Discover The Most
              <span className="block text-cyan-300">Beautiful Places On Earth</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg text-gray-400">
              Curated experiences crafted for travelers seeking unforgettable
              memories, luxury escapes, and breathtaking adventures.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {destinations.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-lg transition duration-500 hover:-translate-y-3 hover:border-cyan-400/40"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-gray-300">
                        Premium Vacation Package
                      </p>
                    </div>

                    <div className="rounded-2xl bg-cyan-400 px-4 py-2 font-bold text-black shadow-xl">
                      {item.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-28 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
              alt="Travel Experience"
              className="rounded-[40px] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-8 -right-8 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
              <h3 className="text-5xl font-black text-cyan-300">12+</h3>
              <p className="mt-2 text-gray-300">
                Years Creating Luxury Experiences
              </p>
            </div>
          </div>

          <div>
            <span className="rounded-full border border-orange-400/30 bg-orange-400/10 px-5 py-2 text-sm font-medium text-orange-300">
              Why Choose Us
            </span>

            <h2 className="mt-8 text-4xl font-black leading-tight md:text-6xl">
              We Make Every
              <span className="block text-orange-300">Journey Extraordinary</span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-gray-400">
              Our mission is to redefine travel experiences through luxury,
              comfort, personalization, and unforgettable adventures.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/30 hover:bg-white/10"
                >
                  <div className="text-4xl">{service.icon}</div>

                  <h3 className="mt-4 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-gray-400">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Banner */}
      <section className="px-6 py-10 lg:px-20">
        <div className="relative overflow-hidden rounded-[40px] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1600&auto=format&fit=crop"
            alt="Luxury Banner"
            className="h-[600px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55"></div>

          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div className="max-w-4xl">
              <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md">
                Luxury Travel Experience
              </span>

              <h2 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
                Travel Beyond
                <span className="block text-cyan-300">Your Imagination</span>
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-300">
                Experience curated adventures, breathtaking destinations, and
                premium services designed for modern explorers.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                <button className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-300">
                  Start Your Journey
                </button>

                <button className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black">
                  Explore Packages
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-28 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
              Testimonials
            </span>

            <h2 className="mt-6 text-4xl font-black md:text-6xl">
              What Travelers
              <span className="block text-cyan-300">Say About Us</span>
            </h2>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={`https://i.pravatar.cc/150?img=${item + 10}`}
                    alt="Client"
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-xl font-bold">Luxury Traveler</h3>
                    <p className="text-gray-400">Adventure Enthusiast</p>
                  </div>
                </div>

                <p className="mt-8 leading-relaxed text-gray-300">
                  “This was one of the best travel experiences I have ever had.
                  Everything from accommodation to tours was absolutely premium
                  and unforgettable.”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 pb-28 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-gradient-to-r from-cyan-500/20 to-orange-500/20 p-10 backdrop-blur-xl md:p-16">
          <div className="text-center">
            <h2 className="text-4xl font-black md:text-6xl">
              Ready For Your
              <span className="block text-cyan-300">Next Adventure?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              Subscribe to receive exclusive travel deals, premium destination
              guides, and luxury vacation inspiration.
            </p>

            <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl md:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-14 flex-1 rounded-2xl bg-transparent px-6 text-white outline-none placeholder:text-gray-400"
              />

              <button className="rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:bg-cyan-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
       

      
    </div>
  );
}
