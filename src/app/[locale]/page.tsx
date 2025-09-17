import React from 'react';
import Image from 'next/image';
import DecorativeElements from '@/components/DecorativeElements';
import FamilyMember from '@/components/FamilyMember';

const translations = {
  es: {
    title: "HOLA!",
    intro: "¡Hola! Somos una familia (programador con contrato permanente y salario oficial de +5.000 €, ilustradora y un bebé en camino). Tranquilos, responsables y puntuales con el alquiler; podemos demostrar solvencia y pagar varios meses por adelantado.",
    familyTitle: "Somos una pequeña familia:",
    dmitry: {
      name: "Dmitry (Dima)",
      description: "desarrollador front-end con contrato de trabajo permanente, actualmente en proceso de obtener el permiso de residencia para Nómadas Digitales, con un salario oficial superior a 5.000 € al mes"
    },
    olesya: {
      name: "Olesya",
      description: "artista e ilustradora de libros infantiles"
    },
    baby: {
      name: "Feo",
      description: "nuestro bebé, que nacerá a principios de diciembre"
    },
    about: {
      paragraph1: "Somos una pareja tranquila a la que le gusta la vida hogareña. Llevamos alquilando pisos juntos desde 2021 y nunca hemos tenido quejas por ruido, suciedad o dejar la propiedad en mal estado.",
      paragraph2: "Los dos somos bastante manitas; a Dima le gusta arreglar cosas (como un fregadero o una lavadora), mientras que Olesya se enorgullece de mantener las cosas ordenadas, limpias y bien cuidadas, a menudo reparando o reutilizando objetos.",
      paragraph3: "Somos puntuales con el pago del alquiler sin retrasos y podemos proporcionar extractos bancarios para confirmar la solvencia financiera si es necesario.",
      paragraph4: "Cocinamos de forma sencilla, rara vez con olores fuertes, y somos fáciles de comunicar y flexibles para llegar a acuerdos."
    }
  },
  en: {
    title: "HELLO!",
    intro: "Hello! We are a family (programmer with a permanent contract and official salary of +5,000 €, illustrator and a baby on the way). Quiet, responsible and punctual with the rent; we can demonstrate solvency and pay several months in advance.",
    familyTitle: "We are a small family:",
    dmitry: {
      name: "Dmitry (Dima)",
      description: "front-end developer with a permanent employment contract, currently in the process of obtaining a residence permit for Digital Nomads, with an official salary exceeding €5,000 per month"
    },
    olesya: {
      name: "Olesya",
      description: "artist and children's book illustrator"
    },
    baby: {
      name: "Feo",
      description: "our baby, who will be born in early December"
    },
    about: {
      paragraph1: "We are a quiet couple who enjoy home life. We have been renting apartments together since 2021 and have never had complaints about noise, dirt or leaving the property in poor condition.",
      paragraph2: "We are both quite handy; Dima likes to fix things (like a sink or washing machine), while Olesya prides herself on keeping things tidy, clean and well-maintained, often repairing or reusing objects.",
      paragraph3: "We are punctual with rent payments without delays and can provide bank statements to confirm financial solvency if necessary.",
      paragraph4: "We cook simply, rarely with strong odors, and are easy to communicate with and flexible in reaching agreements."
    }
  },
  ca: {
    title: "HOLA!",
    intro: "Hola! Som una família (programador amb contracte permanent i salari oficial de +5.000 €, il·lustradora i un bebè en camí). Tranquils, responsables i puntuals amb el lloguer; podem demostrar solvència i pagar diversos mesos per endavant.",
    familyTitle: "Som una petita família:",
    dmitry: {
      name: "Dmitry (Dima)",
      description: "desenvolupador front-end amb contracte de treball permanent, actualment en procés d'obtenir el permís de residència per a Nòmades Digitals, amb un salari oficial superior a 5.000 € al mes"
    },
    olesya: {
      name: "Olesya",
      description: "artista i il·lustradora de llibres infantils"
    },
    baby: {
      name: "Feo",
      description: "el nostre bebè, que neixerà a principis de desembre"
    },
    about: {
      paragraph1: "Som una parella tranquil·la a la qual li agrada la vida domèstica. Portem llogant pisos junts des del 2021 i mai hem tingut queixes per soroll, brutícia o deixar la propietat en mal estat.",
      paragraph2: "Tots dos som bastant manetes; a Dima li agrada arreglar coses (com una pica o una rentadora), mentre que Olesya s'enorgulleix de mantenir les coses ordenades, netes i ben cuidades, sovint reparant o reutilitzant objectes.",
      paragraph3: "Som puntuals amb el pagament del lloguer sense retards i podem proporcionar extractes bancaris per confirmar la solvència financera si cal.",
      paragraph4: "Cuinem de forma senzilla, rarament amb olors fortes, i som fàcils de comunicar i flexibles per arribar a acords."
    }
  }
};

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.es;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header Section */}
        <header className="py-10">
          <h1 className="text-6xl font-bold text-black mb-8">
            {t.title}
          </h1>
          <div className="flex flex-col lg:flex-row items-start gap-10 mb-8">
            <div className="flex-1 text-lg leading-relaxed">
              <p>{t.intro}</p>
            </div>
            <div className="w-full lg:w-96">
              <Image
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=200&fit=crop&crop=faces"
                alt="Dmitry y Olesya"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
                priority
              />
            </div>
          </div>
          <DecorativeElements />
        </header>

        {/* Family Section */}
        <section className="py-16">
          <h2 className="text-4xl font-bold text-black mb-10">
            {t.familyTitle}
          </h2>

          <FamilyMember
            name={t.dmitry.name}
            description={t.dmitry.description}
            imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            imageAlt="Dmitry"
          />

          <FamilyMember
            name={t.olesya.name}
            description={t.olesya.description}
            imageSrc="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
            imageAlt="Olesya"
          />

          <FamilyMember
            name={t.baby.name}
            description={t.baby.description}
            isBaby={true}
          />
        </section>

        {/* About Section */}
        <section className="py-16 pb-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6 text-justify">
              {t.about.paragraph1}
            </p>
            <p className="text-lg leading-relaxed mb-6 text-justify">
              {t.about.paragraph2}
            </p>
            <p className="text-lg leading-relaxed mb-6 text-justify">
              {t.about.paragraph3}
            </p>
            <p className="text-lg leading-relaxed mb-6 text-justify">
              {t.about.paragraph4}
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <DecorativeElements />
          </div>
        </section>
      </div>
    </div>
  );
}