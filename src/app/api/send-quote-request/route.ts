import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, website, requestType, message } = body;

    // Validation des données
    if (!name || !email || !company || !website) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    // Formatage du type de demande
    const requestTypeLabels: { [key: string]: string } = {
      'devis': 'Devis pour audit d\'accessibilité',
      'correction': 'Devis pour correction des violations',
      'audit-complet': 'Audit complet + rapport détaillé',
      'consultation': 'Consultation technique'
    };

    // Configuration SMTP Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // ton email Gmail
        pass: process.env.GMAIL_APP_PASSWORD, // mot de passe d'application Gmail
      },
    });

    // Contenu de l'email
    const emailContent = `
Nouvelle demande de devis - Tolarys

📋 INFORMATIONS CLIENT
• Nom: ${name}
• Email: ${email}
• Entreprise: ${company}
• Site web: ${website}

🎯 TYPE DE DEMANDE
${requestTypeLabels[requestType] || requestType}

💬 MESSAGE
${message || 'Aucun message spécifique'}

---
Demande reçue le ${new Date().toLocaleString('fr-FR')}
    `.trim();

    // Envoi de l'email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'tolarystoulouse@gmail.com',
      subject: `Nouvelle demande de devis - ${company}`,
      text: emailContent,
      replyTo: email, // Pour pouvoir répondre directement au client
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Erreur envoi email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}
