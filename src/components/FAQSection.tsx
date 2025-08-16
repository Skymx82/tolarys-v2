"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  // État pour suivre quelle question est ouverte
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Liste des questions/réponses
  const faqItems = [
    {
      question: "Qu'est-ce que l'accessibilité web et pourquoi est-ce important ?",
      answer: "L'accessibilité web consiste à rendre les sites internet utilisables par tous, y compris les personnes en situation de handicap. C'est important non seulement pour l'inclusion sociale et l'égalité d'accès à l'information, mais aussi pour des raisons légales (RGAA en France, ADA aux USA) et commerciales (élargissement de l'audience, amélioration du SEO et de l'expérience utilisateur)."
    },
    {
      question: "Comment savoir si mon site a des problèmes d'accessibilité ?",
      answer: "Sans audit spécialisé, il est difficile d'identifier tous les problèmes d'accessibilité. Des signes comme une navigation difficile au clavier, des contrastes insuffisants, l'absence de textes alternatifs pour les images ou des formulaires mal structurés peuvent indiquer des problèmes. Notre audit gratuit de la page d'accueil vous donnera un premier aperçu des améliorations possibles."
    },
    {
      question: "Combien de temps faut-il pour rendre mon site accessible ?",
      answer: "Le temps nécessaire dépend de la taille et de la complexité de votre site, ainsi que du niveau de conformité visé. Pour un petit site, les corrections peuvent prendre quelques jours à quelques semaines. Pour un grand site e-commerce, cela peut prendre plusieurs mois. Nous établissons toujours un calendrier réaliste après l'audit initial."
    },
    {
      question: "Est-ce que l'accessibilité va affecter le design de mon site ?",
      answer: "L'accessibilité n'implique pas nécessairement de sacrifier l'esthétique. Un site bien conçu peut être à la fois beau et accessible. Il s'agit souvent d'ajustements subtils comme l'amélioration des contrastes, l'agrandissement de certaines zones cliquables ou l'ajout d'alternatives textuelles. Nous veillons à préserver l'identité visuelle de votre site tout en le rendant accessible."
    },
    {
      question: "Quels sont les risques juridiques si mon site n'est pas accessible ?",
      answer: "En France, les organismes publics sont légalement tenus de respecter le RGAA (Référentiel Général d'Amélioration de l'Accessibilité). Pour les entreprises privées, bien que moins stricte, la législation évolue vers plus d'exigences. À l'international, notamment aux États-Unis, des entreprises ont fait l'objet de poursuites judiciaires pour non-conformité à l'ADA (Americans with Disabilities Act). Au-delà de l'aspect légal, l'inaccessibilité peut nuire à votre image de marque et exclure une partie de votre audience potentielle."
    },
    {
      question: "L'accessibilité va-t-elle améliorer mon référencement (SEO) ?",
      answer: "Absolument ! De nombreuses pratiques d'accessibilité améliorent directement le SEO : structure sémantique du HTML, textes alternatifs pour les images, sous-titres pour les vidéos, navigation claire... Google valorise de plus en plus les sites accessibles dans ses algorithmes. Un site accessible est généralement mieux indexé et mieux classé dans les résultats de recherche."
    }
  ];

  // Fonction pour basculer l'état d'ouverture d'une question
  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-4 text-[#1D1D1F]">
            Questions <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899]">fréquentes</span>
          </h2>
          <p className="text-[#86868B] max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur l'accessibilité web et nos services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium text-[#1D1D1F]">{item.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg 
                    className="w-5 h-5 text-[#6366F1]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </motion.span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 border-t border-gray-100 text-[#86868B]">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#86868B] mb-6">
            Vous avez d'autres questions ? N'hésitez pas à nous contacter.
          </p>
          <a 
            href="/contact"
            className="inline-block py-3 px-8 rounded-lg bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] text-white font-medium transition-transform hover:scale-105 active:scale-95"
          >
            Nous contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
