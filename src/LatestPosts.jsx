import { useEffect, useState } from 'react'

// Lee el RSS que genera Hugo en /blog/index.xml y muestra las tres últimas entradas.
export default function LatestPosts({ t, locale }) {
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

  if (state.status === 'loading') return <p className="muted">{t.loading}</p>

  if (state.status === 'error')
    return <p className="muted">{t.error} <a href="/blog/">{t.errorLink}</a>.</p>

  if (state.posts.length === 0) return <p className="muted">{t.empty}</p>

  const fmt = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' })
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
