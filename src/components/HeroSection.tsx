"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Navbar superposée sur le hero */}
      <Navbar />
      {/* Fond simple */}
      <div className="absolute inset-0 z-0 bg-white"></div>
      
      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
          
          {/* Contenu textuel */}
          <div className="flex-1 flex flex-col space-y-8">
            {/* Badge de confiance */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-[#F5F5F7] px-4 py-2 rounded-full w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-[#6366F1]"></span>
              <span className="text-sm font-medium text-[#1D1D1F]">RGAA & EN 301 549</span>
            </motion.div>
            
            {/* Headline principal */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1D1D1F] leading-[1.1]"
            >
              L'accessibilité
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] block">c'est maintenant.</span>
            </motion.h1>
            
            {/* Sous-titre */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-[#86868B] max-w-2xl"
            >
              Conformité garantie ou remboursé. Rendez votre site accessible à tous.
            </motion.p>
            
            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 pt-4"
            >
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="/audit"
                  className="inline-flex items-center justify-center font-medium transition-all focus:outline-none rounded-full text-base px-8 py-3.5 bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] text-white shadow-lg shadow-purple-500/20"
                >
                  Audit gratuit
                </Link>
              </motion.div>
              
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="/methodologie"
                  className="inline-flex items-center justify-center font-medium transition-all focus:outline-none rounded-full text-base px-8 py-3.5 bg-white text-[#1D1D1F] border border-[#1D1D1F]/10 hover:border-[#1D1D1F]/20"
                >
                  En savoir plus
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Statistique */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center space-x-4 pt-6"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#6366F1] to-[#D946EF] flex items-center justify-center shadow-sm">
                <span className="text-white text-xl font-medium">82%</span>
              </div>
              <p className="text-sm text-[#86868B]">
                <span className="font-medium">des sites web français</span> ne respectent pas la législation
              </p>
            </motion.div>
          </div>
          
          {/* Visuel principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex-1 relative md:h-[500px] h-[300px] flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-[500px] mx-auto">
              {/* Image SVG de comparaison */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  src="/accessibility-comparison-new.svg" 
                  alt="Comparaison entre site accessible et non accessible" 
                  className="w-full h-full object-contain shadow-lg rounded-2xl"
                />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
