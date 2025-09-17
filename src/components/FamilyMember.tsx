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
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-10">
      <div className="w-36 h-36 flex-shrink-0">
        {isBaby ? (
          <div className="w-36 h-36 bg-pink-500 rounded-full"></div>
        ) : (
          <Image
            src={imageSrc!}
            alt={imageAlt!}
            width={150}
            height={150}
            className="w-36 h-36 rounded-full object-cover"
          />
        )}
      </div>
      <div className="flex-1 text-lg leading-relaxed text-center lg:text-left lg:pt-5">
        <p>
          <strong className="font-semibold text-black">{name}</strong> {description}
        </p>
      </div>
    </div>
  );
}

