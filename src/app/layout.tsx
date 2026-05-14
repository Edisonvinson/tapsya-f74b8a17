import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lovable App',
  description: 'Tapasya Spa & Wellness offers a serene escape in Kumily, Kerala, blending Western, Ayurvedic, and Asian therapies.',
  authors: [{ name: 'Lovable' }],
  openGraph: {
    title: 'Lovable App',
    description: 'Tapasya Spa & Wellness offers a serene escape in Kumily, Kerala, blending Western, Ayurvedic, and Asian therapies.',
    type: 'website',
    images: ['https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3383f4f6-cd4c-481e-bbd7-cf86aeb69551/id-preview-714cd9f1--989f095b-2e78-4c95-8e38-ec67495a8d42.lovable.app-1776935000161.png'],
  },
  twitter: {
    card: 'summary',
    site: '@Lovable',
    title: 'Lovable App',
    description: 'Tapasya Spa & Wellness offers a serene escape in Kumily, Kerala, blending Western, Ayurvedic, and Asian therapies.',
    images: ['https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3383f4f6-cd4c-481e-bbd7-cf86aeb69551/id-preview-714cd9f1--989f095b-2e78-4c95-8e38-ec67495a8d42.lovable.app-1776935000161.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48.png?v=2" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96.png?v=2" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png?v=2" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png?v=2" />
        <link rel="manifest" href="/site.webmanifest?v=2" />
        <meta name="google-site-verification" content="s8uMjojSU-kNaBbsLCuTbORw5_QElTprOS_UIpyF_jM" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5N3KZCK7');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17808948601"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17808948601');`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.graymatterdubai.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
