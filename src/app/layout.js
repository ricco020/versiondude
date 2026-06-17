import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "@icon/themify-icons/themify-icons.css"
import { Cormorant_Garamond, Roboto, Source_Sans_3 } from 'next/font/google'
import Script from 'next/script'

import ImportJs from '@/components/ltr/import-js/import-js';
import Providers from './theme-providers';

const GA_ID = 'G-EGDNJHLQ0J';

{/* *** START FONT DECLARATION *** */ }
export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant-garamond',
})
export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '500', '700', '900',],
  variable: '--font-roboto',
})
export const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-source-sans',
})
export const metadata = {
  title: 'VersionDude',
  description: 'VersionDude — web standards, parsers and developer tooling.',
  // Contenu démo factice en attendant le vrai contenu : on empêche l'indexation
  // pour ne pas exposer du contenu dupliqué/thin (protège le jus de backlinks).
  robots: { index: false, follow: false },
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v4'],
    shortcut: ['/apple-touch-icon.png']
  }
}
{/*  END OF /. FONT DECLARATION */ }
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ImportJs />
      <body className={`${cormorant.variable} ${roboto.variable} ${sourceSans.variable}`}>
        <Providers>
          {children}
        </Providers>

        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </body>
    </html>
  )
}
