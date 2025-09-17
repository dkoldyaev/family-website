'use client';

import { useRouter, usePathname } from 'next/navigation';
import styles from './LanguageSwitcher.module.css';

const languages = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
  { code: 'ca', name: 'Català' }
];

interface LanguageSwitcherProps {
  currentLocale: string;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (locale: string) => {
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
          <span className={styles.name}>{lang.name}</span>
        </button>
      ))}
    </div>
  );
}
