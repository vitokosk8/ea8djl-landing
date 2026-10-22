import RouteMap from './RouteMap.jsx'
import LatestPosts from './LatestPosts.jsx'
import { profile, links, asns, trainer, content } from './data.js'
import retrato from './assets/fotos/retrato-run-bgp.webp'
import formacion from './assets/fotos/formacion.webp'
import viaje from './assets/fotos/viaje.webp'
import logoLo0 from './assets/fotos/lo0.webp'
import './App.css'

function Section({ id, title, children, aside }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <div className="section__head">
        <h2 className="section__title" id={`${id}-title`}>{title}</h2>
        {aside}
      </div>
      <div className="section__body">{children}</div>
    </section>
  )
}

function LangSwitch({ t, className }) {
  const s = t.switchTo
  return (
    <a className={className} href={s.href} hrefLang={s.lang} lang={s.lang}>{s.label}</a>
  )
}

export default function App({ lang }) {
  const t = content[lang] ?? content.en
  return (
    <>
      <header className="hero">
        <nav className="hero__lang" aria-label={t.nav.lang}>
          <LangSwitch t={t} className="langswitch" />
        </nav>
        <div className="hero__text">
          <p className="hero__callsign">{profile.callsign}</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">{profile.role}, {t.place}</p>
          <p className="hero__intro">{t.intro}</p>
          <nav className="hero__links" aria-label={t.nav.main}>
            {links.map((l) => (
              <a key={l.label} href={l.href} className="button">{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="hero__visual">
          <RouteMap />
          <img className="hero__photo" src={retrato} width="553" height="662" alt={t.alt.portrait} />
        </div>
      </header>

      <main>
        <Section id="about" title={t.titles.about}
          aside={<img className="section__photo section__photo--round" src={viaje} width="400" height="400"
            alt={t.alt.travel} loading="lazy" />}>
          <ul className="facts">
            {t.about.map((x) => <li key={x}>{x}</li>)}
          </ul>
          <p className="asns">
            {t.operate}{' '}
            {asns.map((a, i) => (
              <span key={a.asn}>
                {i > 0 && ` ${t.and} `}
                <a className="asn" href={a.href}>{a.asn}</a>
              </span>
            ))}
            .
          </p>
        </Section>

        <Section id="trainer" title={t.titles.trainer}>
          <figure className="figure">
            <img src={formacion} width="687" height="665" loading="lazy" alt={t.alt.training} />
          </figure>
          <dl className="trainer">
            {trainer.map((x) => (
              <div key={x.vendor} className="trainer__row">
                <dt>
                  <span className="trainer__vendor">{x.vendor}</span>
                  <span className="trainer__title">{x.title}</span>
                </dt>
                <dd>
                  <ul className="tags">
                    {x.certs.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
          <a className="lo0" href={t.lo0.href}>
            <img src={logoLo0} width="640" height="640" loading="lazy" alt={t.alt.lo0} />
            <span>
              <strong>{t.lo0.name}</strong>
              <span>{t.lo0.text}</span>
            </span>
          </a>
        </Section>

        <Section id="community" title={t.titles.community}>
          <ul className="community">
            {t.community.map((c) => (
              <li key={c.name}>
                <h3>{c.href ? <a href={c.href}>{c.name}</a> : c.name}</h3>
                <p>{c.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="blog" title={t.titles.blog}>
          <LatestPosts t={t.posts} locale={t.locale} />
          <p><a href="/blog/">{t.posts.all}</a></p>
        </Section>
      </main>

      <footer className="footer">
        <p>{profile.name}, {profile.callsign}</p>
        <nav aria-label={t.nav.footer}>
          {links.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
          <LangSwitch t={t} />
        </nav>
      </footer>
    </>
  )
}
