import { useEffect, useState } from 'react'

// Lee el RSS que genera Hugo en /blog/index.xml y muestra las tres últimas entradas.
export default function LatestPosts() {
  const [state, setState] = useState({ status: 'loading', posts: [] })

  useEffect(() => {
    let alive = true
    fetch('/blog/index.xml')
      .then((r) => {
        if (!r.ok) throw new Error(r.status)
        return r.text()
      })
      .then((xml) => {
        const doc = new DOMParser().parseFromString(xml, 'application/xml')
        const posts = [...doc.querySelectorAll('item')].slice(0, 3).map((item) => ({
          title: item.querySelector('title')?.textContent ?? '',
          link: item.querySelector('link')?.textContent ?? '/blog/',
          date: new Date(item.querySelector('pubDate')?.textContent ?? ''),
        }))
        if (alive) setState({ status: 'ok', posts })
      })
      .catch(() => alive && setState({ status: 'error', posts: [] }))
    return () => { alive = false }
  }, [])

  if (state.status === 'loading') return <p className="muted">Cargando entradas…</p>

  if (state.status === 'error')
    return (
      <p className="muted">
        No se han podido cargar las entradas. Puedes leerlas directamente en <a href="/blog/">el blog</a>.
      </p>
    )

  if (state.posts.length === 0)
    return <p className="muted">Todavía no hay entradas publicadas. Cuando escriba la primera, aparecerá aquí.</p>

  const fmt = new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
  return (
    <ul className="posts">
      {state.posts.map((p) => (
        <li key={p.link}>
          <a href={p.link}>{p.title}</a>
          {!isNaN(p.date) && <time dateTime={p.date.toISOString()}>{fmt.format(p.date)}</time>}
        </li>
      ))}
    </ul>
  )
}
