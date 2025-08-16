"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ConformiteReglementairePage = () => {
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
              Conformité réglementaire <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899]">RGAA et EN 301 549</span>
            </h1>
            <p className="text-xl text-[#86868B] mb-8">
              Tout ce que vous devez savoir pour rendre votre site web conforme aux réglementations d'accessibilité numérique en vigueur.
            </p>
          </motion.div>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-[#1D1D1F]">Votre site web est-il conforme aux réglementations ?</h2>
            <div className="bg-[#F5F5F7] p-6 rounded-xl mb-6">
              <p className="font-bold text-[#1D1D1F] mb-2">82% des sites web français ne respectent pas la législation en vigueur</p>
              <p className="text-[#86868B]">Les sanctions peuvent aller jusqu'à 20 000€ pour les entreprises et organismes ne respectant pas les obligations d'accessibilité numérique.</p>
            </div>
            <p className="mb-4">
              La conformité aux normes d'accessibilité n'est pas seulement une bonne pratique, c'est une obligation légale pour de nombreuses organisations. Vérifier si votre site respecte ces réglementations est essentiel pour éviter les sanctions et garantir l'accès à tous vos utilisateurs.
            </p>
          </motion.section>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-[#1D1D1F]">Cadre légal et réglementaire</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-3 text-[#1D1D1F]">RGAA (Référentiel Général d'Amélioration de l'Accessibilité)</h3>
              <p className="mb-4">
                Le RGAA est la déclinaison française des règles internationales WCAG. Il s'applique à :
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-[#86868B]">
                <li>Les services publics de l'État</li>
                <li>Les collectivités territoriales</li>
                <li>Les établissements publics</li>
                <li>Les entreprises dont le chiffre d'affaires en France est supérieur à 250 millions d'euros</li>
              </ul>
              <p className="mb-4">
                <strong>Niveau de conformité exigé :</strong> AA (sur une échelle de A à AAA)
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-3 text-[#1D1D1F]">EN 301 549</h3>
              <p className="mb-4">
                La norme européenne EN 301 549 définit les exigences d'accessibilité applicables aux produits et services TIC, y compris les sites web. Elle s'applique à :
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-[#86868B]">
                <li>Tous les organismes du secteur public des États membres de l'UE</li>
                <li>Les entreprises fournissant des services essentiels en ligne</li>
              </ul>
              <p>Cette norme est alignée sur les WCAG 2.1 et constitue la référence pour la directive européenne sur l'accessibilité.</p>
            </div>
          </motion.section>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-[#1D1D1F]">Sanctions et risques en cas de non-conformité</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#F5F5F7] p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-2 text-[#1D1D1F]">Sanctions financières</h3>
                <p className="text-[#86868B]">Jusqu'à 20 000€ d'amende pour les organismes ne respectant pas les obligations d'accessibilité.</p>
              </div>
              <div className="bg-[#F5F5F7] p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-2 text-[#1D1D1F]">Risques juridiques</h3>
                <p className="text-[#86868B]">Possibilité de recours et de plaintes pour discrimination de la part des utilisateurs.</p>
              </div>
              <div className="bg-[#F5F5F7] p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-2 text-[#1D1D1F]">Impact sur l'image</h3>
                <p className="text-[#86868B]">Atteinte à la réputation et à l'image de marque de votre organisation.</p>
              </div>
              <div className="bg-[#F5F5F7] p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-2 text-[#1D1D1F]">Perte d'audience</h3>
                <p className="text-[#86868B]">Exclusion de 12 millions de Français en situation de handicap de votre audience potentielle.</p>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-[#1D1D1F]">Comment vérifier la conformité de votre site ?</h2>
            <p className="mb-6">
              Pour savoir si votre site respecte les réglementations RGAA et EN 301 549, plusieurs options s'offrent à vous :
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-4 text-[#86868B]">
              <li>
                <strong className="text-[#1D1D1F]">Audit d'accessibilité complet</strong>
                <p>Analyse approfondie de votre site par des experts en accessibilité numérique.</p>
              </li>
              <li>
                <strong className="text-[#1D1D1F]">Audit automatisé préliminaire</strong>
                <p>Première évaluation rapide pour identifier les problèmes les plus évidents.</p>
              </li>
              <li>
                <strong className="text-[#1D1D1F]">Tests avec des utilisateurs en situation de handicap</strong>
                <p>Évaluation de l'expérience réelle des utilisateurs concernés.</p>
              </li>
            </ol>
            <div className="bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] p-0.5 rounded-xl mb-8">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-3 text-[#1D1D1F]">Audit gratuit avec Tolarys</h3>
                <p className="mb-4">
                  Nous proposons un audit préliminaire gratuit de votre site web pour évaluer sa conformité aux normes RGAA et EN 301 549.
                </p>
                <p className="mb-6">
                  Cet audit vous permettra d'identifier rapidement les principaux points de non-conformité et d'estimer les actions correctives nécessaires.
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
              </div>
            </div>
          </motion.section>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-[#1D1D1F]">FAQ sur la conformité réglementaire</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold mb-2 text-[#1D1D1F]">Mon site doit-il obligatoirement être conforme aux normes d'accessibilité ?</h3>
                <p className="text-[#86868B]">
                  Si vous êtes un organisme public, une collectivité territoriale ou une grande entreprise (CA {'>'} 250M€), la conformité est obligatoire. Pour les autres organisations, c'est fortement recommandé pour éviter les risques juridiques et élargir votre audience.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold mb-2 text-[#1D1D1F]">Quels sont les délais pour se mettre en conformité ?</h3>
                <p className="text-[#86868B]">
                  Pour les organismes publics, la conformité est déjà obligatoire. Pour les grandes entreprises concernées, la mise en conformité devait être effective depuis 2020. Les nouveaux sites doivent être conformes dès leur mise en ligne.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold mb-2 text-[#1D1D1F]">Que risque mon organisation en cas de non-conformité ?</h3>
                <p className="text-[#86868B]">
                  Les sanctions peuvent inclure des amendes allant jusqu'à 20 000€, des mises en demeure, des actions en justice pour discrimination, et des dommages significatifs à votre réputation.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold mb-2 text-[#1D1D1F]">Comment obtenir une attestation de conformité ?</h3>
                <p className="text-[#86868B]">
                  Après un audit complet et la correction des non-conformités, vous pouvez obtenir une attestation de conformité délivrée par un organisme spécialisé comme Tolarys. Cette attestation doit être renouvelée tous les 3 ans.
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
            <h2 className="text-3xl font-bold mb-6 text-[#1D1D1F]">Prêt à vérifier la conformité de votre site ?</h2>
            <p className="text-xl text-[#86868B] mb-8 max-w-2xl mx-auto">
              Ne risquez pas de sanctions. Vérifiez dès maintenant si votre site respecte les réglementations RGAA et EN 301 549.
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

export default ConformiteReglementairePage;
