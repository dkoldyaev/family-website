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
      paragraph1: "Somos una pareja tranquila, a la que le gusta la vida acogedora, y hemos estado alquilando apartamentos juntos desde 2021, cuando nos conocimos. Durante todo este tiempo, nunca hemos tenido una sola queja por ruido, limpieza o por dejar una vivienda en peores condiciones de las que la encontramos.",
      paragraph2: "Ambos somos bastante manitas. A Dima le gusta arreglar cosas —ya sea un fregadero o una lavadora—, mientras que Olesya se enorgullece de mantener todo ordenado, limpio y bien cuidado, a menudo reparando o reutilizando objetos para alargarles la vida.",
      paragraph3: "Siempre hemos pagado el alquiler puntualmente —sin un solo retraso—. Además, podemos confirmar nuestra solvencia financiera mediante extractos bancarios, si fuera necesario.",
      paragraph4: "Cocinamos de forma sencilla, casi nunca nada con olores fuertes, y sobre todo, somos fáciles para comunicarnos y flexibles a la hora de llegar a acuerdos."
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
      paragraph1: "We are a quiet couple who enjoy cozy home life, and we have been renting apartments together since 2021, when we met. During all this time, we have never had a single complaint about noise, cleanliness, or leaving a property in worse condition than we found it.",
      paragraph2: "We are both quite handy. Dima likes to fix things —whether it's a sink or a washing machine—, while Olesya prides herself on keeping everything tidy, clean and well-maintained, often repairing or reusing objects to extend their life.",
      paragraph3: "We have always paid rent punctually —without a single delay—. In addition, we can confirm our financial solvency through bank statements, if necessary.",
      paragraph4: "We cook simply, almost never anything with strong odors, and above all, we are easy to communicate with and flexible when it comes to reaching agreements."
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
      paragraph1: "Som una parella tranquil·la, a la qual li agrada la vida acollidora, i hem estat llogant apartaments junts des del 2021, quan ens vam conèixer. Durant tot aquest temps, mai hem tingut una sola queixa per soroll, neteja o per deixar una vivenda en pitjors condicions de les que la vam trobar.",
      paragraph2: "Tots dos som bastant manetes. A Dima li agrada arreglar coses —ja sigui una pica o una rentadora—, mentre que Olesya s'enorgulleix de mantenir tot ordenat, net i ben cuidat, sovint reparant o reutilitzant objectes per allargar-los la vida.",
      paragraph3: "Sempre hem pagat el lloguer puntualment —sense un sol retard—. A més, podem confirmar la nostra solvència financera mitjançant extractes bancaris, si fos necessari.",
      paragraph4: "Cuinem de forma senzilla, gairebé mai res amb olors fortes, i sobretot, som fàcils per comunicar-nos i flexibles a l'hora d'arribar a acords."
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
      <div className="max-w-6xl mx-auto px-8">
        {/* Header Section */}
        <header className="pt-16 pb-12">
          <h1 className="text-7xl font-bold text-black mb-8 leading-tight">
            {t.title}
          </h1>
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-12">
            <div className="flex-1 text-lg leading-relaxed text-black">
              <p>{t.intro}</p>
            </div>
            <div className="w-full lg:w-96 flex-shrink-0">
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
        <section className="pb-20">
          <h2 className="text-5xl font-bold text-black mb-12 leading-tight">
            {t.familyTitle}
          </h2>

          <div className="space-y-12">
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
          </div>
        </section>

        {/* About Section */}
        <section className="pb-24">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg leading-relaxed text-black text-justify">
              {t.about.paragraph1}
            </p>
            <p className="text-lg leading-relaxed text-black text-justify">
              {t.about.paragraph2}
            </p>
            <p className="text-lg leading-relaxed text-black text-justify">
              {t.about.paragraph3}
            </p>
            <p className="text-lg leading-relaxed text-black text-justify">
              {t.about.paragraph4}
            </p>
          </div>
          <div className="flex justify-center mt-12">
            <DecorativeElements />
          </div>
        </section>
      </div>
    </div>
  );
}