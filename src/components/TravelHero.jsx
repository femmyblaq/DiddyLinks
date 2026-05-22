import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Play, ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import diddyLogo from "../assets/Images/diddy_logo.png";

export default function TravelHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>

      {/* Blur Effects */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>

      {/* NAVBAR */}
      <header className="absolute left-0 top-0 z-50 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src={diddyLogo}
              alt="DIDDYLINKS"
              className="h-16 w-auto sm:h-20"
            />
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 text-sm font-medium text-white lg:flex">
            <Link
              to="/destinations"
              className="transition hover:text-cyan-300"
            >
              Destinations
            </Link>

            <Link
              to="/packages"
              className="transition hover:text-cyan-300"
            >
              Packages
            </Link>

            <Link
              to="/about"
              className="transition hover:text-cyan-300"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="transition hover:text-cyan-300"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Button */}
          <button className="hidden rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black lg:block">
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="z-50 text-white lg:hidden"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute left-0 top-0 flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-black/95 text-xl font-semibold text-white backdrop-blur-xl lg:hidden">
            <Link to="/destinations" onClick={() => setMenuOpen(false)}>
              Destinations
            </Link>

            <Link to="/packages" onClick={() => setMenuOpen(false)}>
              Packages
            </Link>

            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            <button className="mt-4 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black">
              Book Now
            </button>
          </div>
        )}
      </header>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex min-h-screen items-center pt-32 pb-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6 flex flex-wrap items-center gap-2 text-cyan-300">
              <MapPin size={18} />

              <span className="text-xs uppercase tracking-[4px] sm:text-sm">
                Explore The World
              </span>
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
              Discover Your Next
              <span className="block text-cyan-300">
                Luxury Adventure
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
              Diddylinks Services Limited is a licensed travel and aviation
              company dedicated to providing professional travel solutions,
              luxury experiences, and world-class customer satisfaction for
              individuals and businesses.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <button className="group flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-300">
                Explore Tours

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <button className="flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black">
                <Play size={18} />
                Watch Video
              </button>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-2 gap-8 sm:flex sm:flex-wrap sm:gap-12">
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

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-md rounded-[32px] border border-white/20 bg-white/10 p-4 backdrop-blur-xl sm:p-6">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                alt="Travel"
                className="h-64 w-full rounded-3xl object-cover sm:h-72"
              />

              <div className="mt-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Maldives Escape
                    </h3>

                    <p className="text-gray-300">
                      7 Days Luxury Vacation
                    </p>
                  </div>

                  <div className="w-fit rounded-2xl bg-cyan-400 px-4 py-2 font-bold text-black">
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