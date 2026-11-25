import { education, training } from '../data.js'

function Block({ id, heading, items }) {
  return (
    <section id={id}>
      <div className="wrap">
        <h2>{heading}</h2>
        <div className="edu">
          {items.map((e) => (
            <div key={e.title}>
              <h3>{e.title}</h3>
              <p>{e.where}</p>
              {e.note && <p>{e.note}</p>}
              {e.chips && <div className="chips">{e.chips.map((c) => <span className="chip" key={c}>{c}</span>)}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Education = () => <Block id="education" heading="Education" items={education} />
export const Training = () => <Block id="training" heading="Training and certifications" items={training} />
