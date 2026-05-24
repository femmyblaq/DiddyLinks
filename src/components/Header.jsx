import { Link } from "react-router-dom";
import diddyLogo from "../assets/Images/diddy_logo.png";
import {Menu, X} from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
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
      </header></>
    )
}