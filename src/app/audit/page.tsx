"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

// Les métadonnées sont déplacées dans un fichier metadata.ts séparé

const AuditPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<{
    siteUrl: string;
    email: string;
    name: string;
    siteType: string;
    siteSize: string;
    hasMobileVersion: string;
    specificNeeds: string[];
    otherNeeds: string;
    businessType: string;
    targetAudience: string;
    accessibilityGoal: string;
  }>({
    // Étape 1 : Informations de base
    siteUrl: "",
    email: "",
    name: "",
    
    // Étape 2 : Informations sur le site
    siteType: "",
    siteSize: "",
    hasMobileVersion: "",
    
    // Étape 3 : Besoins spécifiques
    specificNeeds: [],
    otherNeeds: "",
    
    // Étape 4 : Contexte et objectifs
    businessType: "",
    targetAudience: "",
    accessibilityGoal: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    const value = e.target.value;
    
    setFormData((prev) => {
      if (checked) {
        return {
          ...prev,
          specificNeeds: [...(prev.specificNeeds || []), value],
        };
      } else {
        return {
          ...prev,
          specificNeeds: (prev.specificNeeds || []).filter(item => item !== value),
        };
      }
    });
  };

  const nextStep = () => {
    // Validation par étape
    if (currentStep === 1) {
      if (!formData.siteUrl || !formData.email || !formData.name) {
        setError("Veuillez remplir tous les champs obligatoires");
        return;
      }
      if (!formData.email.includes("@")) {
        setError("Veuillez entrer une adresse email valide");
        return;
      }
      if (!formData.siteUrl.includes(".")) {
        setError("Veuillez entrer une URL de site valide");
        return;
      }
    } else if (currentStep === 2) {
      if (!formData.siteType || !formData.siteSize || !formData.hasMobileVersion) {
        setError("Veuillez répondre à toutes les questions");
        return;
      }
    } else if (currentStep === 3) {
      // Pas de validation stricte pour cette étape
    }
    
    setError("");
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    setError("");
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    // Validation finale
    if (!formData.businessType || !formData.targetAudience || !formData.accessibilityGoal) {
      setError("Veuillez répondre à toutes les questions");
      setIsSubmitting(false);
      return;
    }

    // Simulation d'envoi (à remplacer par votre logique d'API)
    try {
      // Simuler un délai d'envoi
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Réinitialiser le formulaire et afficher le message de succès
      setFormData({
        siteUrl: "",
        email: "",
        name: "",
        siteType: "",
        siteSize: "",
        hasMobileVersion: "",
        specificNeeds: [],
        otherNeeds: "",
        businessType: "",
        targetAudience: "",
        accessibilityGoal: "",
      });
      setIsSubmitted(true);
      setIsSubmitting(false);
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 text-gray-800">
            <h3 className="text-xl font-semibold mb-4">Informations de base</h3>
            
            <div>
              <label htmlFor="siteUrl" className="block text-sm font-medium text-[#1D1D1F] mb-2">
                URL de votre site <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="siteUrl"
                name="siteUrl"
                value={formData.siteUrl}
                onChange={handleChange}
                placeholder="https://votresite.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition placeholder-gray-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#1D1D1F] mb-2">
                Votre nom <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Prénom Nom"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition placeholder-gray-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1D1D1F] mb-2">
                Votre email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="vous@exemple.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition placeholder-gray-500"
                required
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6 text-gray-800">
            <h3 className="text-xl font-semibold mb-4">Informations sur votre site</h3>
            
            <div>
              <label htmlFor="siteType" className="block text-sm font-medium text-[#1D1D1F] mb-2">
                Type de site <span className="text-red-500">*</span>
              </label>
              <select
                id="siteType"
                name="siteType"
                value={formData.siteType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition"
                required
              >
                <option value="">Sélectionnez une option</option>
                <option value="vitrine">Site vitrine</option>
                <option value="ecommerce">Site e-commerce</option>
                <option value="blog">Blog</option>
                <option value="application">Application web</option>
                <option value="intranet">Intranet / Extranet</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="siteSize" className="block text-sm font-medium text-[#1D1D1F] mb-2">
                Taille approximative du site <span className="text-red-500">*</span>
              </label>
              <select
                id="siteSize"
                name="siteSize"
                value={formData.siteSize}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition"
                required
              >
                <option value="">Sélectionnez une option</option>
                <option value="petit">Petit (1-10 pages)</option>
                <option value="moyen">Moyen (11-50 pages)</option>
                <option value="grand">Grand (51-200 pages)</option>
                <option value="tres-grand">Très grand (200+ pages)</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="hasMobileVersion" className="block text-sm font-medium text-[#1D1D1F] mb-2">
                Votre site est-il adapté aux mobiles ? <span className="text-red-500">*</span>
              </label>
              <select
                id="hasMobileVersion"
                name="hasMobileVersion"
                value={formData.hasMobileVersion}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition"
                required
              >
                <option value="">Sélectionnez une option</option>
                <option value="oui">Oui, il est responsive</option>
                <option value="partiellement">Partiellement</option>
                <option value="non">Non, pas du tout</option>
                <option value="ne-sais-pas">Je ne sais pas</option>
              </select>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6 text-gray-800">
            <h3 className="text-xl font-semibold mb-4">Besoins spécifiques</h3>
            
            <div>
              <label className="block text-sm font-medium text-[#1D1D1F] mb-3">
                Quels aspects de l'accessibilité vous préoccupent particulièrement ? (Plusieurs choix possibles)
              </label>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="need-visual"
                    value="visual"
                    onChange={handleCheckboxChange}
                    checked={formData.specificNeeds?.includes("visual")}
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="need-visual" className="text-sm text-[#1D1D1F]">
                    Accessibilité pour les déficiences visuelles (contraste, taille de texte, compatibilité lecteurs d'écran)
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="need-motor"
                    value="motor"
                    onChange={handleCheckboxChange}
                    checked={formData.specificNeeds?.includes("motor")}
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="need-motor" className="text-sm text-[#1D1D1F]">
                    Accessibilité pour les déficiences motrices (navigation au clavier, zones cliquables)
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="need-cognitive"
                    value="cognitive"
                    onChange={handleCheckboxChange}
                    checked={formData.specificNeeds?.includes("cognitive")}
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="need-cognitive" className="text-sm text-[#1D1D1F]">
                    Accessibilité pour les déficiences cognitives (clarté, simplicité, cohérence)
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="need-hearing"
                    value="hearing"
                    onChange={handleCheckboxChange}
                    checked={formData.specificNeeds?.includes("hearing")}
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="need-hearing" className="text-sm text-[#1D1D1F]">
                    Accessibilité pour les déficiences auditives (sous-titres, transcriptions)
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="need-legal"
                    value="legal"
                    onChange={handleCheckboxChange}
                    checked={formData.specificNeeds?.includes("legal")}
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="need-legal" className="text-sm text-[#1D1D1F]">
                    Conformité légale (RGAA, WCAG, ADA)
                  </label>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="need-seo"
                    value="seo"
                    onChange={handleCheckboxChange}
                    checked={formData.specificNeeds?.includes("seo")}
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="need-seo" className="text-sm text-[#1D1D1F]">
                    Amélioration du SEO grâce à l'accessibilité
                  </label>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="otherNeeds" className="block text-sm font-medium text-[#1D1D1F] mb-2">
                Autres besoins ou préoccupations spécifiques
              </label>
              <textarea
                id="otherNeeds"
                name="otherNeeds"
                value={formData.otherNeeds}
                onChange={handleChange}
                placeholder="Décrivez tout autre besoin ou préoccupation concernant l'accessibilité de votre site..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition placeholder-gray-500"
              />
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6 text-gray-800">
            <h3 className="text-xl font-semibold mb-4">Contexte et objectifs</h3>
            
            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-[#1D1D1F] mb-2">
                Type d'activité ou secteur <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                placeholder="Ex: Commerce de détail, Services financiers, Éducation..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition placeholder-gray-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="targetAudience" className="block text-sm font-medium text-[#1D1D1F] mb-2">
                Public cible principal <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="targetAudience"
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleChange}
                placeholder="Ex: Seniors, Professionnels, Grand public..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition placeholder-gray-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="accessibilityGoal" className="block text-sm font-medium text-[#1D1D1F] mb-2">
                Objectif principal de votre démarche d'accessibilité <span className="text-red-500">*</span>
              </label>
              <select
                id="accessibilityGoal"
                name="accessibilityGoal"
                value={formData.accessibilityGoal}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition"
                required
              >
                <option value="">Sélectionnez une option</option>
                <option value="inclusion">Inclusion et responsabilité sociale</option>
                <option value="legal">Conformité légale</option>
                <option value="audience">Élargissement de l'audience</option>
                <option value="image">Amélioration de l'image de marque</option>
                <option value="seo">Optimisation du référencement</option>
                <option value="ux">Amélioration de l'expérience utilisateur globale</option>
                <option value="autre">Autre</option>
              </select>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const renderProgressBar = () => {
    const progress = (currentStep / 4) * 100;
    
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div 
          className="bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] h-2.5 rounded-full transition-all duration-300 ease-out" 
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {!isSubmitted ? (
          <>
            <motion.div 
              className="text-center mb-12"
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
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1D1D1F]">
                Audit d'accessibilité <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899]">gratuit</span>
              </h1>
              <p className="text-[#86868B] max-w-2xl mx-auto mb-6">
                Remplissez ce formulaire pour recevoir un audit d'accessibilité gratuit de la page d'accueil de votre site web
              </p>
              
              {renderProgressBar()}
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={currentStep === 4 ? handleSubmit : (e) => e.preventDefault()}>
                {renderStep()}
                
                {error && (
                  <div className="text-red-500 text-sm mt-4">{error}</div>
                )}
                
                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="py-2 px-6 rounded-lg border border-gray-300 text-gray-700 font-medium transition-colors hover:bg-gray-100"
                    >
                      Précédent
                    </button>
                  )}
                  
                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="ml-auto py-3 px-8 rounded-lg bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] text-white font-medium transition-transform hover:scale-105 active:scale-95"
                    >
                      Continuer
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`ml-auto py-3 px-8 rounded-lg bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] text-white font-medium transition-transform hover:scale-105 active:scale-95 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Obtenir mon audit gratuit'}
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          </>
        ) : (
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 md:p-10 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-[#1D1D1F] mb-4">Demande envoyée avec succès !</h2>
            
            <p className="text-[#86868B] mb-8 max-w-xl mx-auto">
              Merci pour votre demande d'audit d'accessibilité. Notre équipe va analyser la page d'accueil de votre site et vous enverra les résultats dans les 24 heures.
            </p>
            
            <div className="space-y-4">
              <Link 
                href="/"
                className="inline-block py-3 px-8 rounded-lg bg-gradient-to-r from-[#6366F1] via-[#D946EF] to-[#EC4899] text-white font-medium transition-transform hover:scale-105 active:scale-95"
              >
                Retour à l'accueil
              </Link>
            </div>
          </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AuditPage;
