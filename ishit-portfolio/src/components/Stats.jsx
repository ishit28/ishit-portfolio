import { useEffect, useRef, useState } from 'react'
import { stats } from '../data.js'

function Counter({ to, suffix, label }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) { setValue(to); return }
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t) => {
        const p = Math.min((t - start) / 900, 1)
        setValue(Math.round(to * p))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => io.disconnect()
  }, [to])
  return (
    <div className="stat" ref={ref}>
      <b>{value + suffix}</b>
      <span>{label}</span>
    </div>
  )
}

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((s) => <Counter key={s.label} {...s} />)}
    </div>
  )
}
