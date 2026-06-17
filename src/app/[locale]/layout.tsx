import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import Script from 'next/script';
import { Space_Grotesk, Hanken_Grotesk, Newsreader, JetBrains_Mono } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { SITE_URL, GA_ID } from '@/lib/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../globals.css';

const display = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display', display: 'swap' });
const sans = Hanken_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-sans', display: 'swap' });
const serif = Newsreader({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-mono', display: 'swap' });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'site' });
  const path = locale === 'en' ? '/' : `/${locale}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: `${t('name')} — ${t('tagline')}`, template: `%s — ${t('name')}` },
    description: t('description'),
    alternates: {
      canonical: path,
      languages: { en: '/', fr: '/fr', es: '/es', 'x-default': '/' },
    },
    openGraph: {
      type: 'website',
      siteName: t('name'),
      title: `${t('name')} — ${t('tagline')}`,
      description: t('description'),
      url: path,
      locale,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={`${display.variable} ${sans.variable} ${serif.variable} ${mono.variable}`}>
      <head>
        <script src="/theme-init.js" />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
