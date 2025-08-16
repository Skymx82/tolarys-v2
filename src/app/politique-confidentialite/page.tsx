"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const PolitiqueConfidentialitePage = () => {
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
            <Link href="/" className="inline-flex items-center text-[#6366F1] hover:underline mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour à l'accueil
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#1D1D1F]">
              Politique de <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899]">confidentialité</span>
            </h1>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 md:p-10 text-[#1D1D1F] space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Introduction</h2>
              <p className="text-[#86868B]">
                Chez Tolarys, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site web tolarys-toulouse.fr.
              </p>
              <p className="text-[#86868B]">
                En utilisant notre site, vous acceptez les pratiques décrites dans la présente politique de confidentialité.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Collecte des données personnelles</h2>
              <p className="text-[#86868B]">
                Nous pouvons collecter les types d'informations suivants :
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#86868B]">
                <li>Informations que vous nous fournissez volontairement (nom, adresse e-mail, URL de site web, etc.) lorsque vous remplissez des formulaires sur notre site.</li>
                <li>Informations collectées automatiquement lors de votre navigation (adresse IP, type de navigateur, pages visitées, etc.).</li>
                <li>Informations provenant de cookies et technologies similaires.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Utilisation des données</h2>
              <p className="text-[#86868B]">
                Nous utilisons vos données personnelles pour :
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#86868B]">
                <li>Fournir, exploiter et maintenir notre site web.</li>
                <li>Répondre à vos demandes et vous fournir les services demandés.</li>
                <li>Réaliser des audits d'accessibilité sur les sites web que vous nous soumettez.</li>
                <li>Améliorer notre site web et votre expérience utilisateur.</li>
                <li>Vous envoyer des communications relatives à nos services.</li>
                <li>Respecter nos obligations légales.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Conservation des données</h2>
              <p className="text-[#86868B]">
                Nous conservons vos données personnelles uniquement pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, ou pour se conformer à des exigences légales ou réglementaires.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Partage des données</h2>
              <p className="text-[#86868B]">
                Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles à des tiers sans votre consentement, sauf dans les cas suivants :
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#86868B]">
                <li>Lorsque cela est nécessaire pour fournir un service que vous avez demandé.</li>
                <li>Pour se conformer à la loi ou répondre à une procédure judiciaire.</li>
                <li>Pour protéger nos droits, notre propriété ou notre sécurité, ou ceux d'autres personnes.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Cookies</h2>
              <p className="text-[#86868B]">
                Notre site peut utiliser des cookies pour améliorer votre expérience de navigation. Un cookie est un petit fichier placé sur votre appareil qui permet certaines fonctionnalités et analyses du site web.
              </p>
              <p className="text-[#86868B]">
                Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour être averti lorsqu'un cookie est envoyé. Cependant, certaines fonctionnalités du site peuvent ne pas fonctionner correctement si les cookies sont désactivés.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Vos droits</h2>
              <p className="text-[#86868B]">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#86868B]">
                <li>Droit d'accès à vos données personnelles.</li>
                <li>Droit de rectification des données inexactes.</li>
                <li>Droit à l'effacement de vos données (« droit à l'oubli »).</li>
                <li>Droit à la limitation du traitement.</li>
                <li>Droit à la portabilité des données.</li>
                <li>Droit d'opposition au traitement de vos données.</li>
              </ul>
              <p className="text-[#86868B]">
                Pour exercer ces droits, veuillez nous contacter à l'adresse email suivante : <a href="mailto:tolarystoulouse@gmail.com" className="text-[#6366F1] hover:underline">tolarystoulouse@gmail.com</a>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Modifications de la politique de confidentialité</h2>
              <p className="text-[#86868B]">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour.
              </p>
              <p className="text-[#86868B]">
                Nous vous encourageons à consulter régulièrement cette politique pour rester informé de la manière dont nous protégeons vos informations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Contact</h2>
              <p className="text-[#86868B]">
                Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à :
              </p>
              <p className="text-[#86868B]">
                <a href="mailto:tolarystoulouse@gmail.com" className="text-[#6366F1] hover:underline">tolarystoulouse@gmail.com</a>
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PolitiqueConfidentialitePage;
