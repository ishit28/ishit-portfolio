import { skills } from '../data.js'

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <h2>Skills</h2>
        <div className="skills">
          {skills.map(([group, items]) => (
            <div key={group}>
              <h3>{group}</h3>
              <div className="chips">{items.map((x) => <span className="chip" key={x}>{x}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
