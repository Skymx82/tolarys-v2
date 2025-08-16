import { ImageResponse } from 'next/og';
import React from 'react';

/**
 * Génère une image Open Graph pour la page d'accueil
 */
export async function generateHomeOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          backgroundImage: 'linear-gradient(to right, #6366F1, #D946EF, #EC4899)',
          padding: '40px 60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: '24px',
            padding: '40px',
            width: '90%',
            height: '80%',
          }}
        >
          <h1
            style={{
              fontSize: '60px',
              fontWeight: 'bold',
              color: '#1D1D1F',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            Tolarys | Conformité RGAA & EN 301 549
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#86868B',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            Votre site respecte-t-il les réglementations d'accessibilité ?
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F5F5F7',
              borderRadius: '12px',
              padding: '20px',
              width: '80%',
            }}
          >
            <p
              style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#1D1D1F',
                textAlign: 'center',
              }}
            >
              Audit gratuit et conformité garantie ou remboursé
            </p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

/**
 * Génère une image Open Graph pour la page d'audit
 */
export async function generateAuditOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          backgroundImage: 'linear-gradient(to right, #6366F1, #D946EF, #EC4899)',
          padding: '40px 60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: '24px',
            padding: '40px',
            width: '90%',
            height: '80%',
          }}
        >
          <h1
            style={{
              fontSize: '60px',
              fontWeight: 'bold',
              color: '#1D1D1F',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            Audit d'accessibilité gratuit
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#86868B',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            Vérifiez la conformité de votre site aux normes RGAA et EN 301 549
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F5F5F7',
              borderRadius: '12px',
              padding: '20px',
              width: '80%',
            }}
          >
            <p
              style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#1D1D1F',
                textAlign: 'center',
              }}
            >
              Rapport détaillé sous 24h - Sans engagement
            </p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

/**
 * Génère une image Open Graph pour la page de conformité réglementaire
 */
export async function generateConformiteOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          backgroundImage: 'linear-gradient(to right, #6366F1, #D946EF, #EC4899)',
          padding: '40px 60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: '24px',
            padding: '40px',
            width: '90%',
            height: '80%',
          }}
        >
          <h1
            style={{
              fontSize: '60px',
              fontWeight: 'bold',
              color: '#1D1D1F',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            Conformité réglementaire
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#86868B',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            RGAA et EN 301 549 : Tout ce que vous devez savoir
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F5F5F7',
              borderRadius: '12px',
              padding: '20px',
              width: '80%',
            }}
          >
            <p
              style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#1D1D1F',
                textAlign: 'center',
              }}
            >
              82% des sites français ne respectent pas la législation
            </p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
