import { job } from '../data.js'

export default function Experience() {
  return (
    <section id="work" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <h2>Work experience</h2>
        <div className="job">
          <div className="when">{job.when}<br />{job.place}</div>
          <div>
            <h3>{job.title}</h3>
            <p className="org">{job.org}</p>
            <ul className="pts">{job.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}
