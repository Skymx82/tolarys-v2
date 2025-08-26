import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation des champs requis
    if (!body.email || !body.name || !body.siteUrl) {
      return NextResponse.json(
        { error: 'Les champs email, nom et URL du site sont requis' },
        { status: 400 }
      );
    }

    // Configuration du transporteur email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Formatage des besoins spécifiques
    const formatSpecificNeeds = (needs: string[]) => {
      const needsMap: { [key: string]: string } = {
        visual: 'Accessibilité pour les déficiences visuelles',
        motor: 'Accessibilité pour les déficiences motrices',
        cognitive: 'Accessibilité pour les déficiences cognitives',
        hearing: 'Accessibilité pour les déficiences auditives',
        legal: 'Conformité légale (RGAA, WCAG, ADA)',
        seo: 'Amélioration du SEO grâce à l\'accessibilité'
      };
      
      return needs.map(need => needsMap[need] || need).join(', ');
    };

    // Formatage des options de sélection
    const formatSelectValue = (key: string, value: string) => {
      const mappings: { [key: string]: { [value: string]: string } } = {
        siteType: {
          vitrine: 'Site vitrine',
          ecommerce: 'Site e-commerce',
          blog: 'Blog',
          application: 'Application web',
          intranet: 'Intranet / Extranet',
          autre: 'Autre'
        },
        siteSize: {
          petit: 'Petit (1-10 pages)',
          moyen: 'Moyen (11-50 pages)',
          grand: 'Grand (51-200 pages)',
          'tres-grand': 'Très grand (200+ pages)'
        },
        hasMobileVersion: {
          oui: 'Oui, il est responsive',
          partiellement: 'Partiellement',
          non: 'Non, pas du tout',
          'ne-sais-pas': 'Je ne sais pas'
        },
        accessibilityGoal: {
          inclusion: 'Inclusion et responsabilité sociale',
          legal: 'Conformité légale',
          audience: 'Élargissement de l\'audience',
          image: 'Amélioration de l\'image de marque',
          seo: 'Optimisation du référencement',
          ux: 'Amélioration de l\'expérience utilisateur globale',
          autre: 'Autre'
        }
      };
      
      return mappings[key]?.[value] || value;
    };

    // Contenu de l'email
    const emailContent = `
Nouvelle demande d'audit d'accessibilité

=== INFORMATIONS DE BASE ===
Nom: ${body.name}
Email: ${body.email}
URL du site: ${body.siteUrl}

=== INFORMATIONS SUR LE SITE ===
Type de site: ${formatSelectValue('siteType', body.siteType)}
Taille du site: ${formatSelectValue('siteSize', body.siteSize)}
Adapté aux mobiles: ${formatSelectValue('hasMobileVersion', body.hasMobileVersion)}

=== BESOINS SPÉCIFIQUES ===
Préoccupations: ${body.specificNeeds?.length > 0 ? formatSpecificNeeds(body.specificNeeds) : 'Aucune préoccupation spécifique'}
Autres besoins: ${body.otherNeeds || 'Aucun'}

=== CONTEXTE ET OBJECTIFS ===
Type d'activité: ${body.businessType}
Public cible: ${body.targetAudience}
Objectif principal: ${formatSelectValue('accessibilityGoal', body.accessibilityGoal)}

---
Demande reçue le ${new Date().toLocaleString('fr-FR')}
    `;

    // Options de l'email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Envoyer à votre propre adresse
      subject: `Nouvelle demande d'audit d'accessibilité - ${body.name}`,
      text: emailContent,
      replyTo: body.email,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Demande d\'audit envoyée avec succès' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de la demande' },
      { status: 500 }
    );
  }
}
