import React from 'react';
import Image from 'next/image';
import styles from './FamilyMember.module.css';

interface FamilyMemberProps {
  name: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  isBaby?: boolean;
}

export default function FamilyMember({
  name,
  description,
  imageSrc,
  imageAlt,
  isBaby = false
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
      </div>
    </div>
  );
}

