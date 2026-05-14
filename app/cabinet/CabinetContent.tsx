'use client'
import { useScrollReveal } from '@/lib/hooks/useScrollReveal'
import Link from 'next/link'
import { Ear, GraduationCap, Heart, Clock } from 'lucide-react'

const timeline = [
  {
    year: '1998',
    event: 'Le Pr. Samir Namour installe son cabinet dentaire rue Paul Spaak à Ixelles.',
  },
  {
    year: '2014',
    event:
      "Sa fille Mélanie Namour rejoint le cabinet après ses études. L'entité Namour Mélanie est créée (BCE BE0562994037).",
  },
  {
    year: '2018',
    event:
      "Son fils Amaury Namour intègre à son tour l'équipe. Trois générations exercent désormais ensemble.",
  },
  {
    year: "Aujourd'hui",
    event:
      'Pr. Samir, Amaury et Mélanie accueillent les patients de Bruxelles et de sa région depuis ce même cabinet familial.',
  },
]

const values = [
  {
    icon: Ear,
    title: 'Écoute',
    description:
      "Chaque patient est différent. Nous prenons le temps d'entendre vos préoccupations avant tout acte.",
  },
  {
    icon: GraduationCap,
    title: 'Pédagogie',
    description:
      "Nous expliquons chaque étape du soin. Comprendre ce qui se passe, c'est déjà être moins anxieux.",
  },
  {
    icon: Heart,
    title: 'Douceur',
    description:
      'Une approche douce et attentive, particulièrement pensée pour les patients appréhensifs.',
  },
  {
    icon: Clock,
    title: 'Disponibilité',
    description:
      'Urgences prises en charge, délais de prise en charge raisonnables, plusieurs praticiens disponibles.',
  },
]

type ValueItem = (typeof values)[0]

function ValueCard({ icon: Icon, title, description }: ValueItem) {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <div ref={ref} className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[oklch(96%_0.008_80)] flex items-center justify-center">
        <Icon
          size={20}
          className="text-[oklch(48%_0.08_220)]"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>
      <div>
        <h3 className="font-heading text-xl font-semibold text-[oklch(18%_0.015_80)] mb-1">
          {title}
        </h3>
        <p className="text-[oklch(32%_0.02_80)] leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export function CabinetContent() {
  const heroRef = useScrollReveal<HTMLElement>()
  const historyRef = useScrollReveal<HTMLElement>()
  const timelineRef = useScrollReveal<HTMLElement>()
  const valuesRef = useScrollReveal<HTMLElement>()
  const photosRef = useScrollReveal<HTMLElement>()
  const engagementsRef = useScrollReveal<HTMLElement>()

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-[oklch(98%_0.005_80)]">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-[oklch(18%_0.015_80)] leading-tight tracking-tight">
            Un cabinet familial où la dentisterie se transmet en héritage
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[oklch(32%_0.02_80)]">
            Depuis 1998, le cabinet Namour accompagne les patients d&apos;Ixelles et de Bruxelles.
            Ce qui a commencé comme une pratique individuelle est devenu, au fil des années, une
            aventure familiale unique.
          </p>
        </div>
      </section>

      {/* Notre histoire */}
      <section ref={historyRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-semibold text-[oklch(18%_0.015_80)] mb-6">
            Notre histoire
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-[oklch(32%_0.02_80)]">
            <p>
              Le Professeur Samir Namour installe son cabinet à Ixelles en 1998, porteur d&apos;une
              conviction simple : la dentisterie doit être accessible, expliquée, et douce.
            </p>
            <p>
              Vingt ans plus tard, ses deux enfants choisissent à leur tour cette vocation. Mélanie,
              puis Amaury, rejoignent le cabinet — non par obligation familiale, mais par passion
              partagée pour l&apos;accompagnement patient.
            </p>
            <p>
              Aujourd&apos;hui, trois Namour exercent côte à côte, chacun avec ses spécialités, tous
              unis par la même philosophie de soin.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-[oklch(98%_0.005_80)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-semibold text-[oklch(18%_0.015_80)] mb-10">
            Les étapes-clés
          </h2>
          <ol className="relative border-l-2 border-[oklch(92%_0.01_80)] space-y-8">
            {timeline.map((item) => (
              <li key={item.year} className="pl-6">
                <div
                  className="absolute -left-[9px] w-4 h-4 rounded-full bg-[oklch(48%_0.08_220)] border-2 border-white"
                  aria-hidden="true"
                />
                <time className="text-sm font-semibold text-[oklch(48%_0.08_220)]">
                  {item.year}
                </time>
                <p className="mt-1 text-[oklch(32%_0.02_80)] leading-relaxed">{item.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Nos valeurs */}
      <section ref={valuesRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-semibold text-[oklch(18%_0.015_80)] mb-10">
            Nos valeurs
          </h2>
          <div className="space-y-8">
            {values.map((v) => (
              <ValueCard key={v.title} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* Le cabinet — photos */}
      <section ref={photosRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-[oklch(98%_0.005_80)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-semibold text-[oklch(18%_0.015_80)] mb-6">
            Le cabinet
          </h2>
          <p className="text-[oklch(32%_0.02_80)] leading-relaxed mb-8">
            Situé au cœur d&apos;Ixelles, notre cabinet a été pensé pour que vous vous sentiez à
            l&apos;aise dès le seuil franchi. La salle d&apos;attente donne sur un jardin — un
            détail qui compte quand on appréhende le dentiste.
          </p>
          {/* TODO photo client: photo intérieur cabinet avec vue jardin */}
          <div className="aspect-video rounded-[0.75rem] bg-[oklch(92%_0.01_80)] flex items-center justify-center">
            <p className="text-[oklch(60%_0.015_80)] text-sm text-center">
              📷 Photo d&apos;intérieur du cabinet · Vue jardin
              <br />
              <span className="text-xs">(Photo à fournir par le cabinet)</span>
            </p>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section ref={engagementsRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-semibold text-[oklch(18%_0.015_80)] mb-8">
            Nos engagements concrets
          </h2>
          <ul className="space-y-3 text-[oklch(32%_0.02_80)]">
            <li className="flex items-start gap-3">
              <span className="text-[oklch(48%_0.08_220)] font-bold mt-0.5" aria-hidden="true">
                ✓
              </span>
              <span>Premier rendez-vous disponible sous un délai raisonnable</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[oklch(48%_0.08_220)] font-bold mt-0.5" aria-hidden="true">
                ✓
              </span>
              <span>Urgences dentaires prises en charge</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[oklch(48%_0.08_220)] font-bold mt-0.5" aria-hidden="true">
                ✓
              </span>
              {/* TODO confirmer langues parlées */}
              <span>Consultation possible en français, arabe et anglais</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[oklch(48%_0.08_220)] font-bold mt-0.5" aria-hidden="true">
                ✓
              </span>
              {/* TODO confirmer accessibilité PMR */}
              <span>Cabinet accessible aux personnes à mobilité réduite</span>
            </li>
          </ul>
          <div className="mt-10">
            <Link
              href="/equipe"
              className="inline-flex items-center px-6 py-3 rounded bg-[oklch(48%_0.08_220)] text-white font-medium hover:bg-[oklch(40%_0.09_220)] transition-colors focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2"
            >
              Rencontrer l&apos;équipe qui anime le cabinet
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
