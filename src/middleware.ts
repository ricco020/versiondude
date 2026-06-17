import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Run on every path EXCEPT: API, Next internals, files with an extension,
  // and the legacy Subversion juice paths (handled by next.config redirects).
  matcher: [
    '/((?!api|_next|_vercel|whattf|railfrog|clark-parsia|terminal|.*\\..*).*)',
  ],
};
