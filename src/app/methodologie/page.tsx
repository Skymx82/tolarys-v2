"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MethodologiePage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1D1D1F]">
              Notre <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899]">méthodologie d'audit</span> d'accessibilité
            </h1>
            <p className="text-xl text-[#86868B] mb-8">
              Une approche rigoureuse et complète pour évaluer la conformité de votre site aux normes RGAA et EN 301 549.
            </p>
          </motion.div>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#1D1D1F]">Notre processus d'audit en 4 étapes</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div 
                className="bg-[#F5F5F7] p-6 rounded-xl"
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.1)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6366F1] to-[#D946EF] flex items-center justify-center text-white font-bold mr-4">1</div>
                  <h3 className="text-xl font-semibold text-[#1D1D1F]">Crawling automatisé</h3>
                </div>
                <p className="text-[#86868B]">
                  Notre outil parcourt l'ensemble des pages de votre site web pour identifier sa structure, ses composants et ses contenus. Cette étape permet de cartographier votre site et de préparer l'analyse d'accessibilité.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-[#F5F5F7] p-6 rounded-xl"
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.1)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D946EF] to-[#EC4899] flex items-center justify-center text-white font-bold mr-4">2</div>
                  <h3 className="text-xl font-semibold text-[#1D1D1F]">Analyse automatique</h3>
                </div>
                <p className="text-[#86868B]">
                  Notre moteur d'analyse basé sur Axe-Core évalue chaque page selon plus de 100 critères d'accessibilité issus des normes WCAG, RGAA et EN 301 549. Cette analyse détecte automatiquement jusqu'à 50% des problèmes d'accessibilité.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-[#F5F5F7] p-6 rounded-xl"
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.1)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#6366F1] to-[#D946EF] flex items-center justify-center text-white font-bold mr-4">3</div>
                  <h3 className="text-xl font-semibold text-[#1D1D1F]">Vérification manuelle</h3>
                </div>
                <p className="text-[#86868B]">
                  Nos experts en accessibilité complètent l'analyse automatique par des tests manuels approfondis. Cette étape est essentielle pour détecter les problèmes que les outils automatisés ne peuvent pas identifier, comme la pertinence des alternatives textuelles ou la logique de navigation.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-[#F5F5F7] p-6 rounded-xl"
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.1)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D946EF] to-[#EC4899] flex items-center justify-center text-white font-bold mr-4">4</div>
                  <h3 className="text-xl font-semibold text-[#1D1D1F]">Rapport détaillé</h3>
                </div>
                <p className="text-[#86868B]">
                  Nous générons un rapport complet qui présente les résultats de l'audit, identifie les non-conformités et propose des solutions concrètes pour chaque problème détecté. Ce rapport inclut un score d'accessibilité et une feuille de route pour atteindre la conformité.
                </p>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#1D1D1F]">Nos outils d'audit</h2>
            
            <div className="bg-[#F5F5F7] p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#1D1D1F]">Axe-Core : Le moteur d'analyse</h3>
              <p className="mb-4 text-[#86868B]">
                Notre solution d'audit utilise Axe-Core, la référence mondiale en matière d'analyse automatisée d'accessibilité. Développé par Deque Systems et maintenu par une communauté active, cet outil open-source est reconnu pour sa fiabilité et sa précision.
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="bg-white px-3 py-1 rounded-full text-sm text-[#6366F1] border border-[#6366F1]">WCAG 2.1</div>
                <div className="bg-white px-3 py-1 rounded-full text-sm text-[#6366F1] border border-[#6366F1]">RGAA 4</div>
                <div className="bg-white px-3 py-1 rounded-full text-sm text-[#6366F1] border border-[#6366F1]">EN 301 549</div>
                <div className="bg-white px-3 py-1 rounded-full text-sm text-[#6366F1] border border-[#6366F1]">Section 508</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#1D1D1F]">Technologies complémentaires</h3>
                <ul className="list-disc pl-6 space-y-3 text-[#86868B]">
                  <li><strong>Playwright</strong> : Pour l'automatisation des tests et la navigation sur votre site</li>
                  <li><strong>NVDA & VoiceOver</strong> : Pour tester l'expérience des utilisateurs de lecteurs d'écran</li>
                  <li><strong>Contrast Analyzer</strong> : Pour vérifier les ratios de contraste des couleurs</li>
                  <li><strong>Keyboard Navigation Tester</strong> : Pour évaluer l'accessibilité au clavier</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#1D1D1F]">Expertise humaine</h3>
                <p className="text-[#86868B] mb-4">
                  Nos experts certifiés en accessibilité numérique complètent les analyses automatisées par leur expertise et leur expérience. Ils sont formés aux dernières normes et bonnes pratiques en matière d'accessibilité.
                </p>
                <p className="text-[#86868B]">
                  Cette combinaison d'outils automatisés et d'expertise humaine garantit une évaluation complète et précise de l'accessibilité de votre site web.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#1D1D1F]">Les critères évalués</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#1D1D1F]">Perception</h3>
                <ul className="list-disc pl-6 space-y-2 text-[#86868B]">
                  <li>Alternatives textuelles pour les contenus non textuels</li>
                  <li>Sous-titres et alternatives pour les médias temporels</li>
                  <li>Adaptabilité et distinction des contenus</li>
                  <li>Contrastes de couleurs suffisants</li>
                  <li>Contrôle audio</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#1D1D1F]">Utilisabilité</h3>
                <ul className="list-disc pl-6 space-y-2 text-[#86868B]">
                  <li>Accessibilité au clavier</li>
                  <li>Temps suffisant pour lire et utiliser le contenu</li>
                  <li>Prévention des crises photosensibles</li>
                  <li>Navigation et orientation facilitées</li>
                  <li>Modalités d'entrée alternatives</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#1D1D1F]">Compréhension</h3>
                <ul className="list-disc pl-6 space-y-2 text-[#86868B]">
                  <li>Lisibilité et intelligibilité des textes</li>
                  <li>Prévisibilité des pages web</li>
                  <li>Assistance à la saisie</li>
                  <li>Prévention et correction des erreurs</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#1D1D1F]">Robustesse</h3>
                <ul className="list-disc pl-6 space-y-2 text-[#86868B]">
                  <li>Compatibilité avec les technologies d'assistance</li>
                  <li>Validité du code HTML</li>
                  <li>Nom, rôle et valeur des composants d'interface</li>
                  <li>Messages de statut</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-[#F5F5F7] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-[#1D1D1F]">Conformité aux normes</h3>
              <p className="mb-4 text-[#86868B]">
                Notre méthodologie d'audit couvre l'ensemble des critères des normes suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#86868B]">
                <li><strong>WCAG 2.1</strong> : Web Content Accessibility Guidelines, niveau AA</li>
                <li><strong>RGAA 4</strong> : Référentiel Général d'Amélioration de l'Accessibilité</li>
                <li><strong>EN 301 549</strong> : Norme européenne d'accessibilité pour les produits et services TIC</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#1D1D1F]">Le rapport d'audit</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#1D1D1F]">Contenu du rapport</h3>
                <ul className="list-disc pl-6 space-y-2 text-[#86868B]">
                  <li><strong>Synthèse exécutive</strong> : Score global et principaux constats</li>
                  <li><strong>Inventaire des pages analysées</strong> : Liste des URLs testées</li>
                  <li><strong>Non-conformités détaillées</strong> : Description précise de chaque problème</li>
                  <li><strong>Recommandations techniques</strong> : Solutions concrètes pour chaque non-conformité</li>
                  <li><strong>Captures d'écran</strong> : Illustrations visuelles des problèmes</li>
                  <li><strong>Plan d'action</strong> : Priorisation des corrections à apporter</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#1D1D1F]">Format et livraison</h3>
                <p className="text-[#86868B] mb-4">
                  Le rapport d'audit est livré au format PDF accessible et comprend :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-[#86868B]">
                  <li>Une présentation visuelle claire avec code couleur par niveau de gravité</li>
                  <li>Des extraits de code pour faciliter l'identification des problèmes</li>
                  <li>Des liens vers la documentation technique pertinente</li>
                  <li>Un tableau de bord résumant les résultats</li>
                </ul>
                <p className="text-[#86868B] mt-4">
                  Une présentation des résultats peut être organisée avec nos experts pour vous aider à comprendre les enjeux et planifier les corrections.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#6366F1]/10 via-[#D946EF]/10 to-[#EC4899]/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-[#1D1D1F]">Exemple de score d'accessibilité</h3>
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#6366F1] to-[#D946EF] flex items-center justify-center text-white text-3xl font-bold mr-4">
                    87%
                  </div>
                  <div>
                    <p className="font-semibold text-[#1D1D1F]">Score global</p>
                    <p className="text-sm text-[#86868B]">Niveau de conformité : AA</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-[#86868B]">Violations critiques</p>
                    <p className="text-xl font-semibold text-[#EC4899]">3</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#86868B]">Violations sérieuses</p>
                    <p className="text-xl font-semibold text-[#D946EF]">7</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#86868B]">Violations modérées</p>
                    <p className="text-xl font-semibold text-[#9333EA]">12</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#86868B]">Violations mineures</p>
                    <p className="text-xl font-semibold text-[#6366F1]">5</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#1D1D1F]">FAQ sur notre méthodologie</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold mb-2 text-[#1D1D1F]">Combien de temps prend un audit d'accessibilité ?</h3>
                <p className="text-[#86868B]">
                  La durée d'un audit dépend de la taille et de la complexité de votre site. Un audit préliminaire automatisé peut être réalisé en quelques heures, tandis qu'un audit complet avec vérification manuelle prend généralement entre 3 et 10 jours ouvrés.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold mb-2 text-[#1D1D1F]">Quelle est la différence entre l'audit automatisé gratuit et l'audit complet ?</h3>
                <p className="text-[#86868B]">
                  L'audit automatisé gratuit utilise uniquement notre moteur d'analyse pour détecter les problèmes d'accessibilité les plus évidents. L'audit complet ajoute une vérification manuelle par nos experts, couvrant 100% des critères d'accessibilité et fournissant des recommandations détaillées.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold mb-2 text-[#1D1D1F]">Comment sont priorisées les corrections à apporter ?</h3>
                <p className="text-[#86868B]">
                  Nous priorisons les corrections selon trois critères : la gravité de l'impact sur les utilisateurs en situation de handicap, la fréquence du problème sur le site, et la complexité technique de la correction. Cette approche permet d'optimiser rapidement le niveau d'accessibilité.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold mb-2 text-[#1D1D1F]">Proposez-vous un accompagnement pour la mise en conformité ?</h3>
                <p className="text-[#86868B]">
                  Oui, nous proposons un accompagnement complet pour la mise en conformité, incluant la formation de vos équipes, l'assistance technique pour les corrections, et des audits de suivi pour valider les améliorations apportées.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#1D1D1F]">Prêt à évaluer l'accessibilité de votre site ?</h2>
            <p className="text-xl text-[#86868B] mb-8 max-w-2xl mx-auto">
              Découvrez où se situe votre site en matière d'accessibilité et recevez des recommandations concrètes pour l'améliorer.
            </p>
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="/audit"
                className="inline-flex items-center justify-center font-medium transition-all focus:outline-none rounded-full text-base px-8 py-3.5 bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] text-white shadow-lg shadow-purple-500/20"
              >
                Demander un audit gratuit
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MethodologiePage;
