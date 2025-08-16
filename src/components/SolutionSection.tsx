"use client";

import { motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
import Link from "next/link";

const SolutionSection = () => {
  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { 
      opacity: 1, 
      y: 0, 
      transition: {
        duration: 0.8,
        ease: easeInOut
      }
    },
    viewport: { once: true, margin: "-100px" }
  };

  const steps = [
    {
      title: "Audit automatisé",
      description: "Analyse complète de votre site avec nos outils spécialisés pour détecter les problèmes d'accessibilité selon les normes RGAA et WCAG.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="24" fill="url(#gradient1)" fillOpacity="0.1" />
          <path d="M32 16H16C14.9 16 14 16.9 14 18V30C14 31.1 14.9 32 16 32H32C33.1 32 34 31.1 34 30V18C34 16.9 33.1 16 32 16ZM32 30H16V20H32V30ZM21 28H27C27.55 28 28 27.55 28 27C28 26.45 27.55 26 27 26H21C20.45 26 20 26.45 20 27C20 27.55 20.45 28 21 28ZM21 24H27C27.55 24 28 23.55 28 23C28 22.45 27.55 22 27 22H21C20.45 22 20 22.45 20 23C20 23.55 20.45 24 21 24Z" fill="url(#gradient1)" />
          <defs>
            <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0" stopColor="#6366F1"/>
              <stop offset="0.5" stopColor="#D946EF"/>
              <stop offset="1" stopColor="#EC4899"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      title: "Analyse experte",
      description: "Nos experts en accessibilité examinent manuellement votre site pour identifier les problèmes que les outils automatisés ne peuvent pas détecter.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="24" fill="url(#gradient2)" fillOpacity="0.1" />
          <path d="M24 14C20.13 14 17 17.13 17 21C17 24.87 20.13 28 24 28C27.87 28 31 24.87 31 21C31 17.13 27.87 14 24 14ZM24 26C21.24 26 19 23.76 19 21C19 18.24 21.24 16 24 16C26.76 16 29 18.24 29 21C29 23.76 26.76 26 24 26ZM33 32.12C32.24 31.38 31.12 31 30 31H18C16.88 31 15.76 31.38 15 32.12V33H33V32.12Z" fill="url(#gradient2)" />
          <defs>
            <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0" stopColor="#6366F1"/>
              <stop offset="0.5" stopColor="#D946EF"/>
              <stop offset="1" stopColor="#EC4899"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      title: "Rapport détaillé et plan d'action",
      description: "Recevez un rapport complet avec les problèmes identifiés, leur impact, et un plan d'action priorisé pour mettre votre site en conformité.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="24" fill="url(#gradient3)" fillOpacity="0.1" />
          <path d="M32 16H28.82C28.4 14.84 27.3 14 26 14H22C20.7 14 19.6 14.84 19.18 16H16C14.9 16 14 16.9 14 18V32C14 33.1 14.9 34 16 34H32C33.1 34 34 33.1 34 32V18C34 16.9 33.1 16 32 16ZM22 16H26V18H22V16ZM32 32H16V18H18V20H30V18H32V32ZM20 24H28C28.55 24 29 23.55 29 23C29 22.45 28.55 22 28 22H20C19.45 22 19 22.45 19 23C19 23.55 19.45 24 20 24ZM20 28H28C28.55 28 29 27.55 29 27C29 26.45 28.55 26 28 26H20C19.45 26 19 26.45 19 27C19 27.55 19.45 28 20 28Z" fill="url(#gradient3)" />
          <defs>
            <linearGradient id="gradient3" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0" stopColor="#6366F1"/>
              <stop offset="0.5" stopColor="#D946EF"/>
              <stop offset="1" stopColor="#EC4899"/>
            </linearGradient>
          </defs>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          {...fadeInAnimation}
        >
          <h2 className="text-4xl font-bold text-[#1D1D1F] mb-4">
            Un audit complet. <span className="bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] bg-clip-text text-transparent">Des résultats concrets.</span>
          </h2>
          <p className="text-xl text-[#86868B] max-w-3xl mx-auto">
            Notre méthodologie éprouvée combine outils automatisés et expertise humaine pour garantir une conformité totale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center p-6 border-t border-[#E5E5E5]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                transition: {
                  duration: 0.5,
                  delay: 0.2 + (index * 0.1)
                }
              }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">
                {step.title}
              </h3>
              <p className="text-[#86868B] mb-4">
                {step.description}
              </p>
              <div className="mt-auto pt-4">
                <div className="w-8 h-8 rounded-full bg-[#F5F5F7] flex items-center justify-center mx-auto">
                  <span className="text-[#1D1D1F] font-medium">{index + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          {...fadeInAnimation}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href="/methodologie"
              className="inline-flex items-center justify-center font-medium transition-all focus:outline-none rounded-full text-base px-6 py-2.5 bg-white text-[#1D1D1F] border border-[#1D1D1F]/10 hover:border-[#1D1D1F]/20 mx-auto"
            >
              Découvrez notre méthodologie
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
