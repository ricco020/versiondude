import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'fr', 'es'],
  defaultLocale: 'en',
  // EN has no prefix (/projects/...), fr/es are prefixed (/fr, /es) → preserves backlink-juice URLs.
  localePrefix: 'as-needed',
  // Detect the visitor's language on landing (Accept-Language), remember choice via cookie.
  localeDetection: true,
});

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
