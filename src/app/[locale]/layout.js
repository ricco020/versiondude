import '@fortawesome/fontawesome-free/css/all.min.css';
import '@icon/themify-icons/themify-icons.css';
import '../globals.css';
import { Cormorant_Garamond, Roboto, Source_Sans_3 } from 'next/font/google';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { SITE_URL, GA_ID } from '@/lib/site';
import ImportJs from '@/components/ltr/import-js/import-js';
import Providers from '../theme-providers';
import Header from '@/components/ltr/layout/header';
import Footer from '@/components/ltr/layout/footer';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], display: 'swap', weight: ['300', '400', '500', '600', '700'], variable: '--font-cormorant-garamond' });
const roboto = Roboto({ subsets: ['latin'], display: 'swap', weight: ['100', '300', '400', '500', '700', '900'], variable: '--font-roboto' });
const sourceSans = Source_Sans_3({ subsets: ['latin'], display: 'swap', weight: ['300', '400', '500', '600', '700'], variable: '--font-source-sans' });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'site' });
  const path = locale === 'en' ? '/' : `/${locale}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: `${t('name')} — ${t('tagline')}`, template: `%s — ${t('name')}` },
    description: t('description'),
    alternates: { canonical: path, languages: { en: '/', fr: '/fr', es: '/es', 'x-default': '/' } },
    icons: { icon: ['/favicon.ico'], apple: ['/apple-touch-icon.png'] },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({ children, params: { locale } }) {
  if (!routing.locales.includes(locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <ImportJs />
      <body className={`${cormorant.variable} ${roboto.variable} ${sourceSans.variable}`}>
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
