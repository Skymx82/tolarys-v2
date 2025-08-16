"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ConditionsUtilisationPage = () => {
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
              Conditions <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899]">d'utilisation</span>
            </h1>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 md:p-10 text-[#1D1D1F] space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">1. Acceptation des conditions</h2>
              <p className="text-[#86868B]">
                En accédant et en utilisant le site web tolarys-toulouse.fr, vous acceptez d'être lié par les présentes conditions d'utilisation, toutes les lois et réglementations applicables, et vous acceptez que vous êtes responsable du respect des lois locales applicables.
              </p>
              <p className="text-[#86868B]">
                Si vous n'acceptez pas ces conditions, vous n'êtes pas autorisé à utiliser ou à accéder à ce site. Les contenus présents sur ce site sont protégés par les lois applicables en matière de propriété intellectuelle.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">2. Utilisation de la licence</h2>
              <p className="text-[#86868B]">
                L'autorisation est accordée de consulter temporairement une copie des contenus (informations ou logiciels) sur le site web de Tolarys, uniquement pour un usage personnel, non commercial et transitoire. Cette licence ne constitue pas un transfert de titre et, dans le cadre de cette licence, vous n'êtes pas autorisé à :
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#86868B]">
                <li>Modifier ou copier les contenus;</li>
                <li>Utiliser les contenus à des fins commerciales ou pour toute présentation publique;</li>
                <li>Tenter de décompiler ou de désosser tout logiciel contenu sur le site web de Tolarys;</li>
                <li>Supprimer tout droit d'auteur ou autres notations de propriété des contenus; ou</li>
                <li>Transférer les contenus à une autre personne ou "refléter" les contenus sur tout autre serveur.</li>
              </ul>
              <p className="text-[#86868B]">
                Cette licence sera automatiquement résiliée si vous violez l'une de ces restrictions et peut être résiliée par Tolarys à tout moment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">3. Clause de non-responsabilité</h2>
              <p className="text-[#86868B]">
                Les contenus du site web de Tolarys sont fournis "tels quels". Tolarys ne donne aucune garantie, expresse ou implicite, et décline et nie par la présente toutes les autres garanties, y compris, sans limitation, les garanties implicites ou les conditions de qualité marchande, d'adéquation à un usage particulier, ou de non-violation de la propriété intellectuelle ou autre violation des droits.
              </p>
              <p className="text-[#86868B]">
                En outre, Tolarys ne garantit pas et ne fait aucune déclaration concernant l'exactitude, les résultats probables, ou la fiabilité de l'utilisation des contenus sur son site web ou autrement liés à ces contenus ou sur tout site lié à ce site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">4. Limitations</h2>
              <p className="text-[#86868B]">
                En aucun cas, Tolarys ou ses fournisseurs ne seront responsables de tout dommage (y compris, sans limitation, les dommages pour perte de données ou de profit, ou en raison d'une interruption d'activité) découlant de l'utilisation ou de l'incapacité d'utiliser les contenus du site web de Tolarys, même si Tolarys ou un représentant autorisé de Tolarys a été informé oralement ou par écrit de la possibilité de tels dommages.
              </p>
              <p className="text-[#86868B]">
                Certaines juridictions n'autorisant pas les limitations sur les garanties implicites, ou les limitations de responsabilité pour les dommages consécutifs ou accessoires, ces limitations peuvent ne pas s'appliquer à vous.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">5. Révisions et erreurs</h2>
              <p className="text-[#86868B]">
                Les contenus apparaissant sur le site web de Tolarys pourraient inclure des erreurs techniques, typographiques ou photographiques. Tolarys ne garantit pas que l'un des contenus de son site web est exact, complet ou actuel. Tolarys peut apporter des modifications aux contenus de son site web à tout moment sans préavis. Tolarys n'assume cependant aucun engagement de mettre à jour les contenus.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">6. Liens</h2>
              <p className="text-[#86868B]">
                Tolarys n'a pas examiné tous les sites liés à son site web et n'est pas responsable du contenu de ces sites liés. L'inclusion de tout lien n'implique pas l'approbation par Tolarys du site. L'utilisation de tout site web lié est aux risques et périls de l'utilisateur.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">7. Modifications des conditions d'utilisation</h2>
              <p className="text-[#86868B]">
                Tolarys peut réviser ces conditions d'utilisation de son site web à tout moment sans préavis. En utilisant ce site web, vous acceptez d'être lié par la version alors en vigueur de ces conditions d'utilisation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">8. Loi applicable</h2>
              <p className="text-[#86868B]">
                Toute réclamation relative au site web de Tolarys sera régie par les lois de la France, sans égard à ses dispositions en matière de conflit de lois.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">9. Contact</h2>
              <p className="text-[#86868B]">
                Pour toute question concernant ces conditions d'utilisation, veuillez nous contacter à :
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

export default ConditionsUtilisationPage;
