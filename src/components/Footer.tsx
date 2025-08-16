"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-600 py-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1: Logo et description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="font-bold text-xl text-[#1D1D1F]">Tolarys</h3>
            <p className="text-sm text-[#86868B] max-w-xs">
              Nous rendons le web accessible à tous, un site à la fois.
            </p>
            <div className="pt-2">
              <p className="text-sm text-[#86868B]">
                © {currentYear} Tolarys. Tous droits réservés.
              </p>
            </div>
          </motion.div>

          {/* Colonne 2: Liens utiles */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-bold text-[#1D1D1F]">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#86868B] hover:text-[#6366F1] transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/audit" className="text-[#86868B] hover:text-[#6366F1] transition-colors">
                  Audit gratuit
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-[#86868B] hover:text-[#6366F1] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-[#86868B] hover:text-[#6366F1] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Colonne 3: Mentions légales et contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-bold text-[#1D1D1F]">Contact</h3>
            <p className="text-sm text-[#86868B]">
              <a href="mailto:tolarystoulouse@gmail.com" className="hover:text-[#6366F1] transition-colors">
                tolarystoulouse@gmail.com
              </a>
            </p>
            <div className="space-y-2 pt-4">
              <h3 className="font-bold text-[#1D1D1F]">Mentions légales</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/mentions-legales" className="text-[#86868B] hover:text-[#6366F1] transition-colors text-sm">
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link href="/politique-confidentialite" className="text-[#86868B] hover:text-[#6366F1] transition-colors text-sm">
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="/conditions-utilisation" className="text-[#86868B] hover:text-[#6366F1] transition-colors text-sm">
                    Conditions d'utilisation
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
