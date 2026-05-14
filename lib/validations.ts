import { z } from 'zod'

const belgianPhoneRegex = /^(\+32|0)[1-9][0-9]{7,8}$/

export const contactFormSchema = z.object({
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  prenom: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  telephone: z
    .string()
    .regex(belgianPhoneRegex, 'Numéro de téléphone belge invalide (ex: 0472 00 00 00)'),
  motif: z.enum(['premier-rdv', 'suivi', 'urgence', 'esthetique', 'implant', 'autre'], {
    error: 'Veuillez sélectionner un motif',
  }),
  dentiste: z.enum(['indifferent', 'pr-samir', 'amaury', 'melanie'], {
    error: 'Veuillez indiquer votre préférence',
  }),
  creneau: z.string().optional(),
  message: z.string().max(1000, 'Le message ne peut pas dépasser 1000 caractères').optional(),
  rgpd: z.literal(true, {
    error: 'Vous devez accepter la politique de confidentialité pour envoyer ce formulaire.',
  }),
  // Honeypot — must remain empty
  website: z.string().max(0, '').optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
