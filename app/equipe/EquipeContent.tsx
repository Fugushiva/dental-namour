'use client'
import { useScrollReveal } from '@/lib/hooks/useScrollReveal'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const dentists = [
  {
    name: 'Professeur Samir Namour',
    title: 'Fondateur · Professeur en Sciences Dentaires',
    specialties: ['Dentisterie laser', 'Soins conservateurs', 'Formation & recherche'],
    yearsExperience: '25+',
    bio: "Le Pr. Samir Namour est le fondateur du cabinet. Professeur reconnu en sciences dentaires, il a construit sa pratique autour d'une conviction : la pédagogie et la douceur sont les meilleures anesthésies. Son expertise en dentisterie laser est reconnue à l'échelle internationale.",
    education: 'Professeur en Sciences Dentaires · Formation internationale en dentisterie laser',
  },
  {
    name: 'Amaury Namour',
    title: 'Dentiste',
    specialties: ['Implantologie', 'Chirurgie dentaire', 'Esthétique'],
    yearsExperience: '7+',
    bio: "Après des études poussées en implantologie et chirurgie, Amaury Namour a rejoint le cabinet familial avec une approche résolument moderne. Son regard neuf et sa formation pointue complètent parfaitement l'expertise de son père.",
    education: 'Master en Sciences Dentaires · Spécialisation en implantologie',
  },
  {
    name: 'Mélanie Namour',
    title: 'Dentiste — Namour Mélanie (BCE BE0562994037)',
    specialties: ['Prothèses', 'Endodontie', 'Suivi des patients anxieux'],
    yearsExperience: '10+',
    bio: "Mélanie Namour a été la première à rejoindre son père au cabinet. Reconnue pour sa patience et son sens de l'écoute, elle est particulièrement appréciée des patients qui appréhendent le dentiste. Sa spécialisation en endodontie lui permet de gérer les cas les plus complexes avec sérénité.",
    education: 'Master en Sciences Dentaires · Spécialisation en endodontie et prothèses',
  },
]

const faqs = [
  {
    question: 'Pourquoi un cabinet familial ?',
    answer:
      "La confiance se construit dans la durée. Lorsque vous venez chez nous, vous n'êtes pas un numéro de dossier — vous êtes accueilli par des personnes qui partagent des valeurs communes, transmises de génération en génération. Un cabinet familial, c'est aussi une stabilité : les Namour sont là depuis 25 ans et n'ont pas l'intention de partir.",
  },
  {
    question: 'Puis-je choisir mon dentiste ?',
    answer:
      "Absolument. Vous pouvez exprimer votre préférence lors de la prise de rendez-vous. Si vous n'avez pas de préférence, nous vous orienterons vers le praticien le plus adapté à votre besoin (disponibilité, spécialité, etc.).",
  },
  {
    question: 'Travaillez-vous en complémentarité sur un même patient ?',
    answer:
      "Oui, c'est l'un des avantages d'un cabinet multi-praticiens en famille. Si votre cas nécessite plusieurs spécialités (par exemple, une extraction suivie d'un implant), nous coordonnons le traitement en interne, sans vous renvoyer à l'extérieur.",
  },
  {
    question: "Parlez-vous d'autres langues ?",
    answer:
      "Le cabinet pratique principalement en français. Des consultations sont également possibles en anglais et en arabe. N'hésitez pas à préciser votre préférence lors de la prise de rendez-vous.",
  },
]

type DentistItem = (typeof dentists)[0]

function DentistBlock({ name, title, specialties, yearsExperience, bio, education }: DentistItem) {
  const ref = useScrollReveal<HTMLElement>()
  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[oklch(92%_0.01_80)]">
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Photo placeholder */}
        <div className="aspect-square rounded-[0.75rem] bg-[oklch(92%_0.01_80)] flex items-center justify-center md:col-span-1">
          {/* TODO photo client: Portrait de {name} */}
          <p className="text-[oklch(60%_0.015_80)] text-xs text-center px-2">
            📷 Portrait
            <br />
            {name}
            <br />
            <span className="text-[10px]">(Photo à fournir)</span>
          </p>
        </div>

        {/* Content */}
        <div className="md:col-span-2">
          <h2 className="font-heading text-2xl font-semibold text-[oklch(18%_0.015_80)]">{name}</h2>
          <p className="text-[oklch(48%_0.08_220)] font-medium mt-1 mb-4">{title}</p>
          <p className="text-[oklch(32%_0.02_80)] leading-relaxed mb-6">{bio}</p>

          <div className="flex flex-wrap gap-3 mb-4">
            <div className="px-3 py-1.5 bg-[oklch(96%_0.008_80)] rounded text-sm">
              <span className="font-semibold text-[oklch(48%_0.08_220)]">{yearsExperience}</span>
              <span className="text-[oklch(32%_0.02_80)] ml-1">ans d&apos;exercice</span>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-[oklch(18%_0.015_80)] mb-2">Spécialités :</p>
            <ul className="flex flex-wrap gap-2">
              {specialties.map((s) => (
                <li
                  key={s}
                  className="px-3 py-1 rounded-full bg-[oklch(70%_0.13_40)]/10 text-sm text-[oklch(63%_0.14_40)] font-medium border border-[oklch(70%_0.13_40)]/20"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-[oklch(60%_0.015_80)] mt-4">{education}</p>
        </div>
      </div>
    </section>
  )
}

export function EquipeContent() {
  const heroRef = useScrollReveal<HTMLElement>()
  const faqRef = useScrollReveal<HTMLElement>()
  const ctaRef = useScrollReveal<HTMLElement>()

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-[oklch(98%_0.005_80)]">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-[oklch(18%_0.015_80)] leading-tight">
            Une équipe, une famille, trois regards d&apos;expert sur votre sourire
          </h1>
          <p className="mt-6 text-lg text-[oklch(32%_0.02_80)]">
            Rencontrez le Professeur Samir Namour, Amaury et Mélanie — trois dentistes
            complémentaires unis par une même passion à Bruxelles.
          </p>
        </div>
        {/* Group photo placeholder */}
        <div className="max-w-3xl mx-auto mt-10 aspect-[3/1] rounded-[0.75rem] bg-[oklch(92%_0.01_80)] flex items-center justify-center">
          <p className="text-[oklch(60%_0.015_80)] text-sm text-center">
            📷 Photo des trois Namour ensemble — Pr. Samir, Amaury et Mélanie
            <br />
            <span className="text-xs">(Photo à fournir par le cabinet)</span>
          </p>
        </div>
      </section>

      {/* Dentist blocks */}
      {dentists.map((d) => (
        <DentistBlock key={d.name} {...d} />
      ))}

      {/* FAQ */}
      <section ref={faqRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-[oklch(98%_0.005_80)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-semibold text-[oklch(18%_0.015_80)] mb-8">
            Questions fréquentes sur le cabinet familial
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-[oklch(92%_0.01_80)] rounded-[0.5rem] px-4"
              >
                <AccordionTrigger className="font-medium text-[oklch(18%_0.015_80)] hover:text-[oklch(48%_0.08_220)] hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[oklch(32%_0.02_80)] leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <h2 className="font-heading text-2xl font-semibold text-[oklch(18%_0.015_80)] mb-6">
          Prendre rendez-vous avec un dentiste
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-4 rounded bg-[oklch(48%_0.08_220)] text-white font-medium hover:bg-[oklch(40%_0.09_220)] transition-colors focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2"
        >
          Prendre rendez-vous
        </Link>
        <p className="mt-4 text-sm text-[oklch(32%_0.02_80)]">
          Précisez votre praticien préféré dans le formulaire, ou laissez-nous choisir pour vous.
        </p>
      </section>
    </>
  )
}
