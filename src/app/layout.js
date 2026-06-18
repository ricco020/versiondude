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
  metadataBase: new URL('https://versiondude.net'),
  verification: { google: 'juQltVxW7UYV3-1SweRtjy1z9ISX5I92ehRzwjsh2Us' },
  title: { default: 'VersionDude — web standards, parsers & developer tooling', template: '%s' },
  description: 'VersionDude — web standards, HTML parsing and developer tooling, plus practical guides to open-source, self-hosted and privacy tools.',
  robots: { index: true, follow: true },
  openGraph: {
    siteName: 'VersionDude',
    type: 'website',
    title: 'VersionDude — web standards, parsers & developer tooling',
    description: 'Web standards, HTML parsing and developer tooling, plus practical guides to open-source, self-hosted and privacy tools.',
    images: ['/assets/articles/what-is-the-dom-hero.jpg'],
  },
  twitter: { card: 'summary_large_image', title: 'VersionDude', description: 'Web standards, parsers & developer tooling.' },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }, { url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: ['/favicon.ico'],
    apple: ['/apple-touch-icon.png'],
  }
}
{/*  END OF /. FONT DECLARATION */ }
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/assets/articles/self-hosted-password-managers-body.jpg" fetchPriority="high" />
      </head>
      <ImportJs />
      <body className={`${cormorant.variable} ${roboto.variable} ${sourceSans.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
