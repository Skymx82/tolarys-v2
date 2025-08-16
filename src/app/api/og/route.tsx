import { generateHomeOgImage } from '@/lib/og-images';

export const runtime = 'edge';

export async function GET() {
  return generateHomeOgImage();
}
