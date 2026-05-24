import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Plane,
} from "lucide-react";
import { Link } from "react-router-dom";
import diddyLogo from "../assets/Images/diddy_logo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Gradient Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>

      {/* Top CTA */}
      <div className="relative z-10 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-16 text-center lg:flex-row lg:text-left">
          <div>
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300">
              Luxury Travel Experience
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
              Ready For Your
              <span className="block text-cyan-300">
                Next Adventure?
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-300">
              Book A Trip
            </button>

            <button className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black">
              Explore Packages
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <img
              src={diddyLogo}
              alt="Diddylinks"
              className="h-20 w-auto"
            />

            <p className="mt-6 leading-relaxed text-gray-400">
              Diddylinks Services Limited is a premium travel and aviation
              company delivering unforgettable travel experiences, luxury
              vacations, and professional travel solutions worldwide.
            </p>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-4">
              {[
                FaFacebookF,
                FaInstagram,
                FaTwitter,
                FaLinkedinIn,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400 hover:text-black"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-8 flex flex-col gap-5 text-gray-400">
              <Link
                to="/"
                className="transition hover:translate-x-2 hover:text-cyan-300"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="transition hover:translate-x-2 hover:text-cyan-300"
              >
                About Us
              </Link>

              <Link
                to="/packages"
                className="transition hover:translate-x-2 hover:text-cyan-300"
              >
                Travel Packages
              </Link>

              <Link
                to="/destinations"
                className="transition hover:translate-x-2 hover:text-cyan-300"
              >
                Destinations
              </Link>

              <Link
                to="/contact"
                className="transition hover:translate-x-2 hover:text-cyan-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Our Services
            </h3>

            <div className="mt-8 flex flex-col gap-5 text-gray-400">
              <p className="transition hover:text-cyan-300">
                Flight Reservation
              </p>

              <p className="transition hover:text-cyan-300">
                Hotel Booking
              </p>

              <p className="transition hover:text-cyan-300">
                Visa Assistance
              </p>

              <p className="transition hover:text-cyan-300">
                Corporate Travel
              </p>

              <p className="transition hover:text-cyan-300">
                Luxury Vacations
              </p>

              <p className="transition hover:text-cyan-300">
                Airport Protocol
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Contact Info
            </h3>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-gray-400">
                    Suite 67, Terrace Wing,
                    Tafawa Balewa Square,
                    Lagos Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="text-gray-400">
                    0802 327 8948
                  </p>

                  <p className="text-gray-400">
                    0808 625 4722
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-gray-400 break-all">
                    diddylinksservicesltd@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 lg:flex-row">
            <div>
              <h3 className="text-3xl font-black">
                Join Our Newsletter
              </h3>

              <p className="mt-2 text-gray-400">
                Get exclusive travel deals and destination updates.
              </p>
            </div>

            <div className="flex w-full max-w-xl flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 w-full rounded-full border border-white/10 bg-white/5 px-6 pr-14 text-white outline-none placeholder:text-gray-500"
                />

                <Plane
                  size={18}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-cyan-300"
                />
              </div>

              <button className="flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:bg-cyan-300">
                Subscribe
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center text-sm text-gray-500 md:flex-row">
            <p>
              © 2026 Diddylinks Services Limited. All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="#" className="hover:text-cyan-300">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-cyan-300">
                Terms & Conditions
              </a>

              <a href="#" className="hover:text-cyan-300">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}