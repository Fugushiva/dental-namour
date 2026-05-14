'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/lib/hooks/useScrollReveal'
import {
  ShieldCheck,
  Settings,
  Star,
  Smile,
  Sparkles,
  Zap,
  Scissors,
  GitBranch,
  Ear,
  BookOpen,
  HelpCircle,
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const services = [
  {
    icon: ShieldCheck,
    title: 'Soins conservateurs',
    description:
      "Détartrage, obturations, prévention bucco-dentaire. L'essentiel pour préserver vos dents le plus longtemps possible.",
  },
  {
    icon: Settings,
    title: 'Endodontie',
    description:
      "Traitement de canal pour sauver les dents touchées en profondeur. Réalisé avec précision et le minimum d'inconfort.",
  },
  {
    icon: Star,
    title: 'Implants dentaires',
    description:
      "Remplacement durable des dents manquantes. Les implants en titane s'intègrent à votre mâchoire comme une dent naturelle.",
  },
  {
    icon: Smile,
    title: 'Prothèses',
    description:
      'Couronnes, bridges, prothèses amovibles. Des solutions adaptées à chaque situation clinique.',
  },
  {
    icon: Sparkles,
    title: 'Esthétique dentaire',
    description:
      'Blanchiment, facettes, remodelage. Pour un sourire qui vous ressemble et vous donne confiance.',
  },
  {
    icon: Zap,
    title: 'Dentisterie laser',
    description:
      'Une spécialité du Pr. Samir Namour. Traitements plus précis, moins invasifs et cicatrisation accélérée.',
  },
  {
    icon: Scissors,
    title: 'Chirurgie dentaire',
    description:
      'Extractions, greffes osseuses et gingivales, interventions chirurgicales réalisées au cabinet.',
  },
  {
    icon: GitBranch,
    title: 'Orthodontie',
    description:
      'Alignement des dents pour enfants, adolescents et adultes. Solutions fixes et amovibles discrètes.',
  },
]

const faqs = [
  {
    question: 'Quel est le tarif des soins ?',
    answer:
      "Les tarifs dépendent du type de soin, de votre mutuelle et du conventionnement. Le cabinet travaille avec les nomenclatures de l'INAMI. Nous vous communiquerons un devis clair avant tout traitement significatif. N'hésitez pas à nous contacter pour une première estimation.",
  },
  {
    question: 'Êtes-vous conventionnés ?',
    answer:
      'Le cabinet est conventionné pour la grande majorité des actes. Les actes esthétiques (blanchiment, facettes) ne sont pas remboursables par la mutuelle. Nous vous informerons au cas par cas lors de votre consultation.',
  },
  {
    question: 'Ma mutuelle rembourse-t-elle les soins ?',
    answer:
      "Les soins conservateurs, l'orthodontie (enfants), les prothèses et les implants peuvent bénéficier d'interventions de la mutuelle selon votre plan. Apportez votre carte d'identité et votre carte mutuelle à chaque visite.",
  },
  {
    question: 'Combien de temps dure un rendez-vous ?',
    answer:
      "Un rendez-vous courant (bilan, détartrage, obturation) dure en général 30 à 60 minutes. Les actes chirurgicaux ou les poses d'implants peuvent nécessiter davantage de temps. Nous vous indiquons la durée estimée à la prise de rendez-vous.",
  },
  {
    question: 'Les soins font-ils mal ?',
    answer:
      'La grande majorité des soins se fait sous anesthésie locale efficace. Nous ne commençons jamais un acte avant que vous soyez bien anesthésié·e. Vous pouvez lever la main à tout moment pour signaler une douleur ou un inconfort : nous nous adaptons.',
  },
  {
    question: 'Combien de séances faut-il pour un implant ?',
    answer:
      "Un implant nécessite généralement 2 à 4 visites sur une période de 3 à 6 mois (pose de l'implant, cicatrisation, pose de la couronne). Certains cas peuvent être traités en moins d'étapes. Votre plan de traitement sera établi lors de la consultation initiale.",
  },
  {
    question: 'Le blanchiment donne-t-il des résultats visibles ?',
    answer:
      'Oui. Un blanchiment professionnel en cabinet éclaircit les dents de 2 à 8 teintes selon la situation initiale. Le résultat est visible immédiatement et dure en général 1 à 2 ans selon vos habitudes alimentaires. Nous vous conseillons sur la technique la mieux adaptée.',
  },
]

function ServiceCard({ icon: Icon, title, description }: (typeof services)[0]) {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="p-5 rounded-[0.75rem] bg-white border border-[oklch(92%_0.01_80)] hover:-translate-y-0.5 transition-transform duration-200"
    >
      <Icon
        size={20}
        className="text-[oklch(48%_0.08_220)] mb-3"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <h3 className="font-heading text-lg font-semibold text-[oklch(18%_0.015_80)] mb-1">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-[oklch(32%_0.02_80)]">{description}</p>
    </div>
  )
}

export function SoinsContent() {
  const heroRef = useScrollReveal<HTMLElement>()
  const approcheRef = useScrollReveal<HTMLElement>()
  const testimonialRef = useScrollReveal<HTMLElement>()
  const ctaRef = useScrollReveal<HTMLElement>()

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-[oklch(98%_0.005_80)]">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-[oklch(18%_0.015_80)] leading-tight tracking-tight max-w-3xl">
            Tous les soins dentaires sous un même toit, pensés autour de vous
          </h1>
          <p className="mt-6 text-lg text-[oklch(32%_0.02_80)] max-w-2xl leading-relaxed">
            Du soin conservateur à la chirurgie implantaire, en passant par la dentisterie laser —
            notre cabinet réunit toutes les compétences pour vous accompagner à chaque étape.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[oklch(96%_0.008_80)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section ref={approcheRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Ear
              size={24}
              className="text-[oklch(48%_0.08_220)]"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h2 className="font-heading text-3xl font-semibold text-[oklch(18%_0.015_80)]">
              Notre approche pour les patients anxieux
            </h2>
          </div>
          <div className="space-y-4 text-[oklch(32%_0.02_80)] leading-relaxed">
            <p>
              Nous savons que la peur du dentiste est réelle. Elle touche des millions de personnes
              et n&apos;a rien d&apos;irrationnel. Notre approche repose sur un principe simple :
              rien ne se passe sans votre accord explicite.
            </p>
            <p>
              Avant chaque soin, nous vous expliquons ce que nous allons faire, pourquoi, et
              comment. Vous pouvez poser toutes vos questions. Nous ne commençons jamais un acte
              tant que vous n&apos;êtes pas prêt·e.
            </p>
            <p>
              Vous pouvez lever la main à tout moment pour marquer une pause. L&apos;anesthésie est
              systématiquement vérifiée avant d&apos;intervenir. Votre rythme est le nôtre.
            </p>
          </div>

          <div className="mt-8 p-4 rounded-[0.5rem] bg-[oklch(96%_0.008_80)] flex items-start gap-3">
            <BookOpen
              size={18}
              className="text-[oklch(48%_0.08_220)] mt-0.5 flex-shrink-0"
              aria-hidden="true"
            />
            <p className="text-sm text-[oklch(32%_0.02_80)]">
              Si vous avez des craintes particulières, précisez-le dans le formulaire de
              rendez-vous. Nous pourrons en tenir compte dès la préparation de votre visite.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[oklch(98%_0.005_80)]">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle
              size={24}
              className="text-[oklch(48%_0.08_220)]"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h2 className="font-heading text-3xl font-semibold text-[oklch(18%_0.015_80)]">
              Questions fréquentes
            </h2>
          </div>
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

      {/* Testimonial on soins */}
      <section ref={testimonialRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-semibold text-[oklch(18%_0.015_80)] mb-8">
            Ce que disent nos patients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-[0.75rem] bg-[oklch(98%_0.005_80)] border border-[oklch(92%_0.01_80)]">
              <p className="text-sm italic text-[oklch(32%_0.02_80)] leading-relaxed mb-4">
                {/* TODO: Remplacer par verbatim client réel */}
                [Verbatim patient — soins implant]
              </p>
              <p className="text-xs text-[oklch(60%_0.015_80)]">Patient implant · Google · 2024</p>
            </div>
            <div className="p-6 rounded-[0.75rem] bg-[oklch(98%_0.005_80)] border border-[oklch(92%_0.01_80)]">
              <p className="text-sm italic text-[oklch(32%_0.02_80)] leading-relaxed mb-4">
                {/* TODO: Remplacer par verbatim client réel */}
                [Verbatim patient anxieux]
              </p>
              <p className="text-xs text-[oklch(60%_0.015_80)]">
                Patient anxieux · Selfcity · 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[oklch(48%_0.08_220)] text-center"
      >
        <h2 className="font-heading text-3xl font-semibold text-white mb-4">
          Discutons de votre besoin
        </h2>
        <p className="text-white/80 mb-8 max-w-lg mx-auto">
          Chaque cas est différent. Prenez rendez-vous pour une première consultation — nous
          évaluerons ensemble ce qui est le mieux adapté pour vous.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded bg-white text-[oklch(48%_0.08_220)] font-medium hover:bg-[oklch(98%_0.005_80)] transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            Prendre rendez-vous
          </Link>
          <Link
            href="/temoignages"
            className="inline-flex items-center justify-center px-8 py-3 rounded border border-white text-white font-medium hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            Voir les témoignages
          </Link>
        </div>
      </section>
    </>
  )
}
