import { profile } from '../data.js'
import { config } from '../config.js'
import Schema from './Schema.jsx'

export default function Hero() {
  return (
    <div className="hero">
      <div>
        <div className="badges">
          <span className="badge"><i />Open to work</span>
          <span className="badge">Willing to relocate</span>
        </div>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="lead">{profile.intro}</p>
        <div className="btns">
          <a className="btn p" href="#contact">Hire me</a>
          <a className="btn" href={config.resumeUrl} download="Ishit_Tyagi_Resume.pdf">Download resume</a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {profile.github && <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
        </div>
      </div>
      <Schema />
    </div>
  )
}
