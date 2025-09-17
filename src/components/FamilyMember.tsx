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
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
      <div className="w-32 h-32 flex-shrink-0">
        {isBaby ? (
          <div className="w-32 h-32 bg-pink-500 rounded-full"></div>
        ) : (
          <Image
            src={imageSrc!}
            alt={imageAlt!}
            width={128}
            height={128}
            className="w-32 h-32 rounded-full object-cover"
          />
        )}
      </div>
      <div className="flex-1 text-lg leading-relaxed text-center lg:text-left lg:pt-2">
        <p className="text-black">
          <strong className="font-bold text-black">{name}</strong> {description}
        </p>
      </div>
    </div>
  );
}

