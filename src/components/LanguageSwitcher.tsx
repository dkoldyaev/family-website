'use client';

import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './LanguageSwitcher.module.css';

type SupportedLocale = 'es' | 'en' | 'ca';

const languages = [
  {
    code: 'es' as SupportedLocale,
    name: 'Español',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg'
  },
  {
    code: 'en' as SupportedLocale,
    name: 'English',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg'
  },
  {
    code: 'ca' as SupportedLocale,
    name: 'Català',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Catalonia.svg'
  }
];

interface LanguageSwitcherProps {
  currentLocale: string;
}

function setLocaleCookie(locale: SupportedLocale) {
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (locale: SupportedLocale) => {
    setLocaleCookie(locale);
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
    router.push(newPath);
  };

  return (
    <div className={styles.container}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`${styles.button} ${currentLocale === lang.code ? styles.active : ''}`}
          aria-label={`Switch to ${lang.name}`}
        >
          <Image
            src={lang.flag}
            alt={`${lang.name} flag`}
            width={20}
            height={15}
            className={styles.flag}
          />
          <span className={styles.name}>{lang.name}</span>
        </button>
      ))}
    </div>
  );
}
