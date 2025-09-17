import React from 'react';
import Image from 'next/image';

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
    <div>
      <div>
        {isBaby ? (
          <div></div>
        ) : (
          <Image
            src={imageSrc!}
            alt={imageAlt!}
            width={144}
            height={144}
          />
        )}
      </div>
      <div>
        <p>
          <strong>{name}</strong> {description}
        </p>
      </div>
    </div>
  );
}

