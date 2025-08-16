"use client";

import { motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";

const ProblemSection = () => {
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

  const risks = [
    {
      title: "Risque juridique",
      description: <>Amendes pouvant atteindre <span className="bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] bg-clip-text text-transparent font-medium">20 000€</span> et mise en demeure par la DGCCRF</>
    },
    {
      title: "Risque d'image",
      description: <><span className="bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] bg-clip-text text-transparent font-medium">Impact négatif</span> sur votre réputation et votre marque employeur</>
    },
    {
      title: "Perte de clients",
      description: <><span className="bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] bg-clip-text text-transparent font-medium">12 millions de Français</span> en situation de handicap exclus de votre site</>
    },
    {
      title: "Perte de revenus",
      description: <>Réduction du taux de conversion et <span className="bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] bg-clip-text text-transparent font-medium">augmentation du taux de rebond</span></>
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
            82% des sites web français <span className="bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] bg-clip-text text-transparent">ne respectent pas la loi</span>
          </h2>
          <p className="text-xl text-[#86868B] max-w-3xl mx-auto">
            La loi impose l'accessibilité numérique depuis 2005, mais la majorité des sites restent non conformes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Visualisation statistique */}
          <motion.div 
            className="border-t border-[#E5E5E5] pt-8 flex flex-col items-center justify-center"
            {...fadeInAnimation}
            transition={{ delay: 0.2 }}
          >
            <div className="w-full h-64 relative">
              {/* Graphique SVG */}
              <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Axe X */}
                <line x1="40" y1="160" x2="360" y2="160" stroke="#E5E5E5" strokeWidth="2" />
                
                {/* Axe Y */}
                <line x1="40" y1="20" x2="40" y2="160" stroke="#E5E5E5" strokeWidth="2" />
                
                {/* Étiquettes X */}
                <text x="100" y="180" textAnchor="middle" fill="#86868B" fontSize="12">PME</text>
                <text x="200" y="180" textAnchor="middle" fill="#86868B" fontSize="12">ETI</text>
                <text x="300" y="180" textAnchor="middle" fill="#86868B" fontSize="12">Grands Groupes</text>
                
                {/* Étiquettes Y */}
                <text x="30" y="160" textAnchor="end" fill="#86868B" fontSize="12">0%</text>
                <text x="30" y="110" textAnchor="end" fill="#86868B" fontSize="12">50%</text>
                <text x="30" y="60" textAnchor="end" fill="#86868B" fontSize="12">75%</text>
                <text x="30" y="20" textAnchor="end" fill="#86868B" fontSize="12">100%</text>
                
                {/* Lignes de grille */}
                <line x1="40" y1="110" x2="360" y2="110" stroke="#E5E5E5" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="40" y1="60" x2="360" y2="60" stroke="#E5E5E5" strokeWidth="1" strokeDasharray="4 4" />
                
                {/* Barres de données - Non conformes */}
                <rect x="70" y="40" width="60" height="120" rx="4" fill="url(#gradient1)" stroke="none" />
                <rect x="170" y="60" width="60" height="100" rx="4" fill="url(#gradient1)" stroke="none" />
                <rect x="270" y="80" width="60" height="80" rx="4" fill="url(#gradient1)" stroke="none" />
                
                {/* Pourcentages */}
                <text x="100" y="30" textAnchor="middle" fill="#1D1D1F" fontSize="14" fontWeight="bold">88%</text>
                <text x="200" y="50" textAnchor="middle" fill="#1D1D1F" fontSize="14" fontWeight="bold">82%</text>
                <text x="300" y="70" textAnchor="middle" fill="#1D1D1F" fontSize="14" fontWeight="bold">76%</text>
                
                {/* Dégradés */}
                <defs>
                  <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#6366F1"/>
                    <stop offset="0.5" stopColor="#D946EF"/>
                    <stop offset="1" stopColor="#EC4899"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="text-sm text-[#86868B] mt-4 text-center">
              Source: Étude sur l'accessibilité numérique en France, 2024
            </p>
          </motion.div>

          {/* Liste des risques */}
          <motion.div 
            className="flex flex-col justify-center border-t border-[#E5E5E5] pt-8"
            {...fadeInAnimation}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-6">
              Les risques de la non-conformité
            </h3>
            <ul className="space-y-4">
              {risks.map((risk, index) => (
                <motion.li 
                  key={index}
                  className="border-b border-[#E5E5E5] pb-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0, 
                    transition: {
                      duration: 0.5,
                      delay: 0.2 + (index * 0.1)
                    }
                  }}
                  viewport={{ once: true }}
                >
                  <div>
                    <h4 className="font-medium text-[#1D1D1F]">{risk.title}</h4>
                    <p className="text-sm text-[#86868B]">{risk.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Témoignage */}
        <motion.div 
          className="border-t border-[#E5E5E5] pt-8 max-w-3xl mx-auto"
          {...fadeInAnimation}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col items-center text-center">
            <blockquote className="text-xl italic text-[#1D1D1F] mb-6">
              <span className="bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] bg-clip-text text-transparent font-bold">"</span>
              Suite à une mise en demeure pour non-conformité, nous avons dû mobiliser en urgence toute notre équipe technique. Le coût total de la mise en conformité précipitée a dépassé 50 000€, sans compter l'impact sur notre image.
              <span className="bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] bg-clip-text text-transparent font-bold">"</span>
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p className="font-medium text-[#1D1D1F]">Jean Martin</p>
                <p className="text-sm text-[#86868B]">Directeur Digital, Entreprise du CAC 40</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
