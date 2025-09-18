import { NextRequest, NextResponse } from 'next/server';

const SUPPORTED_LOCALES = ['es', 'en', 'ca'] as const;
const DEFAULT_LOCALE = 'es';

type SupportedLocale = typeof SUPPORTED_LOCALES[number];

function getLocaleFromCookie(request: NextRequest): SupportedLocale | undefined {
  const locale = request.cookies.get('NEXT_LOCALE')?.value as SupportedLocale;
  if (locale && SUPPORTED_LOCALES.includes(locale)) {
    return locale;
  }
  return undefined;
}

function getLocaleFromAcceptLanguage(request: NextRequest): SupportedLocale | undefined {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return undefined;

  const locales = acceptLanguage
    .split(',')
    .map(part => part.split(';')[0].trim().toLowerCase());

  for (const locale of locales) {
    const baseLocale = locale.split('-')[0] as SupportedLocale;
    if (SUPPORTED_LOCALES.includes(baseLocale)) {
      return baseLocale;
    }
  }
  return undefined;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = SUPPORTED_LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale =
      getLocaleFromCookie(request) ||
      getLocaleFromAcceptLanguage(request) ||
      DEFAULT_LOCALE;

    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
