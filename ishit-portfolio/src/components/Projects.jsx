import { useState } from 'react'
import { projects } from '../data.js'

export default function Projects() {
  const [i, setI] = useState(0)
  const p = projects[i]
  return (
    <section id="projects">
      <div className="wrap">
        <h2>Projects</h2>
        <div className="proj">
          <div className="tabs" role="tablist" aria-label="Projects">
            {projects.map((q, k) => (
              <button key={q.name} className="tab" role="tab" aria-selected={k === i} onClick={() => setI(k)}>
                {q.name}<small>{q.year}</small>
              </button>
            ))}
          </div>
          <div className="panel" role="tabpanel">
            <h3>{p.name}</h3>
            <div className="chips">{p.tech.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
            <ul className="pts">{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
            {(p.repo || p.demo) && (
              <div className="btns" style={{ marginTop: 18 }}>
                {p.demo && <a className="btn p" href={p.demo} target="_blank" rel="noopener noreferrer">Live demo</a>}
                {p.repo && <a className="btn" href={p.repo} target="_blank" rel="noopener noreferrer">View code</a>}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
