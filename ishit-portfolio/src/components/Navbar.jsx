import { useState } from 'react'
import { nav, profile } from '../data.js'

export default function Navbar({ active, theme, onTheme }) {
  const [open, setOpen] = useState(false)
  return (
    <nav>
      <div className="wrap">
        <b>{profile.name}</b>
        <ul className={'menu' + (open ? ' open' : '')} id="menu">
          {nav.map(([id, label]) => (
            <li key={id}>
              <a href={'#' + id} className={active === id ? 'on' : ''} onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="ctl">
          <button className="ib" onClick={onTheme} aria-label="Switch light or dark theme">
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <button className="ib burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu">
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
    </nav>
  )
}
