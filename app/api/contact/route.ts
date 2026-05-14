import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Honeypot check
    if (body.website) {
      // Bot detected — silent success to not reveal detection
      return NextResponse.json({ success: true })
    }

    const result = contactFormSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { error: 'Données invalides', details: result.error.flatten() },
        { status: 400 }
      )
    }

    const { nom, prenom, email, telephone, motif, dentiste, creneau, message } = result.data

    // Format email content (no logging of PII)
    const emailContent = `
Nouvelle demande de rendez-vous — Dental Clinic Namour

Nom : ${nom} ${prenom}
Email : ${email}
Téléphone : ${telephone}
Motif : ${motif}
Dentiste souhaité : ${dentiste}
Créneau souhaité : ${creneau || 'Non précisé'}
Message : ${message || 'Aucun message'}

— Envoyé depuis le formulaire de contact dentalnamour.be
    `.trim()

    const apiKey = process.env.RESEND_API_KEY
    const contactEmail = process.env.CONTACT_EMAIL || 'contact@dentalnamour.be'

    if (!apiKey || apiKey === 're_placeholder_configure_before_launch') {
      // Development fallback — log to console (no PII in prod)
      console.log('[DEV] Contact form received — email not sent (Resend not configured)')
      return NextResponse.json({ success: true, dev: true })
    }

    // Send via Resend
    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: 'Formulaire RDV <noreply@dentalnamour.be>',
      to: [contactEmail],
      replyTo: email,
      subject: `Demande de RDV — ${nom} ${prenom} — ${motif}`,
      text: emailContent,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Contact API] Error:', error instanceof Error ? error.message : 'Unknown error')
    return NextResponse.json(
      {
        error: 'Une erreur interne est survenue. Veuillez réessayer ou nous appeler directement.',
      },
      { status: 500 }
    )
  }
}
