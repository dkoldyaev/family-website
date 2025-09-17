import React from 'react';
import Image from 'next/image';
import styles from './FamilyMember.module.css';

interface FamilyMemberProps {
  name: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  isBaby?: boolean;
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
    github?: string;
  };
}

export default function FamilyMember({
  name,
  description,
  imageSrc,
  imageAlt,
  isBaby = false,
  socialLinks
}: FamilyMemberProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {isBaby ? (
          <div className={styles.babyPlaceholder}>
            Baby
          </div>
        ) : (
          <Image
            src={imageSrc!}
            alt={imageAlt!}
            width={120}
            height={120}
            className={styles.profileImage}
          />
        )}
      </div>
      <div className={styles.content}>
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{description}</p>
        {socialLinks && !isBaby && (
          <div className={styles.socialLinks}>
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                💼
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                📷
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                💻
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

