"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const OffersSection = () => {
  // Animation simplifiée pour éviter les erreurs TypeScript
  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" }
  };

  const offers = [
    {
      id: 1,
      name: "Audit partiel",
      description: "Page d'accueil uniquement",
      price: "Gratuit",
      features: [
        "Analyse de la page d'accueil",
        "Rapport des problèmes critiques",
        "Recommandations prioritaires",
        "Livraison sous 48h"
      ],
      highlight: "Appât pour conversion",
      cta: "Commencer gratuitement",
      ctaLink: "/audit",
      popular: false
    },
    {
      id: 2,
      name: "Audit complet",
      description: "Petit site (≤ 10 pages)",
      price: "250 - 500 €",
      features: [
        "Analyse complète du site",
        "Rapport détaillé par page",
        "Recommandations priorisées",
        "Consultation de 30 minutes",
        "Livraison sous 5 jours"
      ],
      highlight: "Le plus populaire",
      cta: "Demander un devis",
      ctaLink: "#contact",
      popular: true
    },
    {
      id: 3,
      name: "Audit e-commerce",
      description: "Site complexe (50+ pages)",
      price: "500 - 1 500 €",
      features: [
        "Analyse complète du site",
        "Focus sur le parcours d'achat",
        "Analyse des pages produits",
        "Rapport détaillé par section",
        "Consultation de 60 minutes",
        "Livraison sous 10 jours"
      ],
      highlight: "Pour les sites complexes",
      cta: "Demander un devis",
      ctaLink: "#contact",
      popular: false
    }
  ];

  const additionalServices = [
    {
      id: 1,
      name: "Mise en conformité",
      price: "50 - 80 €/h ou forfait",
      description: "Implémentation des recommandations selon la complexité"
    },
    {
      id: 2,
      name: "Abonnement suivi",
      price: "99 - 399 €/mois",
      description: "Surveillance continue selon trafic et fréquence"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="text-center mb-12"
          {...fadeInAnimation}
        >
          <h2 className="text-3xl font-bold mb-4 text-[#1D1D1F]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899]">
              Nos offres
            </span> adaptées à vos besoins
          </h2>
          <p className="text-[#86868B] max-w-2xl mx-auto">
            Des solutions sur mesure pour améliorer l'accessibilité de votre site, quel que soit sa taille ou sa complexité.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className={`rounded-xl border ${offer.popular ? 'border-[#D946EF] shadow-lg' : 'border-gray-200'} overflow-hidden flex flex-col`}
              {...fadeInAnimation}
              transition={{ delay: index * 0.2 }}
            >
              {offer.popular && (
                <div className="bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] text-white text-center py-1 text-sm font-medium">
                  {offer.highlight}
                </div>
              )}
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-[#1D1D1F] mb-2">{offer.name}</h3>
                <p className="text-[#86868B] text-sm mb-4">{offer.description}</p>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-[#1D1D1F]">{offer.price}</span>
                </div>
                <ul className="mb-6 space-y-2">
                  {offer.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-[#6366F1] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-[#1D1D1F]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0">
                <Link href={offer.ctaLink}>
                  <motion.div
                    className={`w-full py-3 px-4 rounded-lg text-center text-sm font-medium transition-colors ${
                      offer.popular 
                        ? 'bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] text-white' 
                        : 'bg-gray-100 text-[#1D1D1F] hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {offer.cta}
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-gray-50 rounded-xl p-8 mb-8"
          {...fadeInAnimation}
        >
          <h3 className="text-xl font-bold text-[#1D1D1F] mb-4">Services additionnels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h4 className="text-lg font-bold text-[#1D1D1F] mb-2">{service.name}</h4>
                <p className="text-[#86868B] text-sm mb-3">{service.description}</p>
                <div className="font-bold text-[#1D1D1F]">{service.price}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          {...fadeInAnimation}
        >
          <p className="text-[#86868B] mb-6">
            Besoin d'une solution personnalisée ? Contactez-nous pour discuter de vos besoins spécifiques.
          </p>
          <Link href="/contact">
            <motion.div
              className="inline-block py-3 px-8 rounded-lg bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] text-white font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nous contacter
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OffersSection;
