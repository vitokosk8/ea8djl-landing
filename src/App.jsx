import RouteMap from './RouteMap.jsx'
import LatestPosts from './LatestPosts.jsx'
import { profile, links, asns, about, trainer, lo0, community } from './data.js'
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

export default function App() {
  return (
    <>
      <header className="hero">
        <div className="hero__text">
          <p className="hero__callsign">{profile.callsign}</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">{profile.role}, {profile.place}</p>
          <p className="hero__intro">{profile.intro}</p>
          <nav className="hero__links" aria-label="Enlaces">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="button">{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="hero__visual">
          <RouteMap />
          <img className="hero__photo" src={retrato} width="553" height="662"
            alt="Victor Bolaños con una camiseta que dice RUN BGP, delante de una estantería de libros de redes" />
        </div>
      </header>

      <main>
        <Section id="sobre-mi" title="Sobre mí"
          aside={<img className="section__photo section__photo--round" src={viaje} width="400" height="400"
            alt="Victor Bolaños en un mirador sobre la costa" loading="lazy" />}>
          <ul className="facts">
            {about.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <p className="asns">
            Opero{' '}
            {asns.map((a, i) => (
              <span key={a.asn}>
                {i > 0 && ' y '}
                <a className="asn" href={a.href}>{a.asn}</a>
              </span>
            ))}
            .
          </p>
        </Section>

        <Section id="formador" title="Formador certificado">
          <figure className="figure">
            <img src={formacion} width="687" height="665" loading="lazy"
              alt="Victor Bolaños explicando IS-IS en una pantalla durante un curso" />
          </figure>
          <dl className="trainer">
            {trainer.map((t) => (
              <div key={t.vendor} className="trainer__row">
                <dt>
                  <span className="trainer__vendor">{t.vendor}</span>
                  <span className="trainer__title">{t.title}</span>
                </dt>
                <dd>
                  <ul className="tags">
                    {t.certs.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
          <a className="lo0" href={lo0.href}>
            <img src={logoLo0} width="640" height="640" loading="lazy" alt="Logotipo de lo0" />
            <span>
              <strong>{lo0.name}</strong>
              <span>{lo0.text}</span>
            </span>
          </a>
        </Section>

        <Section id="comunidad" title="Comunidad de Internet">
          <ul className="community">
            {community.map((c) => (
              <li key={c.name}>
                <h3>{c.href ? <a href={c.href}>{c.name}</a> : c.name}</h3>
                <p>{c.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="blog" title="Últimas entradas">
          <LatestPosts />
          <p><a href="/blog/">Ver todas las entradas del blog</a></p>
        </Section>
      </main>

      <footer className="footer">
        <p>{profile.name}, {profile.callsign}</p>
        <nav aria-label="Enlaces del pie">
          {links.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
        </nav>
      </footer>
    </>
  )
}
