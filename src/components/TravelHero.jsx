import React from "react";
import { motion } from "framer-motion";
import { MapPin, Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function TravelHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70"></div>

      {/* Floating Blur Effects */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>

      {/* Navbar */}
      <header className="absolute top-0 left-0 z-30 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-black tracking-widest text-white"
          >
            DIDDYLINKS
          </motion.h1>

          <nav className="hidden gap-8 text-sm font-medium text-white md:flex">
            <Link to="/destinations" className="transition hover:text-cyan-300">
              Destinations
            </Link>
            <Link to="/packages" className="transition hover:text-cyan-300">
              Packages
            </Link>
            <Link to="/about" className="transition hover:text-cyan-300">
              About
            </Link>
            <Link to="/contact" className="transition hover:text-cyan-300">
              Contact
            </Link>
          </nav>

          <button className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black">
            Book Now
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6 flex items-center gap-2 text-cyan-300">
              <MapPin size={18} />
              <span className="text-sm uppercase tracking-[4px]">
                Explore The World
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-tight text-white">
              Discover Your Next
              <span className="block text-cyan-300">
                Luxury Adventure
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-200">
              Diddylinks Services Limited is a licensed travel and aviation company with
the sole purpose of reaching the diverse needs of its clients.
In this new era of constant change and management in multibusiness, at
Diddylinks, we believe in providing the best of professional delivery of
services.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">
              <button className="group flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-300">
                Explore Tours
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <button className="flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black">
                <Play size={18} />
                Watch Video
              </button>
            </div>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap gap-10">
              <div>
                <h3 className="text-3xl font-bold text-white">15K+</h3>
                <p className="text-gray-300">Happy Travelers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">120+</h3>
                <p className="text-gray-300">Destinations</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">4.9</h3>
                <p className="text-gray-300">Customer Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden items-center justify-center lg:flex"
          >
            <div className="w-full max-w-md rounded-[32px] border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                alt="Travel"
                className="h-72 w-full rounded-3xl object-cover"
              />

              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Maldives Escape
                    </h3>
                    <p className="text-gray-300">
                      7 Days Luxury Vacation
                    </p>
                  </div>

                  <div className="rounded-2xl bg-cyan-400 px-4 py-2 font-bold text-black">
                    $2,450
                  </div>
                </div>

                <button className="mt-6 w-full rounded-2xl bg-white py-4 font-semibold text-black transition hover:bg-cyan-300">
                  Reserve Your Spot
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}