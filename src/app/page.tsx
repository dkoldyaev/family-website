import { redirect } from 'next/navigation';
import { cookies, headers } from 'next/headers';

export default async function RootPage() {

  const SUPPORTED_LOCALES = ['es', 'en', 'ca'];
  const DEFAULT_LOCALE = 'es';

  async function getLocaleFromCookie(): Promise<string | undefined> {
    const cookieStore = cookies();
    const locale = (await cookieStore).get('NEXT_LOCALE')?.value;
    if (locale && SUPPORTED_LOCALES.includes(locale)) {
      return locale;
    }
    return undefined;
  }

  async function getLocaleFromAcceptLanguage(): Promise<string | undefined> {
    const acceptLanguage = (await headers()).get('accept-language');
    if (!acceptLanguage) return undefined;
    const locales = acceptLanguage
      .split(',')
      .map(part => part.split(';')[0].trim().toLowerCase());
    for (const locale of locales) {
      const baseLocale = locale.split('-')[0];
      if (SUPPORTED_LOCALES.includes(baseLocale)) {
        return baseLocale;
      }
    }
    return undefined;
  }

  const locale =
    await getLocaleFromCookie() ||
    await getLocaleFromAcceptLanguage() ||
    DEFAULT_LOCALE;

  console.log({ locale })

  redirect(`/${locale}`);
}