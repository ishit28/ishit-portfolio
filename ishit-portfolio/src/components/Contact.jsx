import { useState } from 'react'
import { profile } from '../data.js'
import { config } from '../config.js'

const empty = { name: '', company: '', email: '', msg: '' }

export default function Contact({ say }) {
  const [f, setF] = useState(empty)
  const [busy, setBusy] = useState(false)
  const up = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const subject = 'Opportunity for Ishit Tyagi' + (f.company ? ' – ' + f.company : '')
  const text = `Hi Ishit,\n\n${f.msg}\n\nRegards,\n${f.name}${f.company ? '\n' + f.company : ''}\n${f.email}`

  const valid = () => {
    if (f.name && f.email && f.msg) return true
    say('Please fill name, email and message')
    return false
  }
  const gmail = () => {
    if (!valid()) return
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`,
      '_blank', 'noopener'
    )
  }
  const whatsapp = () => {
    if (!valid()) return
    window.open(`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); say('Email copied') }
    catch { say(profile.email) }
  }
  const submit = async (e) => {
    e.preventDefault()
    if (!config.web3formsKey) return gmail()
    setBusy(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: config.web3formsKey,
          subject, name: f.name, email: f.email, company: f.company, message: f.msg,
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error('failed')
      say('Message sent. Thank you!')
      setF(empty)
    } catch {
      say('Could not send. Use Gmail or WhatsApp instead.')
    }
    setBusy(false)
  }

  return (
    <section id="contact" style={{ borderBottom: 0 }}>
      <div className="wrap">
        <h2>Hiring? Let's talk</h2>
        <div className="cgrid">
          <div>
            <p className="lead">Based in {profile.location}, and open to relocation. Pick whichever way is easiest for you.</p>
            <div className="cl">
              <a href={'tel:' + profile.phone}>{profile.phoneDisplay}<small>Call</small></a>
              <a href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent('Hi Ishit, I found your portfolio.')}`} target="_blank" rel="noopener noreferrer">
                WhatsApp {profile.whatsappDisplay}<small>Chat</small>
              </a>
              <a href={'mailto:' + profile.email}>{profile.email}<small>Email</small></a>
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} target="_blank" rel="noopener noreferrer">Write in Gmail<small>Gmail</small></a>
              <button type="button" onClick={copy}>Copy email address<small>Copy</small></button>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/ishittyagi<small>Connect</small></a>
              <a href={config.resumeUrl} download="Ishit_Tyagi_Resume.pdf">Resume (PDF)<small>Download</small></a>
            </div>
          </div>
          <form onSubmit={submit}>
            <label>Your name<input required autoComplete="name" value={f.name} onChange={up('name')} /></label>
            <label>Company<input autoComplete="organization" value={f.company} onChange={up('company')} /></label>
            <label>Your email<input type="email" required autoComplete="email" value={f.email} onChange={up('email')} /></label>
            <label>Message<textarea required value={f.msg} onChange={up('msg')} /></label>
            <div className="btns">
              <button className="btn p" type="submit" disabled={busy}>
                {busy ? 'Sending…' : config.web3formsKey ? 'Send message' : 'Send via Gmail'}
              </button>
              {config.web3formsKey && <button className="btn" type="button" onClick={gmail}>Open in Gmail</button>}
              <button className="btn" type="button" onClick={whatsapp}>Send on WhatsApp</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
