"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const MentionsLegalesPage = () => {
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
              Mentions <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899]">légales</span>
            </h1>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 md:p-10 text-[#1D1D1F] space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">1. Informations légales</h2>
              <p className="text-[#86868B]">
                Le site web tolarys-toulouse.fr est édité par :
              </p>
              <ul className="list-none space-y-2 text-[#86868B]">
                <li><strong>Raison sociale :</strong> Mathevon Mattias</li>
                <li><strong>Nom Commercial :</strong> Tolarys</li>
                <li><strong>Numéro SIRET :</strong> 94208529100014</li>
                <li><strong>Adresse :</strong> Toulouse, France</li>
                <li><strong>Email :</strong> <a href="mailto:tolarystoulouse@gmail.com" className="text-[#6366F1] hover:underline">tolarystoulouse@gmail.com</a></li>
              </ul>
              <p className="text-[#86868B]">
                <strong>Responsable de la publication</strong><br />
                Le responsable de la publication du site est Tolarys Toulouse.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">2. Hébergement</h2>
              <p className="text-[#86868B]">
                Le site tolarys-toulouse.fr est hébergé par :
              </p>
              <ul className="list-none space-y-2 text-[#86868B]">
                <li><strong>Société :</strong> Vercel Inc.</li>
                <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
                <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#6366F1] hover:underline">vercel.com</a></li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">3. Propriété intellectuelle</h2>
              <p className="text-[#86868B]">
                L'ensemble du contenu du site tolarys-toulouse.fr (textes, graphismes, logos, images, photos, vidéos, etc.) est la propriété exclusive de Tolarys Toulouse ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="text-[#86868B]">
                Toute reproduction totale ou partielle de ce contenu est strictement interdite sans autorisation préalable.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">4. Protection des données personnelles</h2>
              <p className="text-[#86868B]">
                Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-[#86868B]">
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse email suivante : <a href="mailto:tolarystoulouse@gmail.com" className="text-[#6366F1] hover:underline">tolarystoulouse@gmail.com</a>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">5. Cookies</h2>
              <p className="text-[#86868B]">
                Le site tolarys-toulouse.fr peut utiliser des cookies pour améliorer l'expérience utilisateur. Vous pouvez désactiver l'utilisation de cookies en modifiant les paramètres de votre navigateur.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">6. Loi applicable et juridiction</h2>
              <p className="text-[#86868B]">
                Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MentionsLegalesPage;
