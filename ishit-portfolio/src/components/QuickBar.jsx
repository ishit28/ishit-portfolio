import { profile } from '../data.js'

export default function QuickBar() {
  return (
    <div className="fb" role="group" aria-label="Quick contact">
      <a className="p" href={'tel:' + profile.phone}>Call</a>
      <a href={'https://wa.me/' + profile.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <a href={'mailto:' + profile.email}>Email</a>
    </div>
  )
}
