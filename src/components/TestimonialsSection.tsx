"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Données des témoignages
const testimonials = [
  // Première ligne
  [
    {
      id: 1,
      name: "Sophie Martin",
      role: "Directrice Marketing, TechVision",
      quote: "L'amélioration de l'accessibilité a augmenté notre trafic de 32% en seulement 3 mois.",
      improvement: "32%",
      image: "/testimonials/profile1.jpg"
    },
    {
      id: 2,
      name: "Thomas Dubois",
      role: "CEO, FinanceExpert",
      quote: "Notre score d'accessibilité est passé de 42 à 98 en quelques semaines. Impressionnant !",
      improvement: "56pts",
      image: "/testimonials/profile2.jpg"
    },
    {
      id: 3,
      name: "Émilie Rousseau",
      role: "Responsable UX, ShopOnline",
      quote: "La conformité RGAA nous a ouvert de nouveaux marchés dans le secteur public.",
      improvement: "41%",
      image: "/testimonials/profile3.jpg"
    },
    {
      id: 4,
      name: "Alexandre Petit",
      role: "Directeur Technique, MediaGroup",
      quote: "L'expertise de Tolarys a transformé notre approche de l'accessibilité numérique.",
      improvement: "29%",
      image: "/testimonials/profile4.jpg"
    }
  ],
  // Deuxième ligne
  [
    {
      id: 5,
      name: "Julie Moreau",
      role: "Responsable Digital, HealthCare",
      quote: "Notre site est enfin accessible à tous nos patients, y compris ceux avec des handicaps.",
      improvement: "45%",
      image: "/testimonials/profile5.jpg"
    },
    {
      id: 6,
      name: "Nicolas Bernard",
      role: "Fondateur, StartupLab",
      quote: "L'accessibilité n'est plus une contrainte mais un avantage concurrentiel pour nous.",
      improvement: "38%",
      image: "/testimonials/profile6.jpg"
    },
    {
      id: 7,
      name: "Camille Leroy",
      role: "Cheffe de Projet, AgenceWeb",
      quote: "La méthodologie de Tolarys est claire, efficace et produit des résultats concrets.",
      improvement: "52%",
      image: "/testimonials/profile7.jpg"
    },
    {
      id: 8,
      name: "Pierre Durand",
      role: "DSI, Retail Group",
      quote: "Notre équipe est maintenant autonome sur les questions d'accessibilité. Merci !",
      improvement: "37%",
      image: "/testimonials/profile8.jpg"
    }
  ],
  // Troisième ligne
  [
    {
      id: 9,
      name: "Marie Lambert",
      role: "Responsable Communication, EduTech",
      quote: "Nos contenus pédagogiques sont désormais accessibles à tous les étudiants.",
      improvement: "48%",
      image: "/testimonials/profile9.jpg"
    },
    {
      id: 10,
      name: "David Mercier",
      role: "Product Owner, SaaS Solutions",
      quote: "L'accessibilité est devenue une priorité dans notre roadmap produit.",
      improvement: "43%",
      image: "/testimonials/profile10.jpg"
    },
    {
      id: 11,
      name: "Laura Girard",
      role: "Directrice Générale, ConseilDigital",
      quote: "Tolarys a su nous accompagner avec professionnalisme et expertise.",
      improvement: "39%",
      image: "/testimonials/profile11.jpg"
    },
    {
      id: 12,
      name: "Mathieu Robert",
      role: "CTO, TechInnovation",
      quote: "La conformité EN 301 549 nous a permis de répondre à des appels d'offres européens.",
      improvement: "51%",
      image: "/testimonials/profile12.jpg"
    }
  ]
];

const TestimonialsSection = () => {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Headline */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#1D1D1F]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Ce que nos <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899]">clients</span> disent
        </motion.h2>
        
        {/* Carrousel de témoignages - 3 lignes avec décalage */}
        <div className="relative -mx-4 overflow-hidden">
          {testimonials.map((row, rowIndex) => (
            <motion.div
              key={`row-${rowIndex}`}
              className="mb-2 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 * rowIndex }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex overflow-hidden">
                <motion.div 
                  className="flex"
                  animate={{
                    x: ["0%", "-50%"],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 30 + rowIndex * 8,
                      ease: "linear"
                    }
                  }}
                >
                  {/* Triplet des témoignages pour créer un effet infini parfait */}
                  {[...row, ...row].map((testimonial, index) => (
                  <div 
                    key={`${testimonial.id}-${index}`}
                    className="flex-shrink-0 w-64 mx-2 bg-white rounded-lg p-3 shadow-sm border border-gray-100"
                  >
                    <div className="flex items-center mb-1">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100 mr-2">
                        {testimonial.image ? (
                          <Image 
                            src={testimonial.image} 
                            alt={`Photo de ${testimonial.name}`} 
                            width={32} 
                            height={32} 
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-r from-[#6366F1] to-[#D946EF] opacity-20"></div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium text-[#1D1D1F] text-xs">{testimonial.name}</h4>
                        <p className="text-xs text-[#86868B]">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-xs text-[#1D1D1F] mb-1">"{testimonial.quote}" <span className="inline-flex items-center text-xs"><span className="text-[#86868B]">Amélioration:</span> <span className="ml-1 font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899]">{testimonial.improvement}</span></span></p>
                  </div>
                ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
