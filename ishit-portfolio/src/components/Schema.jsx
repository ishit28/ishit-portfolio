function Table({ cls, name, rows }) {
  return (
    <div className={'tbl ' + cls}>
      <h3>{name}</h3>
      {rows.map(([col, key]) => (
        <div key={col}><span>{col}</span><i>{key}</i></div>
      ))}
    </div>
  )
}

export default function Schema() {
  return (
    <div className="schema" aria-hidden="true">
      <svg viewBox="0 0 400 330" preserveAspectRatio="none">
        <path d="M150 70 C 210 70, 230 50, 250 50" />
        <path d="M90 130 C 90 200, 110 220, 110 240" />
        <path d="M300 120 C 300 200, 250 250, 230 270" />
      </svg>
      <Table cls="t1" name="personnel" rows={[['id', 'PK'], ['name', ''], ['unit', 'FK']]} />
      <Table cls="t2" name="modules" rows={[['id', 'PK'], ['title', ''], ['owner', 'FK']]} />
      <Table cls="t3" name="training_log" rows={[['id', 'PK'], ['person_id', 'FK'], ['module_id', 'FK'], ['date', '']]} />
    </div>
  )
}
