"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const SitePage = () => {
  const [activeTab, setActiveTab] = useState("vitrine");

  return (
    <>
      <Navbar />
      <main>
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1D1D1F]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899]">
                  Création de sites web sur mesure
                </span>
              </h1>
              <p className="text-[#86868B] max-w-3xl mx-auto text-lg">
                Des sites web vitrines et e-commerce professionnels, accessibles et conformes aux normes légales
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg"
              >
                <svg
                  viewBox="0 0 600 400"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                >
                  {/* Fond d'écran */}
                  <rect x="50" y="50" width="500" height="300" rx="10" fill="#f0f4f8" stroke="#d1d5db" strokeWidth="2" />
                  
                  {/* Écran d'ordinateur */}
                  <rect x="100" y="80" width="400" height="220" rx="4" fill="#ffffff" stroke="#d1d5db" strokeWidth="2" />
                  
                  {/* Base de l'ordinateur */}
                  <rect x="220" y="300" width="160" height="10" rx="2" fill="#9ca3af" />
                  <rect x="250" y="310" width="100" height="5" rx="2" fill="#6b7280" />
                  
                  {/* Barre de navigation */}
                  <rect x="100" y="80" width="400" height="30" rx="4" fill="#6366F1" />
                  <circle cx="115" cy="95" r="5" fill="#ef4444" />
                  <circle cx="135" cy="95" r="5" fill="#f59e0b" />
                  <circle cx="155" cy="95" r="5" fill="#10b981" />
                  
                  {/* Logo */}
                  <rect x="130" y="130" width="100" height="30" rx="4" fill="#D946EF" />
                  
                  {/* Menu de navigation */}
                  <rect x="350" y="130" width="30" height="8" rx="2" fill="#6366F1" />
                  <rect x="390" y="130" width="30" height="8" rx="2" fill="#6366F1" />
                  <rect x="430" y="130" width="30" height="8" rx="2" fill="#6366F1" />
                  
                  {/* Contenu du site */}
                  <rect x="130" y="180" width="340" height="40" rx="4" fill="#EC4899" opacity="0.7" />
                  
                  {/* Paragraphes */}
                  <rect x="130" y="230" width="340" height="8" rx="2" fill="#d1d5db" />
                  <rect x="130" y="245" width="280" height="8" rx="2" fill="#d1d5db" />
                  <rect x="130" y="260" width="320" height="8" rx="2" fill="#d1d5db" />
                  
                  {/* Éléments de design */}
                  <circle cx="450" cy="200" r="15" fill="#6366F1" opacity="0.6" />
                  <rect x="420" y="230" width="50" height="20" rx="10" fill="#D946EF" opacity="0.6" />
                  
                  {/* Code qui flotte */}
                  <g transform="translate(30, 120)">
                    <rect width="50" height="10" rx="2" fill="#6366F1" opacity="0.3" />
                    <rect y="15" width="40" height="10" rx="2" fill="#D946EF" opacity="0.3" />
                    <rect y="30" width="45" height="10" rx="2" fill="#EC4899" opacity="0.3" />
                    <rect y="45" width="35" height="10" rx="2" fill="#6366F1" opacity="0.3" />
                  </g>
                  
                  <g transform="translate(520, 180)">
                    <rect width="50" height="10" rx="2" fill="#6366F1" opacity="0.3" />
                    <rect y="15" width="40" height="10" rx="2" fill="#D946EF" opacity="0.3" />
                    <rect y="30" width="45" height="10" rx="2" fill="#EC4899" opacity="0.3" />
                  </g>
                  
                  {/* Texte "Site Web" */}
                  <text x="300" y="200" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#ffffff" textAnchor="middle">SITE WEB</text>
                  
                  {/* Icônes de design responsive */}
                  <rect x="40" y="180" width="40" height="60" rx="4" fill="#f0f4f8" stroke="#d1d5db" strokeWidth="1" />
                  <rect x="45" y="190" width="30" height="40" rx="2" fill="#ffffff" stroke="#d1d5db" strokeWidth="1" />
                  
                  <rect x="40" y="250" width="60" height="40" rx="4" fill="#f0f4f8" stroke="#d1d5db" strokeWidth="1" />
                  <rect x="45" y="255" width="50" height="30" rx="2" fill="#ffffff" stroke="#d1d5db" strokeWidth="1" />
                </svg>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1D1D1F]">
                  Votre projet web, notre expertise
                </h2>
                <p className="text-[#86868B] mb-6">
                  Chez Tolarys, nous concevons des sites web qui allient esthétique moderne, 
                  performances techniques et accessibilité. Chaque projet est réalisé sur mesure 
                  pour répondre parfaitement à vos besoins et objectifs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#1D1D1F]">Design personnalisé et responsive</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#1D1D1F]">Conformité RGPD et mentions légales incluses</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#1D1D1F]">Accessibilité intégrée dès la conception</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#1D1D1F]">Optimisation SEO pour un meilleur référencement</span>
                  </li>
                </ul>
                <Link 
                  href="/#contact"
                  className="inline-block py-3 px-8 rounded-lg bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] text-white font-medium transition-transform hover:scale-105 active:scale-95"
                >
                  Demander un devis gratuit
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1D1D1F]">
                Nos solutions web
              </h2>
              <p className="text-[#86868B] max-w-3xl mx-auto">
                Découvrez nos offres adaptées à vos besoins
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center mb-8">
              <button
                onClick={() => setActiveTab("vitrine")}
                className={`px-6 py-3 mx-2 mb-4 rounded-lg font-medium transition-colors ${
                  activeTab === "vitrine"
                    ? "bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Site vitrine
              </button>
              <button
                onClick={() => setActiveTab("ecommerce")}
                className={`px-6 py-3 mx-2 mb-4 rounded-lg font-medium transition-colors ${
                  activeTab === "ecommerce"
                    ? "bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Site e-commerce
              </button>
            </div>

            {activeTab === "vitrine" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-[#1D1D1F]">Site vitrine professionnel</h3>
                    <p className="text-[#86868B] mb-6">
                      Présentez votre entreprise, vos services ou votre portfolio avec un site vitrine 
                      élégant et performant. Notre solution inclut tout ce dont vous avez besoin pour 
                      une présence en ligne professionnelle.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[#1D1D1F]">Design sur mesure adapté à votre image de marque</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[#1D1D1F]">Pages de présentation, services, contact, etc.</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[#1D1D1F]">Formulaire de contact et intégration de médias</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[#1D1D1F]">Mentions légales et politique de confidentialité conformes</span>
                      </li>
                    </ul>
                    <p className="text-lg font-semibold text-[#1D1D1F] mb-4">À partir de 1500€ HT</p>
                    <Link 
                      href="/#contact"
                      className="inline-block py-3 px-6 rounded-lg bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] text-white font-medium transition-transform hover:scale-105 active:scale-95"
                    >
                      Demander un devis
                    </Link>
                  </div>
                  <div>
                    <svg
                      viewBox="0 0 600 400"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-auto rounded-lg shadow-md"
                    >
                      {/* Fond d'écran */}
                      <rect x="50" y="50" width="500" height="300" rx="10" fill="#f0f4f8" stroke="#d1d5db" strokeWidth="2" />
                      
                      {/* Écran d'ordinateur */}
                      <rect x="100" y="80" width="400" height="220" rx="4" fill="#ffffff" stroke="#d1d5db" strokeWidth="2" />
                      
                      {/* Base de l'ordinateur */}
                      <rect x="220" y="300" width="160" height="10" rx="2" fill="#9ca3af" />
                      <rect x="250" y="310" width="100" height="5" rx="2" fill="#6b7280" />
                      
                      {/* Barre de navigation */}
                      <rect x="100" y="80" width="400" height="30" rx="4" fill="#6366F1" />
                      <circle cx="115" cy="95" r="5" fill="#ef4444" />
                      <circle cx="135" cy="95" r="5" fill="#f59e0b" />
                      <circle cx="155" cy="95" r="5" fill="#10b981" />
                      
                      {/* Logo */}
                      <rect x="130" y="130" width="100" height="30" rx="4" fill="#D946EF" />
                      
                      {/* Menu de navigation */}
                      <rect x="350" y="130" width="30" height="8" rx="2" fill="#6366F1" />
                      <rect x="390" y="130" width="30" height="8" rx="2" fill="#6366F1" />
                      <rect x="430" y="130" width="30" height="8" rx="2" fill="#6366F1" />
                      
                      {/* Contenu principal */}
                      <rect x="130" y="180" width="340" height="40" rx="4" fill="#f0f4f8" />
                      
                      {/* Sections de contenu */}
                      <rect x="130" y="230" width="100" height="60" rx="4" fill="#f0f4f8" stroke="#d1d5db" strokeWidth="1" />
                      <rect x="240" y="230" width="100" height="60" rx="4" fill="#f0f4f8" stroke="#d1d5db" strokeWidth="1" />
                      <rect x="350" y="230" width="100" height="60" rx="4" fill="#f0f4f8" stroke="#d1d5db" strokeWidth="1" />
                      
                      {/* Icônes dans les sections */}
                      <circle cx="180" cy="245" r="10" fill="#6366F1" opacity="0.6" />
                      <circle cx="290" cy="245" r="10" fill="#D946EF" opacity="0.6" />
                      <circle cx="400" cy="245" r="10" fill="#EC4899" opacity="0.6" />
                      
                      {/* Texte dans les sections */}
                      <rect x="140" y="265" width="80" height="6" rx="2" fill="#d1d5db" />
                      <rect x="140" y="275" width="60" height="6" rx="2" fill="#d1d5db" />
                      
                      <rect x="250" y="265" width="80" height="6" rx="2" fill="#d1d5db" />
                      <rect x="250" y="275" width="60" height="6" rx="2" fill="#d1d5db" />
                      
                      <rect x="360" y="265" width="80" height="6" rx="2" fill="#d1d5db" />
                      <rect x="360" y="275" width="60" height="6" rx="2" fill="#d1d5db" />
                      
                      {/* Texte "SITE VITRINE" */}
                      <text x="300" y="160" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#1D1D1F" textAnchor="middle">SITE VITRINE</text>
                    </svg>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "ecommerce" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-[#1D1D1F]">Boutique en ligne complète</h3>
                    <p className="text-[#86868B] mb-6">
                      Vendez vos produits ou services en ligne avec une solution e-commerce 
                      performante et sécurisée. Notre offre comprend tous les outils nécessaires 
                      pour gérer votre boutique efficacement.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[#1D1D1F]">Catalogue de produits personnalisable</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[#1D1D1F]">Paiement sécurisé et gestion des commandes</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[#1D1D1F]">CGV et mentions légales e-commerce incluses</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[#1D1D1F]">Tableau de bord et statistiques de ventes</span>
                      </li>
                    </ul>
                    <p className="text-lg font-semibold text-[#1D1D1F] mb-4">À partir de 5000€ HT</p>
                    <Link 
                      href="/#contact"
                      className="inline-block py-3 px-6 rounded-lg bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] text-white font-medium transition-transform hover:scale-105 active:scale-95"
                    >
                      Demander un devis
                    </Link>
                  </div>
                  <div>
                    <svg
                      viewBox="0 0 600 400"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-auto rounded-lg shadow-md"
                    >
                      {/* Fond d'écran */}
                      <rect x="50" y="50" width="500" height="300" rx="10" fill="#f0f4f8" stroke="#d1d5db" strokeWidth="2" />
                      
                      {/* Écran d'ordinateur */}
                      <rect x="100" y="80" width="400" height="220" rx="4" fill="#ffffff" stroke="#d1d5db" strokeWidth="2" />
                      
                      {/* Base de l'ordinateur */}
                      <rect x="220" y="300" width="160" height="10" rx="2" fill="#9ca3af" />
                      <rect x="250" y="310" width="100" height="5" rx="2" fill="#6b7280" />
                      
                      {/* Barre de navigation */}
                      <rect x="100" y="80" width="400" height="30" rx="4" fill="#6366F1" />
                      <circle cx="115" cy="95" r="5" fill="#ef4444" />
                      <circle cx="135" cy="95" r="5" fill="#f59e0b" />
                      <circle cx="155" cy="95" r="5" fill="#10b981" />
                      
                      {/* Logo */}
                      <rect x="130" y="130" width="100" height="30" rx="4" fill="#D946EF" />
                      
                      {/* Menu de navigation */}
                      <rect x="350" y="130" width="30" height="8" rx="2" fill="#6366F1" />
                      <rect x="390" y="130" width="30" height="8" rx="2" fill="#6366F1" />
                      <rect x="430" y="130" width="30" height="8" rx="2" fill="#6366F1" />
                      
                      {/* Grille de produits */}
                      <rect x="130" y="180" width="100" height="100" rx="4" fill="#f0f4f8" stroke="#d1d5db" strokeWidth="1" />
                      <rect x="240" y="180" width="100" height="100" rx="4" fill="#f0f4f8" stroke="#d1d5db" strokeWidth="1" />
                      <rect x="350" y="180" width="100" height="100" rx="4" fill="#f0f4f8" stroke="#d1d5db" strokeWidth="1" />
                      
                      {/* Produit 1 */}
                      <rect x="140" y="190" width="80" height="60" rx="2" fill="#EC4899" opacity="0.3" />
                      <rect x="140" y="255" width="80" height="15" rx="2" fill="#d1d5db" />
                      <rect x="140" y="275" width="40" height="8" rx="2" fill="#6366F1" />
                      
                      {/* Produit 2 */}
                      <rect x="250" y="190" width="80" height="60" rx="2" fill="#6366F1" opacity="0.3" />
                      <rect x="250" y="255" width="80" height="15" rx="2" fill="#d1d5db" />
                      <rect x="250" y="275" width="40" height="8" rx="2" fill="#6366F1" />
                      
                      {/* Produit 3 */}
                      <rect x="360" y="190" width="80" height="60" rx="2" fill="#D946EF" opacity="0.3" />
                      <rect x="360" y="255" width="80" height="15" rx="2" fill="#d1d5db" />
                      <rect x="360" y="275" width="40" height="8" rx="2" fill="#6366F1" />
                      
                      {/* Panier */}
                      <circle cx="450" cy="130" r="15" fill="#6366F1" opacity="0.6" />
                      <path d="M445,130 L455,130 M450,125 L450,135" stroke="white" strokeWidth="2" />
                      
                      {/* Texte "E-COMMERCE" */}
                      <text x="300" y="160" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#1D1D1F" textAnchor="middle">SITE E-COMMERCE</text>
                    </svg>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        <section className="py-10 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1D1D1F]">
                Nos <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899]">réalisations</span>
              </h2>
              <p className="text-[#86868B] max-w-3xl mx-auto">
                Découvrez les sites web que nous avons créés pour nos clients
              </p>
            </motion.div>

            {/* Carrousel de projets - 3 lignes avec décalage */}
            <div className="relative -mx-4 overflow-hidden">
              {/* Définition des projets par ligne */}
              {[
                // Première ligne
                ["/projects/Adam.png", "/projects/AfroBurger.png", "/projects/AppForge.png", "/projects/BBDBuy.png", "/projects/EldonCamp.png", "/projects/Etincelle.png", "/projects/Gymclub.png"],
                // Deuxième ligne
                ["/projects/JsBarber.png", "/projects/Laurent.png", "/projects/Plr.png", "/projects/Porsche.png", "/projects/PortfolioLouis.png", "/projects/PortfolioMattias.png", "/projects/Prestigear.png"],
                // Troisième ligne
                ["/projects/Rlauto.png", "/projects/Sabard.png", "/projects/SmileTex.png", "/projects/Sportclub.png", "/projects/Tolarys.png", "/projects/TolarysAuto.png", "/projects/autoecole.png"]
              ].map((row, rowIndex) => (
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
                        x: rowIndex % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"],
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
                      {/* Projets et leur répétition pour effet infini */}
                      {[...row, ...row].map((project, index) => (
                        <div 
                          key={`project-${rowIndex}-${index}`}
                          className="flex-shrink-0 w-48 h-32 mx-2 bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
                        >
                          <Image 
                            src={project} 
                            alt={`Projet ${project.split('/').pop()?.split('.')[0]}`} 
                            width={192} 
                            height={128} 
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1D1D1F]">
                Notre processus
              </h2>
              <p className="text-[#86868B] max-w-3xl mx-auto">
                De la conception à la mise en ligne, nous vous accompagnons à chaque étape
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#6366F1] to-[#D946EF] flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1D1D1F]">Consultation</h3>
                <p className="text-[#86868B]">
                  Nous discutons de votre projet, vos objectifs et vos besoins spécifiques pour établir un cahier des charges précis.
                </p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D946EF] to-[#EC4899] flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1D1D1F]">Design</h3>
                <p className="text-[#86868B]">
                  Nous créons des maquettes de votre site pour validation avant de passer au développement.
                </p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#EC4899] to-[#6366F1] flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1D1D1F]">Développement</h3>
                <p className="text-[#86868B]">
                  Nous développons votre site avec des technologies modernes, en intégrant toutes les fonctionnalités nécessaires.
                </p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#6366F1] to-[#EC4899] flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1D1D1F]">Lancement</h3>
                <p className="text-[#86868B]">
                  Après tests et validation, nous mettons votre site en ligne et vous formons à son utilisation.
                </p>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/#contact"
                className="inline-block py-3 px-8 rounded-lg bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] text-white font-medium transition-transform hover:scale-105 active:scale-95"
              >
                Lancer votre projet web
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SitePage;
