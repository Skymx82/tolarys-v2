"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Vérifier le scroll initial
    if (window.scrollY > 10) {
      setScrolled(true);
    }
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
      style={{ backgroundColor: scrolled ? "white" : "transparent" }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo avec nom */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt="Tolarys Logo" 
            width={120} 
            height={40} 
            className="h-10 w-auto" 
          />
          <span className="ml-2 text-[#1D1D1F] font-medium text-xl">Tolarys</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-[#1D1D1F] hover:text-[#6366F1] transition-colors">
            Accueil
          </Link>
          <Link href="/site" className="text-[#1D1D1F] hover:text-[#6366F1] transition-colors">
            Création de sites web
          </Link>
          <Link href="/#contact" className="text-[#1D1D1F] hover:text-[#6366F1] transition-colors">
            Contact
          </Link>
          <Link href="/audit">
            <motion.button
              className="bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Audit gratuit
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#1D1D1F] focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-[#1D1D1F] hover:text-[#6366F1] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              href="/site" 
              className="text-[#1D1D1F] hover:text-[#6366F1] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Site web
            </Link>
            <Link 
              href="/#contact" 
              className="text-[#1D1D1F] hover:text-[#6366F1] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/audit"
              onClick={() => setMobileMenuOpen(false)}
            >
              <button className="bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] text-white px-6 py-2 rounded-full font-medium w-full">
                Audit gratuit
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
