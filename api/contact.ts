export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'content-type': 'application/json' }
    })
  }

  try {
    const body = await req.json().catch(() => ({})) as {
      name?: string
      email?: string
      message?: string
    }

    const name = (body.name || '').toString()
    const email = (body.email || '').toString()
    const message = (body.message || '').toString()

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'content-type': 'application/json' }
      })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL
    const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'no-reply@swiftnexus.com'

    if (RESEND_API_KEY && CONTACT_TO_EMAIL) {
      const subject = `New Contact Form Submission — ${name}`
      const html = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
      `

      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: CONTACT_FROM_EMAIL,
          to: CONTACT_TO_EMAIL,
          subject,
          html
        })
      })

      if (!res.ok) {
        const text = await res.text().catch(() => '')
        console.error('Resend error', res.status, text)
        return new Response(JSON.stringify({ error: 'Failed to send email' }), {
          status: 502,
          headers: { 'content-type': 'application/json' }
        })
      }
    } else {
      // No email service configured; log-only fallback
      console.log('[contact] Received:', { name, email, message })
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' }
    })
  } catch (err) {
    console.error('Contact handler error', err)
    return new Response(JSON.stringify({ error: 'Unexpected server error' }), {
      status: 500,
      headers: { 'content-type': 'application/json' }
    })
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

