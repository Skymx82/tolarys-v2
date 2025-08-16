"use client";

import React from "react";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
import Link from "next/link";

const DemoSection = () => {
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

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Headline */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#1D1D1F]"
          {...fadeInAnimation}
        >
          Voyez la <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899]">différence concrète</span> sur votre site
        </motion.h2>
        
        {/* Statistiques clés */}
        <motion.div 
          className="text-center mb-12"
          {...fadeInAnimation}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xl text-[#86868B] max-w-3xl mx-auto">
            Amélioration moyenne de <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] font-medium">47%</span> du score d'accessibilité
          </p>
        </motion.div>

        {/* Démonstration - Comparaison avant/après */}
        <motion.div 
          className="mb-16"
          {...fadeInAnimation}
          transition={{ delay: 0.3 }}
        >
          <div className="relative max-w-4xl mx-auto">
            {/* SVG de comparaison */}
            <svg className="w-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              {/* Fond gris pour la partie "Avant" */}
              <rect x="0" y="0" width="380" height="400" fill="#f5f5f7" rx="8" />
              
              {/* Fond blanc pour la partie "Après" */}
              <rect x="420" y="0" width="380" height="400" fill="#ffffff" rx="8" stroke="#6366F1" strokeWidth="2" />
              
              {/* Étiquette "Avant" */}
              <rect x="20" y="20" width="80" height="30" rx="15" fill="#1D1D1F" />
              <text x="60" y="40" fontFamily="Arial" fontSize="14" fill="white" textAnchor="middle" dominantBaseline="middle">Avant</text>
              
              {/* Étiquette "Après" */}
              <rect x="440" y="20" width="80" height="30" rx="15" fill="#6366F1" />
              <text x="480" y="40" fontFamily="Arial" fontSize="14" fill="white" textAnchor="middle" dominantBaseline="middle">Après</text>
              
              {/* Contenu "Avant" - Éléments d'interface non accessibles */}
              {/* Header */}
              <rect x="20" y="70" width="340" height="50" fill="#1D1D1F" />
              <rect x="40" y="85" width="100" height="20" fill="#444" />
              <rect x="240" y="85" width="100" height="20" fill="#444" />
              
              {/* Image sans alt */}
              <rect x="20" y="140" width="340" height="160" fill="#444" />
              <text x="190" y="220" fontFamily="Arial" fontSize="14" fill="#777" textAnchor="middle">Image sans attribut alt</text>
              <line x1="20" y1="140" x2="360" y2="300" stroke="#777" strokeWidth="2" />
              <line x1="360" y1="140" x2="20" y2="300" stroke="#777" strokeWidth="2" />
              
              {/* Formulaire non accessible */}
              <rect x="20" y="320" width="340" height="60" fill="#ddd" />
              <rect x="40" y="335" width="200" height="30" fill="white" />
              <rect x="260" y="335" width="80" height="30" fill="#444" />
              <text x="300" y="355" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle">Envoyer</text>
              <text x="40" y="325" fontFamily="Arial" fontSize="10" fill="#777">Champs sans labels</text>
              
              {/* Contenu "Après" - Éléments d'interface accessibles */}
              {/* Header */}
              <rect x="440" y="70" width="340" height="50" fill="#1D1D1F" />
              <rect x="460" y="85" width="100" height="20" fill="#6366F1" />
              <rect x="660" y="85" width="100" height="20" fill="#6366F1" />
              
              {/* Image avec alt */}
              <rect x="440" y="140" width="340" height="160" fill="#f5f5f7" />
              <rect x="460" y="160" width="300" height="120" fill="#fff" stroke="#6366F1" strokeWidth="2" />
              <text x="610" y="220" fontFamily="Arial" fontSize="14" fill="#1D1D1F" textAnchor="middle">Image avec attribut alt</text>
              <rect x="460" y="290" width="300" height="10" fill="#6366F1" rx="5" />
              
              {/* Formulaire accessible */}
              <rect x="440" y="320" width="340" height="60" fill="#f5f5f7" />
              <text x="460" y="335" fontFamily="Arial" fontSize="12" fill="#1D1D1F">Email</text>
              <rect x="460" y="340" width="200" height="30" fill="white" stroke="#6366F1" strokeWidth="1" rx="4" />
              <rect x="680" y="340" width="80" height="30" rx="15" fill="url(#gradient)" />
              <text x="720" y="360" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle">Envoyer</text>
              
              {/* Dégradé pour le bouton */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="50%" stopColor="#D946EF" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
              
              {/* Ligne de séparation */}
              <line x1="400" y1="0" x2="400" y2="400" stroke="#ddd" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </div>
        </motion.div>

        {/* CTA */}
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
              href="/audit"
              className="inline-flex items-center justify-center font-medium transition-all focus:outline-none rounded-full text-base px-8 py-3.5 bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] text-white shadow-lg shadow-purple-500/20"
            >
              Testez votre site maintenant
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
