'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function AppointmentForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setFormState('loading')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const err = await response.json()
        throw new Error(err.error || 'Erreur de serveur')
      }

      setFormState('success')
      reset()
    } catch (err) {
      setFormState('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Un problème est survenu. Veuillez réessayer.'
      )
    }
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-3 py-2 rounded border text-[oklch(18%_0.015_80)] text-sm bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(48%_0.08_220)] focus-visible:ring-offset-1 transition-colors ${
      hasError
        ? 'border-[oklch(55%_0.20_25)] bg-red-50'
        : 'border-[oklch(92%_0.01_80)] hover:border-[oklch(60%_0.015_80)]'
    }`

  const labelClass = 'block text-sm font-medium text-[oklch(18%_0.015_80)] mb-1'
  const errorClass = 'mt-1 text-xs text-[oklch(55%_0.20_25)]'
  const helperClass = 'mt-1 text-xs text-[oklch(60%_0.015_80)]'

  if (formState === 'success') {
    return (
      <div
        role="alert"
        className="rounded-[0.75rem] bg-[oklch(60%_0.15_150)]/10 border border-[oklch(60%_0.15_150)] p-6 flex items-start gap-3"
      >
        <CheckCircle
          size={20}
          className="text-[oklch(60%_0.15_150)] flex-shrink-0 mt-0.5"
          aria-hidden="true"
        />
        <div>
          <p className="font-medium text-[oklch(18%_0.015_80)]">Demande envoyée avec succès</p>
          <p className="mt-1 text-sm text-[oklch(32%_0.02_80)]">
            Nous vous recontactons sous 24h ouvrées. En cas d&apos;urgence, appelez-nous directement
            au{' '}
            <a
              href="tel:+3220000000"
              className="font-medium text-[oklch(48%_0.08_220)] hover:underline"
            >
              +32 (0)2 000 00 00
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setFormState('idle')}
            className="mt-3 text-sm text-[oklch(48%_0.08_220)] hover:underline focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2 rounded"
          >
            Envoyer une autre demande
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Ne pas remplir ce champ</label>
        <input id="website" type="text" tabIndex={-1} {...register('website')} autoComplete="off" />
      </div>

      {/* Error state alert */}
      {formState === 'error' && (
        <div
          role="alert"
          className="rounded border border-[oklch(55%_0.20_25)] bg-red-50 p-4 flex items-start gap-2"
        >
          <AlertCircle
            size={18}
            className="text-[oklch(55%_0.20_25)] flex-shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <div>
            <p className="text-sm font-medium text-[oklch(55%_0.20_25)]">{errorMessage}</p>
            <p className="text-xs mt-1 text-[oklch(32%_0.02_80)]">
              Ou appelez-nous au{' '}
              <a
                href="tel:+3220000000"
                className="font-medium text-[oklch(48%_0.08_220)] hover:underline"
              >
                +32 (0)2 000 00 00
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Nom + Prénom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nom" className={labelClass}>
            Nom <span aria-label="obligatoire">*</span>
          </label>
          <input
            id="nom"
            type="text"
            autoComplete="family-name"
            aria-required="true"
            aria-invalid={!!errors.nom}
            aria-describedby={errors.nom ? 'nom-error' : undefined}
            className={inputClass(!!errors.nom)}
            {...register('nom')}
          />
          {errors.nom && (
            <p id="nom-error" role="alert" className={errorClass}>
              {errors.nom.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="prenom" className={labelClass}>
            Prénom <span aria-label="obligatoire">*</span>
          </label>
          <input
            id="prenom"
            type="text"
            autoComplete="given-name"
            aria-required="true"
            aria-invalid={!!errors.prenom}
            aria-describedby={errors.prenom ? 'prenom-error' : undefined}
            className={inputClass(!!errors.prenom)}
            {...register('prenom')}
          />
          {errors.prenom && (
            <p id="prenom-error" role="alert" className={errorClass}>
              {errors.prenom.message}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span aria-label="obligatoire">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : 'email-helper'}
          className={inputClass(!!errors.email)}
          {...register('email')}
        />
        <p id="email-helper" className={helperClass}>
          Nous vous répondrons à cette adresse
        </p>
        {errors.email && (
          <p id="email-error" role="alert" className={errorClass}>
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Téléphone */}
      <div>
        <label htmlFor="telephone" className={labelClass}>
          Téléphone <span aria-label="obligatoire">*</span>
        </label>
        <input
          id="telephone"
          type="tel"
          autoComplete="tel"
          aria-required="true"
          aria-invalid={!!errors.telephone}
          aria-describedby={errors.telephone ? 'tel-error' : 'tel-helper'}
          className={inputClass(!!errors.telephone)}
          placeholder="0472 00 00 00"
          {...register('telephone')}
        />
        <p id="tel-helper" className={helperClass}>
          Format belge : 0472 00 00 00 ou +32 472 00 00 00
        </p>
        {errors.telephone && (
          <p id="tel-error" role="alert" className={errorClass}>
            {errors.telephone.message}
          </p>
        )}
      </div>

      {/* Motif */}
      <div>
        <label htmlFor="motif" className={labelClass}>
          Motif du rendez-vous <span aria-label="obligatoire">*</span>
        </label>
        <select
          id="motif"
          aria-required="true"
          aria-invalid={!!errors.motif}
          aria-describedby={errors.motif ? 'motif-error' : undefined}
          className={inputClass(!!errors.motif)}
          {...register('motif')}
        >
          <option value="">Sélectionner un motif</option>
          <option value="premier-rdv">Premier rendez-vous</option>
          <option value="suivi">Suivi / Contrôle</option>
          <option value="urgence">Urgence dentaire</option>
          <option value="esthetique">Soins esthétiques</option>
          <option value="implant">Implant dentaire</option>
          <option value="autre">Autre</option>
        </select>
        {errors.motif && (
          <p id="motif-error" role="alert" className={errorClass}>
            {errors.motif.message}
          </p>
        )}
      </div>

      {/* Dentiste souhaité */}
      <div>
        <label htmlFor="dentiste" className={labelClass}>
          Dentiste souhaité
        </label>
        <select
          id="dentiste"
          aria-describedby="dentiste-helper"
          className={inputClass(false)}
          {...register('dentiste')}
        >
          <option value="indifferent">Indifférent (nous choisissons pour vous)</option>
          <option value="pr-samir">Professeur Samir Namour</option>
          <option value="amaury">Amaury Namour</option>
          <option value="melanie">Mélanie Namour</option>
        </select>
        <p id="dentiste-helper" className={helperClass}>
          Optionnel — nous vous orienterons si besoin
        </p>
      </div>

      {/* Créneau souhaité */}
      <div>
        <label htmlFor="creneau" className={labelClass}>
          Créneau souhaité (indicatif)
        </label>
        <input
          id="creneau"
          type="date"
          min={new Date().toISOString().split('T')[0]}
          aria-describedby="creneau-helper"
          className={inputClass(false)}
          {...register('creneau')}
        />
        <p id="creneau-helper" className={helperClass}>
          Ce créneau est indicatif — nous confirmerons la disponibilité
        </p>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message (optionnel)
        </label>
        <textarea
          id="message"
          rows={4}
          aria-describedby="message-helper"
          className={`${inputClass(false)} resize-none`}
          placeholder="Décrivez brièvement votre situation ou vos questions..."
          {...register('message')}
        />
        <p id="message-helper" className={helperClass}>
          Max. 1000 caractères
        </p>
      </div>

      {/* RGPD */}
      <div>
        <div className="flex items-start gap-3">
          <input
            id="rgpd"
            type="checkbox"
            aria-required="true"
            aria-invalid={!!errors.rgpd}
            aria-describedby={errors.rgpd ? 'rgpd-error' : 'rgpd-label'}
            className="mt-0.5 w-4 h-4 rounded border-[oklch(92%_0.01_80)] accent-[oklch(48%_0.08_220)] cursor-pointer"
            {...register('rgpd')}
          />
          <label
            id="rgpd-label"
            htmlFor="rgpd"
            className="text-sm text-[oklch(32%_0.02_80)] cursor-pointer leading-relaxed"
          >
            J&apos;accepte la{' '}
            <a
              href="/politique-confidentialite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(48%_0.08_220)] underline hover:no-underline focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2 rounded"
            >
              politique de confidentialité
              <span className="sr-only"> (s&apos;ouvre dans un nouvel onglet)</span>
            </a>{' '}
            et consens au traitement de mes données pour la prise de rendez-vous.
            <span aria-label="obligatoire"> *</span>
          </label>
        </div>
        {errors.rgpd && (
          <p id="rgpd-error" role="alert" className={`${errorClass} mt-2`}>
            {errors.rgpd.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === 'loading'}
        aria-busy={formState === 'loading'}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded bg-[oklch(48%_0.08_220)] text-white font-medium hover:bg-[oklch(40%_0.09_220)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors focus-visible:outline-2 focus-visible:outline-[oklch(48%_0.08_220)] focus-visible:outline-offset-2"
      >
        {formState === 'loading' && (
          <Loader2 size={18} className="animate-spin" aria-hidden="true" />
        )}
        {formState === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande de rendez-vous'}
      </button>

      <p className="text-xs text-center text-[oklch(60%_0.015_80)]">
        Les champs marqués d&apos;un <span aria-label="astérisque">*</span> sont obligatoires
      </p>
    </form>
  )
}
